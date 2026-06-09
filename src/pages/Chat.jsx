import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io("http://localhost:5100");

function Chat() {
  const [started, setStarted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const loadMessages = async (userEmail) => {
    try {
      const res = await axios.get(
        `http://localhost:5100/api/chat/messages/${userEmail}`
      );

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.userEmail === email) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => {
      socket.off("receive_message");
    };
  }, [email]);

  const handleStart = async () => {
    if (!name || !email) {
      alert("Enter name and email");
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Enter valid email");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5100/api/chat/save-user",
        {
          name,
          email,
        }
      );

      await loadMessages(email);

      setStarted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    const data = {
      userEmail: email,
      sender: name,
      message,
    };

    try {
      await axios.post(
        "http://localhost:5100/api/chat/send-message",
        data
      );

      socket.emit("send_message", data);

      setMessages((prev) => [...prev, data]);

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6">
          Live Chat
        </h1>

        {!started ? (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-3 rounded-lg"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <button
              onClick={handleStart}
              className="bg-black text-white px-6 py-3 rounded-lg w-full"
            >
              Start Chat
            </button>
          </div>
        ) : (
          <>
            <div className="h-100 overflow-y-auto border rounded-lg p-4 mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 ${
                    msg.sender === "admin"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block px-4 py-2 rounded-lg ${
                      msg.sender === "admin"
                        ? "bg-black text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Type message..."
                className="flex-1 border p-3 rounded-lg"
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
              />

              <button
                onClick={sendMessage}
                className="bg-black text-white px-6 rounded-lg"
              >
                Send
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Chat;