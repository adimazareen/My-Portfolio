import { useState } from "react";
import emailjs from "@emailjs/browser";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !values.name.trim() ||
      !values.email.trim() ||
      !values.message.trim()
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Message sent successfully!");

      setValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper
      id="contact"
      className="min-h-[50vh] mt-24 mb-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <ToastContainer />

      <div className="w-full lg:w-5/6 2xl:w-3/4 mx-auto flex justify-between rounded-xl">

        <Image
          alt="contact"
          src="/contact.png"
          width={1000}
          height={1000}
          quality={100}
          unoptimized
          className="hidden md:block w-1/2 h-full object-cover"
        />

        <div className="flex-1">
          <h3 className="text-2xl font-semibold">
            Get in Touch
          </h3>

          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Have a project idea, internship opportunity, or collaboration in mind?
            Feel free to reach out.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Full Name *"
              className="outline-none bg-gray-100 dark:bg-grey-800 rounded-lg py-3 px-4"
              required
            />

            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email *"
              className="outline-none bg-gray-100 dark:bg-grey-800 rounded-lg py-3 px-4"
              required
            />

            <textarea
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 rounded-lg py-3 px-4"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="self-end bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg transition"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Sending...
                  <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;