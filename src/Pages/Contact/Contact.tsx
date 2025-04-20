// import React, { RefObject } from "react";
import styles from "./Contact.module.css";

interface ContactSectionProps {
  sendEmail: (e: React.FormEvent) => void;
  // form: RefObject<HTMLFormElement>;
  form: React.RefObject<HTMLFormElement | null>
  status: string | null;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  sendEmail,
  form,
  status,
}) => {
  return (
    <section id="contact" className={styles.contact}>
      <div>
        <h2 className={styles.title}>Send me a message</h2>
        <p>Feel free to contact me!</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.inputs}>
          <input type="text" name="user_name" placeholder="Name" required />
          {/* <input type="email" name="user_email" placeholder="Email" required /> */}
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
            style={{ resize: "none" }}
          ></textarea>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </div>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
};

export default ContactSection;
