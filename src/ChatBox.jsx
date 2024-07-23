import React from "react";
import Chatbot from "./Chatbot";
import { useState } from "react";

function ChatBox({ chatOpen }) {
    //
    // const [chatOpen, setChatOpen] = useState();

    // const togglechange=()=>{
    //     setChatOpen(!chatOpen)
    //     console.log(chatOpen);
    //   }
    console.log(chatOpen);
    return (
        <div>
                   {chatOpen?<div
                style={{
                    height: "70px",
                    width: "200px",
                    backgroundColor: "whitesmoke",
                    position: "fixed",
                    bottom: "30px",
                    right: "25px",
                    border: "1px solid #ccc",

                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    //  overflow: hidden;
                }}
                className="div"
            >
                <h3                    onClick={console.log(chatOpen)}
                >Chat Now</h3>
            </div> : <Chatbot/>
                   
            }

            
        </div>
    );
}

export default ChatBox;
