import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-grow w-full max-w-full lg:max-w-screen-2xl mx-auto p-5">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
