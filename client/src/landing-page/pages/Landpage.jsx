import React, { useContext, useEffect, useRef, useState } from "react";
import '../landing.css'
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Features from "../components/Features";
import dashboard from "../../assets/dashboard-ui.png";
import Solutions from "../components/Solutions";
import Banner2 from "../components/Banner2";
import Pricing from "../components/Pricing";
import Feedback from "../components/Feedback";
import FooterTop from "../components/FooterTop";
import MainFooter from "../components/MainFooter";
import bot from "../../assets/bot.avif";
import Loader from "../../dashboard/Components/Loader";
import { Context } from "../../global-states/ContextApi";

const Landpage = () => {
   const {loading,setLoading} =useContext(Context);
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
  function sendHandler() {
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
    switch (msg.toLowerCase()) {
      case "hi":
      case "hello":
        setAllMessages((prev) => [
          ...prev,
          {
            sendby: "bot",
            msg: " Hi there! I’m StockFlow Bot. How can I assist you today?",
            time,
          },
        ]);
        break;

      case "what is stockflow":
      case "about stockflow":
        setAllMessages((prev) => [
          ...prev,
          {
            sendby: "bot",
            msg: "StockFlow is an intelligent warehouse management system that helps you track inventory, manage operations, and boost efficiency — all in real time!",
            time,
          },
        ]);
        break;

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

      case "contact":
      case "support":
      case "contact support":
        setAllMessages((prev) => [
          ...prev,
          {
            sendby: "bot",
            msg: "📞 You can reach us at:\n mdirreef@gmail.com Or +91-98765-43210",
            time,
          },
        ]);
        break;

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

      case "pricing":
        setAllMessages((prev) => [
          ...prev,
          {
            sendby: "bot",
            msg: "💰 Our pricing is flexible for all warehouse sizes.\nClick below to explore plans:\n👉 https://stockflow.com/pricing",
            time,
          },
        ]);
        break;

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

      case "help":
        setAllMessages((prev) => [
          ...prev,
          {
            sendby: "bot",
            msg: "🧭 I can help you with:\n- About StockFlow\n- Features\n- Services\n- Pricing\n- Contact Info\n- Demo\nJust type any of these to begin!",
            time,
          },
        ]);
        break;

      default:
        setAllMessages((prev) => [
          ...prev,
          {
            sendby: "bot",
            msg: "🤖 Sorry, I didn’t understand that.\nType 'help' to see what I can do!",
            time,
          },
        ]);
        break;
    }
  }

  console.log("All Msg: ", allMessages);
  return (
    <div>
      {loading&&<Loader/>}
      <Navbar setLoading={setLoading}/>
      <div className="banner-section">
        <Banner />
        <div className="banner-bottom">
          <div className="">
            <h3>99.9%</h3>
            <p>Accuracy Rate</p>
          </div>
          <div className="">
            <h3>50%</h3>
            <p>Cost Reduction</p>
          </div>
          <div className="">
            <h3>10K+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Powerful Features For Modern Warehouses
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "rgb(82, 82, 82)",
            marginTop: "20px",
          }}
        >
          Our Comprehensive suite of tools helps you manage every aspect of your
          warehouse operations with precision and efficiency.
        </p>
        <Features />
      </div>
      <div className="dashboard-ui">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Modern Warehouses Management Dashboard
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "rgb(82, 82, 82)",
            marginTop: "20px",
          }}
        >
          A smart, real-time dashboard to monitor, manage, and optimize modern
          warehouse operations with efficiency, accuracy, and data-driven
          insights.
        </p>
        <img src={dashboard} alt="" />
      </div>

      <div className="solutions-section">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Comprehensive Warehouse Solutions
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "rgb(82, 82, 82)",
            marginTop: "20px",
          }}
        >
          End-toend services designed to optimize your warehouse operations and
          drive business growth
        </p>
        <Solutions />
      </div>

      <div className="banner2-section">
        <Banner2 />
      </div>

      <div className="pricing-section">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Comprehensive Warehouse Solutions
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "rgb(82, 82, 82)",
            marginTop: "20px",
          }}
        >
          {" "}
          Choose from our range of services designed to meet your specific
          warehouse management needs.
        </p>
        <Pricing />
      </div>

      <div className="feedback-section">
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Trusted by Industry Leaders
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "rgb(82, 82, 82)",
            marginTop: "20px",
          }}
        >
          {" "}
          See what our clients say about their experience with StockFlow
        </p>
        <Feedback />
      </div>

      <footer className="footer-section1">
        <FooterTop />
      </footer>
      <MainFooter />

      {/* CHAT BOT  STARTS*/}
      <div className="chat-option">
        {botOpen && (
          <>
            <div className="chat-box">
              <div className="chat-head">
                <p>
                  {allMessages.length > 0 && (
                    <button className="bot-back" onClick={backBotButton}>
                      <i class="ri-arrow-left-line"></i>
                    </button>
                  )}
                  StockFlow Warehouse Management System
                </p>
              </div>
              {allMessages.length > 0 ? (
                <>
                  <div className="chat-content" id="chat-content" ref={chatRef}>
                    {allMessages.map((singleMsg, index) => {
                      if (singleMsg.sendby == "you") {
                        return (
                          <>
                            {/* sender message starts */}
                            <div className="message" key={index}>
                              <span className="sender-msg">
                                <span className="sender-name">You</span>

                                <span className="actual-msg">
                                  {singleMsg.msg}
                                </span>
                                <span className="sender-msg-time">
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
                              <span className="bot-msg">
                                <span className="bot-name">
                                  StockFlow <i class="ri-robot-2-fill"></i>
                                </span>
                                <span className="bot-actual-msg">
                                  {singleMsg.msg}
                                  
                                </span>

                                <span className="bot-msg-time">
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
                    className="chat-content-bot "
                    id="chat-content"
                    ref={chatRef}
                  >
                    <div className="bot-image">
                      <img src={bot} alt="" />
                    </div>
                    <div className="predefined-inputs">
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("hi");
                        }}
                      >
                        Hi
                      </button>
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("what is stockflow");
                        }}
                      >
                        What is StockFlow
                      </button>
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("features");
                        }}
                      >
                        Features
                      </button>
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("services");
                        }}
                      >
                        Services
                      </button>
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("contact support");
                        }}
                      >
                        Contact Support
                      </button>
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("get started");
                        }}
                      >
                        Get Started
                      </button>
                      <button
                        className="predefined-btn"
                        onClick={() => {
                          predifinedBtnHandler("pricing");
                        }}
                      >
                        Pricing
                      </button>
                      <button
                        className="predefined-btn"
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

              <div className="chat-input-box">
                <input
                  type="text"
                  value={sendMessage.msg}
                  placeholder="Ask your queries"
                  onChange={(e) => {
                    checkTyping(e.target.value);
                  }}
                />
                <button
                  className={enableSend ? `typed-send` : `send`}
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
          className="chatbot-button"
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

      {/* CHAT BOT  ENDS*/}
    </div>
  );
};

export default Landpage;
