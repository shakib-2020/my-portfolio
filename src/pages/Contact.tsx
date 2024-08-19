import TitleSection from "@/components/TitleSection/TitleSection";
import ContentWrapper from "@/components/wrapper/ContentWrapper";
import React from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsEnvelope } from "react-icons/bs";
import Button from "@/components/Button/Button";
import TitleUnderLine from "@/components/TitleUnderLine";

const contactInfo = [
  {
    data: `+880 1739400729`,
    icon: <MdOutlinePhoneAndroid />,
    sortMsg: "Reach out to me directly for quick responses.",
    uri: "",
  },
  {
    data: "Moulvibazar, Sylhet, Bangladesh",
    sortMsg: "Visit me in Moulvibazar for a chat over coffee.",
    icon: <SlLocationPin />,
    uri: "",
  },
  {
    data: "nazshakib01@gmail.com",
    sortMsg: "Send me a message, and I'll get back to you as soon as possible.",
    icon: <BsEnvelope />,
    uri: "",
  },
];

function Contact() {
  return (
    <section>
      <TitleSection title="Contact" />
      <ContentWrapper
        className={
          "lg:grid grid-cols-6 flex flex-col lg:flex-row gap-10 lg:gap-4"
        }
      >
        {/* contact info */}
        <section className="col-span-2 flex flex-col gap-4 pr-10">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <span className="text-[#0382f9] text-3xl">{item.icon}</span>
              <div>
                <h2 className="text-lg lg:text-xl font-semibold mb-[2px]">
                  {item.data}
                </h2>
                <p className="text-sm text-slate-400 font-mono">
                  {item.sortMsg}
                </p>
              </div>
            </div>
          ))}
        </section>
        {/* contact form */}
        <section className="col-span-4">
          <div className="mb-4">
            <h3 className="text-2xl font-semibold">Have a question?</h3>
            <TitleUnderLine width="w-48" />
            <span className="text-sm font-mono">
              Looking forward to hearing from you. Fill in your details and
              let's start a conversation.
            </span>
          </div>
          <form className="lg:grid grid-cols-5 gap-1">
            <div className="col-span-2 flex flex-col gap-2">
              <input
                className="max-w-[500px] p-3 bg-transparent border border-[#555555] rounded-sm font-mono  focus:outline-none focus:border-[#0382f9] text-sm lg:text-base"
                placeholder="Enter your name!"
              />
              <input
                className="max-w-[500px] p-3 bg-transparent border border-[#555555] rounded-sm font-mono focus:outline-none focus:border-[#0382f9] text-sm lg:text-base"
                placeholder="Enter your email!"
              />
            </div>
            <textarea
              className="max-w-[500px] min-h-[150px] lg:min-h-0 w-full mt-2 lg:mt-0 col-span-3 p-3 bg-transparent border border-[#555555] rounded-sm font-mono focus:outline-none focus:border-[#0382f9] text-sm lg:text-base"
              placeholder="Enter your message..."
            />
          </form>
          <Button variant="outlineBlue" href="">
            Send
          </Button>
        </section>
      </ContentWrapper>
    </section>
  );
}

export default Contact;
