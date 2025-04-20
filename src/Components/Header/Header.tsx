import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // const handleNavClick = (section: string) => {
  //   setActiveSection(section);
  //   const element = document.getElementById(section);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const handleNavClick = (section: string) => {

    setActiveSection(section);
    const element = document.getElementById(section);

    if (section.toLowerCase() === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          {["about", "projects", "contact"].map((section, index) => (
            <a onClick={() => handleNavClick(section)} key={index}>
              <li
                key={section}
                className={`${styles.link} ${activeSection === section ? styles.active : ""}`}
                onClick={() => handleNavClick(section)}
              >
                {section === "about"
                  ? "About"
                  : section === "projects"
                    ? "Projects"
                    : "Contact"}
              </li>
            </a>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className={styles.switch}
          aria-label="Toggle theme"
        >
          <svg
            className="icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {theme === "light" ? (
              <path
                d="M21.72 15A9 9 0 1112 3.27 7.5 7.5 0 0021.72 15Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93M12 6A6 6 0 1012 18A6 6 0 0012 6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
