import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Contactform = () => {
  const contacts = [
    {
      logo: "https://cdn-icons-png.flaticon.com/128/4213/4213179.png",
      title: "Phone",
      desc: "+91 84510-37216",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/128/15047/15047587.png",
      title: "Email",
      desc: "chaudharysaif@eng.rizvi.edu.in",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/128/1865/1865269.png",
      title: "Location",
      desc: "Mumbai, Thane - 400601",
    },
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "shac55",
        "template_toup2mi",
        form.current,
        "AEQTtPWoqFEna-jVv"
      )
      .then(() => {
        toast.success("Message sent successfully! ✅");
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message ❌");
      });
  };

  return (
    <div className="bg-[#1e1e1e] text-white rounded-3xl p-6 md:p-10 w-full mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Form
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Form */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-2">Let’s Talk</h3>
          <p className="text-gray-300 mb-4">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#272727] border border-gray-600"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#272727] border border-gray-600"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              className="w-full p-3 rounded bg-[#272727] border border-gray-600"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Interested In"
              className="w-full p-3 rounded bg-[#272727] border border-gray-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded bg-[#272727] border border-gray-600"
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors w-full p-3 rounded text-white font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Info */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 md:mt-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 bg-[#272727] p-6 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img
                src={c.logo}
                alt={c.title}
                className="w-14 h-14 bg-[#1e1e1e] rounded-md p-3"
              />
              <div>
                <h4 className="font-semibold">{c.title}</h4>
                <p className="text-gray-300">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contactform;
