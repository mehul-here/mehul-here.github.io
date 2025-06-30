import About from "./About";
import Blogs from "./Blogs";

const Page = ({page,theme}) => {
  return (
    <>
      {page === "about" ? <About theme = {theme} /> : <Blogs />}
    </>
  );
};

export default Page;

