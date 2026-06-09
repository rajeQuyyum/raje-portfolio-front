import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  transports: ["polling", "websocket"],
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  withCredentials: true,
});

function Chat() {
  const [started, setStarted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const loadMessages = async (userEmail) => {
    try {
      const res = await axios.get(
  `${import.meta.env.VITE_API_URL}/api/chat/messages/${userEmail}`
);

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  socket.off("receive_message");

  socket.on("receive_message", (data) => {
    setMessages((prev) => {
      const exists = prev.some(
        (msg) =>
          msg.message === data.message &&
          msg.sender === data.sender
      );

      if (exists) return prev;

      return [...prev, data];
    });
  });

  return () => {
    socket.off("receive_message");
  };
}, []);

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
  `${import.meta.env.VITE_API_URL}/api/chat/save-user`,
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
  `${import.meta.env.VITE_API_URL}/api/chat/send-message`,
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
            <div className="border rounded-xl overflow-hidden mb-4">

  {/* CHAT HEADER */}
  <div className="bg-black text-white p-4 flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
      {name?.charAt(0).toUpperCase()}
    </div>

    <div>
      <h2 className="font-semibold">
        {name}
      </h2>

      <p className="text-xs text-gray-300">
        Active now
      </p>
    </div>
  </div>

  {/* CHAT BODY */}
  <div className="h-125 overflow-y-auto p-4 bg-gray-100">
    {messages.map((msg, index) => (
      <div
        key={index}
        className={`mb-4 flex ${
          msg.sender === "admin"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        <div
          className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-sm ${
            msg.sender === "admin"
              ? "bg-black text-white rounded-br-sm"
              : "bg-white text-black rounded-bl-sm"
          }`}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold opacity-70">
              {msg.sender === "admin"
                ? "Admin"
                : name}
            </span>

            <span className="text-[10px] opacity-60">
              {new Date().toLocaleTimeString(
                [],
                {
                  hour: "2-digit",
                  minute: "2-digit",
                }
              )}
            </span>
          </div>

          <p className="text-sm leading-relaxed">
            {msg.message}
          </p>
        </div>
      </div>
    ))}
  </div>
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