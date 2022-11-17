import React from "react";
import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Review from "./Review";
import axios from "axios";

const Contact = ({ theme }) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });
  const { name, content } = formData;
  const onchange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //getting the review data
  const getData = async () => {
    await axios
      .get(`http://localhost:5000/api/review`)
      .then((res) => {
        setData(res.data.message.review);
        localStorage.setItem(
          "message",
          JSON.stringify(res.data.message.review)
        );
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

  //sending the review data to the back
  const sendData = async (data) => {
    await axios
      .post(`http://localhost:5000/api/review/send`, data)
      .then((response) => {
        getData();
      })
      .catch((error) => {
        setErr(error.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const submitMessage = (e) => {
    e.preventDefault();
    sendData(formData);

    setFormData({
      name: "",
      content: "",
    });
  };
  localStorage.getItem("message");
  return (
    <div className=" w-full   md:text-sm p-2 flex-col flex items-center scroll gap-4">
      <div className=" w-[100%] flex  items-center  justify-between text-3xl text-bold font-bold">
        <span className="w-full h-px bg-gray-400 mr-3"></span>
        <span className="w-full  text-center">Get In Touch</span>
        <span className="w-full h-px bg-gray-400 ml-3"></span>
      </div>

      <div className="p-2 md:w-full text-center text-base flex flex-col gap-4 ">
        <p>
          Since I have collected required skillset to hop on to my coding
          career. Though I have specific skillset as listed I am open for the
          opportunities within the boundaries and beyond my skillset. So, if you
          like my work and feel like you have a role that could fit, feel free
          to reach out.
        </p>
        <div className="w-full flex flex-wrap gap-4">
          {data.map((data, x) => (
            <Review message={data} key={x} />
          ))}
        </div>
        <form
          className="w-full flex flex-col gap-4 items-center justify-center"
          onSubmit={submitMessage}
        >
          <span className="text-left text-xl text-bold">
            Please Post your review here
          </span>

          <div className="w-full flex flex-col gap-2 items-center text-left ">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <h3>Your Name</h3>
              <input
                type="text"
                className={`text-black p-2 outline-none rounded-[8px] ${
                  !theme ? "bg-gray-300" : ""
                }`}
                name={"name"}
                value={name}
                onChange={onchange}
              />
            </div>
            <div className=" w-full md:w-1/2 flex flex-col gap-2 ">
              <h3>Message</h3>
              <textarea
                type="text"
                className={`text-black p-2 outline-none rounded-[8px]  ${
                  !theme ? "bg-gray-300" : ""
                }`}
                name={"content"}
                value={content}
                onChange={onchange}
              />
            </div>

            <button className="w-1/2 border border-solid border-red-400 text-base p-2 my-4 rounded-[8px]">
              Post
            </button>
          </div>
        </form>
      </div>
      <div className="w-full flex items-center justify-center my-4 md:hidden">
        <div className="w-2/6 flex items-center justify-between">
          <a href="https://github.com/Krisna07">
            <FaGithub className="hover:text-red-400  " />
          </a>

          <a href="https://www.linkedin.com/in/krishna-paudel-4724541b1/">
            <FaLinkedinIn className="hover:text-red-400 " />
          </a>
          <a href="https://twitter.com/krishnapaudel07">
            <FaTwitter className="hover:text-red-400 " />
          </a>
        </div>
      </div>

      <button className="border border-solid border-red-400 text-base p-2 my-4 rounded-[8px]">
        <a href="mailto:krisnachhetri07@gmail.com">Say Hello</a>
      </button>
    </div>
  );
};

export default Contact;
