import { useState } from "react";

const ArtPhotos = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <img
        src="photos/hitman.png"
        alt="design"
        className={`hitman ${isHovered ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="photos/devd.png"
        alt="design"
        className={`devd ${isHovered ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="photos/doon.png"
        alt="design"
        className={`doon ${isHovered ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="photos/mf.jpg"
        alt="design"
        className={`mf ${isHovered ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="photos/pablo.jpg"
        alt="design"
        className={`pablo ${isHovered ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <img
        src="photos/thomso.jpg"
        alt="design"
        className={`thomso ${isHovered ? "expanded" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
};
export default ArtPhotos;
