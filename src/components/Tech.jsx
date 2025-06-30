import {  useEffect } from "react";

const Tech = ({theme}) => {

  useEffect(()=>{},[theme])
  return (
    <>
      <div className="r1-tech">
        <a
          href="https://leetcode.com/u/mehulfr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={document.body.classList.contains("dark-theme") ? "logos/leetcode_dark.svg" : "logos/leetcode_light.svg"} alt="leetcode" className="leetcode" />
        </a>
        <a
          href="https://codeforces.com/profile/nocapmehul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="logos/cf.svg" alt="cf" className="cf" />
        </a>
        <img src="logos/js.svg" alt="js" className="js" />
        <img src="logos/reactjs.svg" alt="reactjs" className="reactjs" />
      </div>
      <div className="r2-tech">
        <img src="logos/nodejs.svg" alt="nodejs" className="nodejs" />
        <img src="logos/python.svg" alt="python" className="python" />
        <img src="logos/tensorflow.svg" alt="tensorflow" className="tensorflow" />
      </div>
    </>
  );
};

export default Tech;
