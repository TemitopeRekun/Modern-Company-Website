import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";  
import Footer from "../Components/Footer";
import SharedBanner from "../Components/SharedBanner";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <SharedBanner />
      <Footer />
    </div>
  )
}

export default MainLayout;
