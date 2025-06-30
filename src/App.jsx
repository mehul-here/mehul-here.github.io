import { useState } from "react";
import Header from "./components/Header"
import NaveBar from "./components/NavBar"
import Page from "./components/Page"
import Footer from "./components/Footer";
function App() {
  const [theme , setTheme] = useState(true);
  const [page, setPage] = useState("about");
  return (
    <>
      <Header setTheme = {setTheme} theme ={theme}/>
      <hr className="hr-header"/>
      <NaveBar setPage={setPage}/>
      <Page theme ={theme} page={page}/>
      <hr className="hr-footer"/>
      <Footer theme={theme} />
    </>
  )
}

export default App
