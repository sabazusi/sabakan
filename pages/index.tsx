import { useEffect, useState } from "react";

const Saba = require("../svgs/saba.svg");

const backgrounds = ["blue", "indigo", "teal", "purple"];

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((currentBg + 1) % backgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentBg]);

  return (
    <div
      className={`bg-${backgrounds[currentBg]}-200 transition-colors duration-500 ease-linear h-screen`}
    >
      <div className="-translate-x-16 absolute bottom-0 transform">
        <Saba />
      </div>
    </div>
  );
};

export default Home;
