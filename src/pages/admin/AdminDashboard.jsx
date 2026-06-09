import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import io from "socket.io-client";

const socket = io(import.meta.env.VITE_API_URL, {
  transports: ["polling", "websocket"],
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  withCredentials: true,
});


function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] =
    useState(null);

  const [messages, setMessages] =
    useState([]);

  const [reply, setReply] = useState("");

  const token =
    localStorage.getItem("adminToken");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin/login");
  };

  useEffect(() => {
  fetchUsers();

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

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
       `${import.meta.env.VITE_API_URL}/api/admin/users`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const openChat = async (email) => {
    setSelectedUser(email);

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/messages/${email}`,
        {
          headers: {
            authorization: token,
          },
        }
      );

      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendReply = async () => {
    if (!reply.trim()) return;

    try {
      const data = {
        userEmail: selectedUser,
        sender: "admin",
        message: reply,
      };

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/reply`,
        {
          userEmail: selectedUser,
          message: reply,
        },
        {
          headers: {
            authorization: token,
          },
        }
      );

      socket.emit("send_message", data);

      setMessages((prev) => [
        ...prev,
        data,
      ]);

      setReply("");
    } catch (error) {
      console.log(error);
    }
  };


  const clearChat = async () => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/admin/clear-chat/${selectedUser}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    setMessages([]);
  } catch (error) {
    console.log(error);
  }
};



const deleteUser = async () => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/admin/delete-user/${selectedUser}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    setUsers((prev) =>
      prev.filter(
        (user) =>
          user.email !== selectedUser
      )
    );

    setSelectedUser(null);

    setMessages([]);
  } catch (error) {
    console.log(error);
  }
};


const deleteMessage = async (id) => {
  try {
    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/admin/delete-message/${id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    setMessages((prev) =>
      prev.filter(
        (msg) => msg._id !== id
      )
    );
  } catch (error) {
    console.log(error);
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">

      {/* SIDEBAR */}
      <div className="w-full md:w-87.5 bg-white border-r p-4 overflow-y-auto">

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            Chats
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>

        <div className="space-y-3">
          {users.map((user) => (
            <div
              key={user._id}
              onClick={() =>
                openChat(user.email)
              }
              className={`p-4 rounded-2xl cursor-pointer transition-all ${
                selectedUser === user.email
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <div className="flex items-center gap-3">

                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    selectedUser ===
                    user.email
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {user.name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                <div className="overflow-hidden">
                  <h2 className="font-semibold truncate">
                    {user.name}
                  </h2>

                  <p
                    className={`text-sm truncate ${
                      selectedUser ===
                      user.email
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                  >
                    {user.email}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col p-2 md:p-6">

        <div className="border rounded-2xl overflow-hidden shadow-sm flex flex-col h-[90vh] bg-white">

          {/* CHAT HEADER */}
          <div className="bg-black text-white p-4 flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold">
              {selectedUser
                ?.charAt(0)
                .toUpperCase()}
            </div>

            <div className="overflow-hidden">
              <h2 className="font-semibold truncate">
                {selectedUser ||
                  "Select User"}
              </h2>

              <p className="text-xs text-gray-300">
                Active Chat
              </p>

              <div className="flex gap-2 mt-2 flex-wrap">

  <button
    onClick={clearChat}
    className="bg-white text-black text-xs px-3 py-1 rounded-lg"
  >
    Clear Chat
  </button>

  <button
    onClick={deleteUser}
    className="bg-red-700 text-white text-xs px-3 py-1 rounded-lg"
  >
    Delete User
  </button>

</div>
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 overflow-y-auto bg-gray-100 p-4">

            {messages.length === 0 && (
              <div className="h-full flex items-center justify-center text-gray-400">
                No messages yet
              </div>
            )}

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
                  className={`max-w-[85%] md:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
                    msg.sender === "admin"
                      ? "bg-black text-white rounded-br-sm"
                      : "bg-white text-black rounded-bl-sm"
                  }`}
                >

                  <div className="flex items-center gap-2 mb-1">

                    <span className="text-xs font-semibold opacity-70">
                      {msg.sender}
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

                  <div className="flex items-start justify-between gap-3">

  <p className="text-sm w-full wrap-break-word">
    {msg.message}
  </p>

  <button
    onClick={() => deleteMessage(msg._id)}
    className="text-red-400 hover:text-red-600 text-xs"
  >
    X
  </button>

</div>

                </div>
              </div>
            ))}

          </div>

          {/* INPUT */}
          {selectedUser && (
            <div className="p-3 border-t bg-white">

              <div className="flex gap-2">

                <input
                  type="text"
                  placeholder="Type message..."
                  value={reply}
                  onChange={(e) =>
                    setReply(e.target.value)
                  }
                  className="flex-1 border p-3 rounded-xl outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  onClick={sendReply}
                  className="bg-black text-white px-5 rounded-xl"
                >
                  Send
                </button>

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;