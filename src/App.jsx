import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-72 mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full p-2 text-right text-lg border rounded mb-2"
        />
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", "C", "=", "+"].map(
            (btn) => (
              <button
                key={btn}
                onClick={() => (btn === "=" ? calculateResult() : btn === "C" ? clearInput() : handleClick(btn))}
                className="p-4 bg-gray-200 rounded-lg text-lg hover:bg-gray-300"
              >
                {btn}
              </button>
            )
          )}
        </div>
      </div>

      {/* Chatbot iframe */}
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/7onCWEYlWnp3zkHL0NOvR"
        width="100%"
        style={{ height: "500px", maxWidth: "400px", borderRadius: "10px" }}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
