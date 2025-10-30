
import React, { useEffect, useRef, useState } from "react";


import bot from "../../assets/bot3.jpg";
const ChatBot = () => {
    const chatRef = useRef();
      const [botOpen, setBotOpen] = useState(false);
      const [enableSend, setEnableSend] = useState(false);
      const [allMessages, setAllMessages] = useState([]);
      const [sendMessage, setSendMessage] = useState({
        sendby: "",
        msg: "",
        time: "",
      });
      const [loadingMsg, setLoadingMsg] = useState(false);
    
      const checkTyping = (input) => {
        if (input != "") {
          setEnableSend(true);
        } else {
          setEnableSend(false);
        }
        const sendTime = new Date();
        const time =
          sendTime.getHours() +
          ":" +
          sendTime.getMinutes() +
          " " +
          (sendTime.getHours() >= 12 ? "PM" : "AM");
    
        const message = {
          sendby: "you",
          msg: input,
          time,
        };
        console.log("send: ", message);
    
        setSendMessage(message);
      };
      function predifinedBtnHandler(input) {
        console.log("btn: ", input);
    
        const sendTime = new Date();
        const time =
          sendTime.getHours() +
          ":" +
          sendTime.getMinutes() +
          " " +
          (sendTime.getHours() >= 12 ? "PM" : "AM");
    
        const message = {
          sendby: "you",
          msg: input,
          time,
        };
    
        setAllMessages((prev) => [...prev, message]);
        setTimeout(() => {
          setLoadingMsg(true);
        }, 1000);
        
        setTimeout(() => {
          setLoadingMsg(false);
        }, 4000);
        setTimeout(() => {
          botHandler(input);
        }, 4000);
      }
      function sendHandler(e) {
        e.preventDefault();
        setAllMessages((prev) => [...prev, sendMessage]);
        setTimeout(() => {
          setLoadingMsg(true);
        }, 1000);
        setTimeout(() => {
          setLoadingMsg(false);
        }, 4000);
        setTimeout(() => {
          botHandler(sendMessage.msg);
          setSendMessage({
            sendby: "",
            msg: "",
            time: "",
          });
        }, 4000);
      }
    
      function backBotButton() {
        setAllMessages([]);
      }
      useEffect(() => {
        if (botOpen && chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
      }, [sendMessage, allMessages, botOpen]);
    
      function botHandler(msg) {
        const sendTime = new Date();
        const time =
          sendTime.getHours() +
          ":" +
          sendTime.getMinutes() +
          " " +
          (sendTime.getHours() >= 12 ? "PM" : "AM");
        // switch (msg.toLowerCase()) {
        //   case "hi":
        //   case "hello":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: " Hi there! I’m StockFlow Bot. How can I assist you today?",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "what is stockflow":
        //   case "about stockflow":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "StockFlow is an intelligent warehouse management system that helps you track inventory, manage operations, and boost efficiency — all in real time!",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "features":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg:
        //           "🚀 Key Features of StockFlow:\n" +
        //           "• Real-time inventory tracking\n" +
        //           "• Smart restock alerts\n" +
        //           "• AI-powered analytics\n" +
        //           "• Barcode & QR scan support\n" +
        //           "• Role-based access control",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "services":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg:
        //           "💼 Our Services:\n" +
        //           "• WMS onboarding support\n" +
        //           "• API integration\n" +
        //           "• Data migration & setup\n" +
        //           "• 24/7 technical support\n" +
        //           "• On-demand training",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "contact":
        //   case "support":
        //   case "contact support":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "📞 You can reach us at:\n mdirreef@gmail.com Or +91-98765-43210",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "demo":
        //   case "get started":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "🎯 You can request a live demo or get started now at:\n👉 https://stockflow.com/get-started",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "pricing":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "💰 Our pricing is flexible for all warehouse sizes.\nClick below to explore plans:\n👉 https://stockflow.com/pricing",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "thank you":
        //   case "thanks":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "😊 You're welcome! Let me know if you need anything else.",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   case "help":
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "🧭 I can help you with:\n- About StockFlow\n- Features\n- Services\n- Pricing\n- Contact Info\n- Demo\nJust type any of these to begin!",
        //         time,
        //       },
        //     ]);
        //     break;
    
        //   default:
        //     setAllMessages((prev) => [
        //       ...prev,
        //       {
        //         sendby: "bot",
        //         msg: "🤖 Sorry, I didn’t understand that.\nType 'help' to see what I can do!",
        //         time,
        //       },
        //     ]);
        //     break;
        // }


        switch (msg.toLowerCase()) {
  // Greeting
  case "hi":
  case "hello":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "👋 Hello! I’m StockFlow Bot. How can I assist you today, teammate?",
        time,
      },
    ]);
    break;

  // General info about StockFlow
  case "what is stockflow":
  case "about stockflow":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "📦 StockFlow is an intelligent warehouse management system that helps you track inventory, manage operations, and boost efficiency — all in real time!",
        time,
      },
    ]);
    break;

  // Features
  case "features":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg:
          "🚀 Key Features of StockFlow:\n" +
          "• Real-time inventory tracking\n" +
          "• Smart restock alerts\n" +
          "• AI-powered analytics\n" +
          "• Barcode & QR scan support\n" +
          "• Role-based access control",
        time,
      },
    ]);
    break;

  // Services
  case "services":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg:
          "💼 Our Services:\n" +
          "• WMS onboarding support\n" +
          "• API integration\n" +
          "• Data migration & setup\n" +
          "• 24/7 technical support\n" +
          "• On-demand training",
        time,
      },
    ]);
    break;

  // Contact
  case "contact":
  case "support":
  case "contact support":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "📞 You can reach us at:\nmdirreef@gmail.com\n📱 +91-98765-43210",
        time,
      },
    ]);
    break;

  // Demo
  case "demo":
  case "get started":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "🎯 You can request a live demo or get started now at:\n👉 https://stockflow.com/get-started",
        time,
      },
    ]);
    break;

  // Pricing
  case "pricing":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "💰 Our pricing is flexible for all warehouse sizes.\n👉 Visit: https://stockflow.com/pricing",
        time,
      },
    ]);
    break;

  // Employee support commands
  case "how to add inventory":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "📦 To add inventory:\n1. Go to 'Inventory'\n2. Click 'Add Item'\n3. Fill details like SKU, Quantity, and Location\n4. Click 'Save'",
        time,
      },
    ]);
    break;

  case "generate report":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "📊 To generate reports:\nGo to 'Analytics' tab → Choose report type → Set time range → Click 'Export'.",
        time,
      },
    ]);
    break;

  case "pending orders":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "📦 You can view pending orders under 'Orders' section → Filter by status: Pending.",
        time,
      },
    ]);
    break;

  case "my tasks":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "📝 Your assigned tasks are visible in 'Dashboard' → 'My Tasks'. You can mark them complete or ask for help.",
        time,
      },
    ]);
    break;

  case "leave request":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "🏖️ To apply for leave:\n1. Go to 'Employee Portal'\n2. Click 'Leave Request'\n3. Enter dates and reason\n4. Submit",
        time,
      },
    ]);
    break;

  case "shift timings":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "🕘 Your shift schedule is under your profile → 'Shift Timings'. Check HR section for team schedules.",
        time,
      },
    ]);
    break;

  case "who is my manager":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "👤 Your reporting manager is listed in your profile under 'Supervisor Info'.",
        time,
      },
    ]);
    break;

  // Gratitude
  case "thank you":
  case "thanks":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "😊 You're welcome! Let me know if you need anything else.",
        time,
      },
    ]);
    break;

  // Help
  case "help":
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg:
          "🧭 I can help you with:\n" +
          "• About StockFlow\n" +
          "• Features / Services / Pricing / Demo\n" +
          "• Add Inventory / Generate Report\n" +
          "• View Tasks / Pending Orders\n" +
          "• Leave Requests / Shift Timings\n" +
          "• Manager Info / Contact Support\nJust type your query to begin!",
        time,
      },
    ]);
    break;

  // Default fallback
  default:
    setAllMessages((prev) => [
      ...prev,
      {
        sendby: "bot",
        msg: "🤖 Sorry, I didn’t understand that.\nType 'help' to see what I can assist you with!",
        time,
      },
    ]);
    break;
}

      }
    
      console.log("All Msg: ", allMessages);
  return (
    <>
     {/* CHAT BOT  STARTS*/}
          <div className="chat1-option">
            {botOpen && (
              <>
                <div className="chat1-box">
                  <div className="chat1-head">
                    <p>
                      {allMessages.length > 0 && (
                        <button className="bot1-back" onClick={backBotButton}>
                          <i class="ri-arrow-left-line"></i>
                        </button>
                      )}
                      StockFlow Warehouse Management System
                    </p>
                  </div>
                  {allMessages.length > 0 ? (
                    <>
                      <div className="chat1-content" id="chat1-content" ref={chatRef}>
                        {allMessages.map((singleMsg, index) => {
                          if (singleMsg.sendby == "you") {
                            return (
                              <>
                                {/* sender message starts */}
                                <div className="message1" key={index}>
                                  <span className="sender-msg1">
                                    <span className="sender-name1">You</span>
    
                                    <span className="actual-msg1">
                                      {singleMsg.msg}
                                    </span>
                                    <span className="sender-msg-time1">
                                      {singleMsg.time}
                                    </span>
                                  </span>
                                </div>
                                <br />
                                <br />
                                <br />
                                {/* sender message ends */}
                              </>
                            );
                          } else {
                            return (
                              <>
                                {/* Bot message starts */}
                                <div className="message" key={index}>
                                  <span className="bot1-msg">
                                    <span className="bot1-name">
                                      StockFlow <i class="ri-robot-2-fill"></i>
                                    </span>
                                    <span className="bot1-actual-msg">
                                      {singleMsg.msg}
                                      
                                    </span>
    
                                    <span className="bot1-msg-time">
                                      {singleMsg.time}
                                    </span>
                                  </span>
                                </div>
                                <br />
                                <br />
                                <br />
    
                                {/* Bot message ends */}
                              </>
                            );
                          }
                        })}
    
                        {loadingMsg && (
                          <>
                            <span className="typing-aimate">
                              <div className="animation-dot"></div>
                              <div className="animation-dot"></div>
                              <div className="animation-dot"></div>
                            </span>
                          </>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="chat1-content-bot1 "
                        id="chat1-content"
                        ref={chatRef}
                      >
                        <div className="bot1-image">
                          <img src={bot} alt="" />
                        </div>
                        <div className="predefined-inputs">
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("hi");
                            }}
                          >
                            Hi
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("what is stockflow");
                            }}
                          >
                            What is StockFlow
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("features");
                            }}
                          >
                            Features
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("services");
                            }}
                          >
                            Services
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("contact support");
                            }}
                          >
                            Contact Support
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("get started");
                            }}
                          >
                            Get Started
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("pricing");
                            }}
                          >
                            Pricing
                          </button>
                          <button
                            className="predefined-btn1"
                            onClick={() => {
                              predifinedBtnHandler("help");
                            }}
                          >
                            Help
                          </button>
                        </div>
                      </div>
                    </>
                  )}
    
                  <div className="chat1-input-box">
                    <form action="" onSubmit={(e)=>{sendHandler(e)}}>
                        <input
                      type="text"
                      value={sendMessage.msg}
                      placeholder="Ask your queries"
                      onChange={(e) => {
                        checkTyping(e.target.value);
                      }}
                    />
                    </form>
                    <button
                      className={enableSend ? `typed-send1` : `send`}
                      disabled={enableSend ? false : true}
                      onClick={sendHandler}
                    >
                      <i class="ri-send-plane-2-fill"></i>
                    </button>
                  </div>
                </div>
              </>
            )}
            <button
              className="chat1bot-button"
              onClick={() => {
                setBotOpen((prev) => {
                  return !prev;
                });
              }}
            >
              <i
                class={
                  botOpen
                    ? `ri-close-large-line bot-icon`
                    : `ri-robot-2-fill bot-icon`
                }
              ></i>
            </button>
          </div>
    
          {/* chat1 BOT  ENDS*/}
    
    </>
  )
}

export default ChatBot