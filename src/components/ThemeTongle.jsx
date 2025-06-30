const ThemeTongle = ({setTheme,theme}) => {
  var theme1 = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  if(theme1 ==='dark') document.body.className='dark-theme';
  const handleThemeChange = (() => {
  document.body.className = theme1 === "dark" ? "" : "dark-theme";
  theme1 = theme1 === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme1);
  setTheme(!theme)
})

  return (
    <div className="tongle-con">
      <div className="theme-tongle" onClick={handleThemeChange}>
        <div className="sun"/>
      </div>
    </div>
  );
};
export default ThemeTongle;
