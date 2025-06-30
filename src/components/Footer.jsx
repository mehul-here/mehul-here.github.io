import { useEffect } from "react"

const Footer = ({theme}) => {
  useEffect(()=>{},[theme])
  return (
    <>
    <div className="copyright ">
      ©2025
    </div>
    <div className="contact-us">
      <a
          href="https://www.instagram.com/nocapmehul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="logos/instagram.svg" alt="instagram" className="ig" />
        </a>
        <a
          href="mailto:mehuldhiman890@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="logos/gmail.svg" alt="gmail" className="gmail" />
        </a>
        <a
          href="https://t.me/homie_sapien"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="logos/telegram.svg" alt="telegram" className="tg" />
        </a>
        <a
          href="https://github.com/mehul-here"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={document.body.classList.contains("dark-theme") ? "logos/github_dark.svg" : "logos/github_light.svg"} alt="github" className="github" />
        </a>
    </div>
    </>
  )
}
export default Footer