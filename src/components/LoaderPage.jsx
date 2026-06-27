import "./LoaderPage.scss";
import { useEffect, useState } from "react";

const Loader = ({ setIsLoading }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 12;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(false)
        }, 400);
      }

      setProgress(value);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader">

      <div className="boot">

        <img
          src="/navbar-icons/apple.svg"
          alt="Apple Logo"
          className="apple-logo"
        />

        <div className="progress-bar">

          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />

        </div>

      </div>

    </div>
  );
};

export default Loader;