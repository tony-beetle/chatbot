import React from "react";
import { useState ,useEffect } from "react";
import "./chatbot.css";
import ChatBox from "./ChatBox";
import { useRef } from "react";

function Chatbot() {
  //
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);


  const containerRef = useRef(null);
  const messagesEndRef = useRef(100);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView();
    }
  }, [messages]);

  const getButtonLabel = (event) => {
    if (event.target.tagName === 'BUTTON') {
      const buttonLabel = event.target.textContent;
      setInput(buttonLabel)
      // setInterval(code, delay)
      alert(buttonLabel);
    }
  };
  const handleResponse = (input) => {
    const userMessage = input.trim().toLowerCase();
    let botResponse = '';
    console.log(userMessage);
    if (userMessage.includes('services') || (userMessage.includes('service') )) {
      botResponse = 'We offer a variety of services including Branding ,Web/ App Development, SEO optimization, and digital marketing.';
    } else if (userMessage.includes('appointment')) {
      botResponse = 'You can schedule an appointment by calling us at 123-456-7890 or emailing us at contact@beeetle.com.';
    } 
    
    else {
      botResponse = `You said: ${input}`;
    }

    return botResponse;
  };
  //   const togglechange = () => {
  //     setChatOpen(!chatOpen);
  //     console.log(chatOpen);
  //   };

  const sendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      const botResponse = handleResponse(input);
      setInput("");
      setTimeout(() => {
        setMessages([
          ...newMessages,
          { sender: "bot", text: ` ${botResponse}` },
        ]);
      }, 1000);
    }
     console.log(messages);
     console.log(input);
  };
  return (
    <div>
      {chatOpen ? (
        <ChatBox chatOpen={chatOpen} />
      ) : (
        <div className="chatbot">
          {/* <div className="toggle">
        <i onClick={togglechange} class="fa-solid  fa-xl fa-xmark"></i>
        </div> */}
          <div style={{ padding: "15px" }} className="chatbot-header">
            Bitsy Chatbot
          </div>
          
          <div className="chatbot-messages">
          <div ref={containerRef} onClick={getButtonLabel} className= "div message bot p-2"> 
            <button
              // onClick={handleResponse}
              style={{ marginBottom: "5px" }}
              className="btn btn-outline-primary p-1"
            >
              Services Offered{" "}
            </button>
            <button
             onClick={sendMessage}
            className="btn btn-outline-primary p-1">
              {" "}
              schedule an Appointment{" "}
            </button>
          </div>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
             <div ref={messagesEndRef} />
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
