const NavBar = ({setPage}) => {
  const handleOnClick=(e) =>{
    if(e.target.id==='about'){
      const e1 = document.getElementById(e.target.id);
      e1.classList.add("active");
      const e2 = document.getElementById('blogs');
      e2.classList.remove("active");
      setPage('about')
    }
    else {
      const e1 = document.getElementById(e.target.id);
      e1.classList.add("active");
      const e2 = document.getElementById('about');
      e2.classList.remove("active");
      setPage('blogs')
    }
  }
  return (
    <div className="nav-bar">
      <div className="about-btn active" id="about" onClick={handleOnClick}>About</div>
      <div className="blogs-btn" id="blogs"onClick={handleOnClick}>Blogs</div>
    </div>
  )
}
export default NavBar;