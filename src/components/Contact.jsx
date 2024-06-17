import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import Lottie from "lottie-react";
import message from "../assets/animation/message.json";
import messageOk from "../assets/animation/message-ok.json";
import sending from "../assets/animation/sending.json";
import rejectSend from "../assets/animation/reject-send.json";
import emailjs from "emailjs-com";
import MainBtn from "./MainBtn";

const Contact = () => {
  const [messageData, setMessageData] = useState({
    from_name: "",
    from_email: "",
    to_name: "saeed",
    message: "",
  });
  const [sendingMessage, setSendingMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      from_name: messageData.from_name + " " + messageData.from_email,
      to_name: messageData.to_name,
      message: messageData.message,
    };
    setSendingMessage(true);
    emailjs
      .send("service_brxqlrv", "template_pqi434c", obj, "nP8P_3HBV4XJHFIq1")
      .then(
        (result) => {
          setSendingMessage(false);
          setSuccessMessage(true);
          setMessageData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          setSendingMessage(false);
          setErrorMessage(true);
        }
      );
  };

  const handleInputChange = (e) => {
    setMessageData({ ...messageData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact">
      {/* ============
      section title 👇
      ================ */}
      <div className="mb-8">
        <SectionTitle>
          <MdOutlineMailOutline /> contact us
        </SectionTitle>
        <p className="text-font-sub-color capitalize">
        Let's connect and explore opportunities to collaborate on
        exciting projects
        </p>
      </div>
      {/* ==============
      contact form 👇
      ================== */}
      <div className="flex items-center flex-col sm:flex-row">
        <div className="w-full sm:w-8/12 order-2 sm:order-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:items-start gap-4"
          >
            {/* name input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="text-font-sub-color w-28">Your Name:</label>
              <input
                type="text"
                required
                name="from_name"
                value={messageData.from_name}
                onChange={handleInputChange}
                className="border border-border-color w-full sm:w-60 bg-bg-nav focus:border-hover-color px-4 py-1 rounded-md"
              />
            </div>
            {/* email input */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <label className="text-font-sub-color w-28">Your Email:</label>
              <input
                type="email"
                required
                name="from_email"
                value={messageData.from_email}
                onChange={handleInputChange}
                className="border border-border-color w-full sm:w-60 bg-bg-nav focus:border-hover-color px-4 py-1 rounded-md"
              />
            </div>
            {/* message input */}
            <div className="flex flex-col self-stretch sm:flex-row items-start sm:items-center gap-4">
              <label className="text-font-sub-color w-28">Your Message:</label>
              <textarea
                required
                name="message"
                value={messageData.message}
                onChange={handleInputChange}
                className="border tracking-wider border-border-color min-h-44 max-h-96 w-full sm:w-8/12 bg-bg-nav 
                focus:border-hover-color px-4 py-1 rounded-md"
              />
            </div>
            {/* submit button */}
            <div className="flex min-w-32 md:items-center flex-col md:flex-row gap-4">
              <MainBtn>
                send
              </MainBtn>
              {/* =============
              sending message 👇
              ================= */}
              {sendingMessage && (
                <p className="flex-1 items-center flex gap-3">
                  <span className="w-[40px] lg:w-[50px]">
                    <Lottie animationData={sending} />
                  </span>{" "}
                  <span className="text-font-sub-color">Sending...</span>
                </p>
              )}
              {successMessage && (
                <p className="flex-1 items-center flex gap-3">
                  <span className="w-[40px] lg:w-[50px]">
                    <Lottie loop={false} animationData={messageOk} />
                  </span>{" "}
                  your message has been sent successfully
                </p>
              )}
              {errorMessage && (
                <p className="flex-1 items-center flex gap-3">
                  <span className="w-[40px] lg:w-[50px]">
                    <Lottie animationData={rejectSend} />
                  </span>
                  <span>{errorMessage} rejected</span>
                </p>
              )}
            </div>
          </form>
        </div>
        {/* ===============
        right section 👇
        =================== */}
        <div className="flex-1 order-1 sm:order-2">
          <Lottie animationData={message} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
