import ArtPhotos from "./ArtPhotos";
import ArtTXT from "./ArtTXT";
import ChemicalTXT from "./ChemicalTXT";
import Intro from "./Intro";
import MusicAndMovies from "./MusicAndMovies";
import Tech from "./Tech";
import TechTXT from "./TechTXT";

const About = ({theme}) => {
  return (
    <>
      <Intro/>
      <MusicAndMovies/>
      <TechTXT/>
      <Tech theme ={theme}/>
      <ArtTXT style={{ marginTop: "5vw" }} />
      <ArtPhotos/>
      <ChemicalTXT/>
    </>
  );
};
export default About
