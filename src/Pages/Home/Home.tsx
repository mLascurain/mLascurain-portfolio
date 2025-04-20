import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Home.module.css";
import About from "../About/About.tsx"
import Projects from "../../Pages/Projects/Projects.tsx";
import Contact from "../../Pages/Contact/Contact.tsx"
import Technologies from "../../Components/Technologies/Technologies.tsx";
import ScrollToTopButton from "../../Components/ScrollToTopButton/ScrollToTopButton.tsx";
import "../../index.css";
import htmllogo from "../../assets/HTML5_logo.png"
import csslogo from "../../assets/css-3.png"
import jslogo from "../../assets/js.png"
import reactlogo from "../../assets/physics.png"
import nodelogo from "../../assets/programing.png"
import typescriptlogo from "../../assets/typescript.png"
import gitlogo from "../../assets/social.png"
import githublogo from "../../assets/github.png"
import linuxlogo from "../../assets/linux.png"

const Home: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const lastSent = localStorage.getItem("lastSent");
    const now = Date.now();

    if (lastSent && now - parseInt(lastSent) < 300000) { // 5 minutos
      setStatus("You already send a message.");
      return;
    }

    if (!form.current) {
      setStatus("Form reference is not valid.");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS environment variables are missing.");
      setStatus("An error occurred. Please try again later.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        setStatus("Message sent successfully!");
        if (form.current) {
          form.current.reset();
        }
      },
      (error) => {
        console.error("Error sending email:", error.text || error);
        setStatus(
          "An error occurred while sending the email. Please try again."
        );
      }
    );
    localStorage.setItem("lastSent", now.toString());
  };
  return (
    <div className={styles.home}>
      <About />
      <Technologies images={[linuxlogo, githublogo, gitlogo, typescriptlogo, nodelogo, reactlogo, jslogo, csslogo, htmllogo]} width="100px" height="100px" reverse />
      <Projects />
      <Contact sendEmail={sendEmail} form={form} status={status} />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
