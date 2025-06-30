import Heading from "./Heading";
import Logo from "./Logo";
import ThemeTongle from "./ThemeTongle";

const Header = ({setTheme,theme}) => {
  return (
    <div className="header" >
    <Logo/>
    <Heading/>
    <ThemeTongle setTheme={setTheme} theme={theme}/>
    </div>
  )
}
export default Header;