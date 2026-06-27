import React from "react";
import Terminal from "react-console-emulator";
import MacWindow from "./MacWindow";
import "./cli.scss";

const Cli = ({windowName, setWindowState}) => {
  return (
    <MacWindow width="60vw" height="60vh" windowName={windowName} setWindowState={setWindowState}>
      <div className="terminal-window">
        <Terminal
          commands={{
            list: {
              description: "List available commands.",
              usage: "list",
              fn: () => {
                return [
                  "Available commands:",
                  "  list      - List available commands.",
                  "  about     - Show a short portfolio introduction.",
                  "  skills    - List key technologies and tools.",
                  "  projects  - Show example project names.",
                  "  contact   - Show contact details.",
                  "  echo      - Echo the text you type.",
                ].join("\n");
              },
            },
            about: {
              description: "Show a short portfolio introduction.",
              usage: "about",
              fn: () =>
                "Hi! I'm a web developer building modern portfolio experiences with React, HTML, CSS, and JavaScript.",
            },
            skills: {
              description: "List key technologies and tools.",
              usage: "skills",
              fn: () =>
                [
                  "Skills:",
                  "  - React",
                  "  - Vite",
                  "  - CSS / SCSS",
                  "  - JavaScript",
                  "  - Responsive UI",
                ].join("\n"),
            },
            projects: {
              description: "Show example project names.",
              usage: "projects",
              fn: () =>
                [
                  "Projects:",
                  "  - Mac OS portfolio interface",
                  "  - Interactive terminal mockup",
                  "  - Personal website redesign",
                ].join("\n"),
            },
            contact: {
              description: "Show contact details.",
              usage: "contact",
              fn: () =>
                [
                  "Contact:",
                  "  Email: hello@example.com",
                  "  GitHub: github.com/your-username",
                ].join("\n"),
            },
            echo: {
              description: "Echo a passed string.",
              usage: "echo <string>",
              fn: (...args) => args.join(" "),
            },
          }}
          welcomeMessage={
            "Welcome to the portfolio terminal! Type 'list' to see available commands."
          }
          promptLabel={"srvshah:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
