import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Exhibition from "./exhibitions";

const Category = () => {
  return (
    <>
          <Navbar />
          <main>
            <exhibitions />
          </main>
          <Footer />
        </>
  );
};

export default Exhibition;
