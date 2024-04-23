import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const BotonFlotante = () => {
    return (
      <button
        onClick={handleSidebar}
        className={`block lg:hidden absolute  ${sidebar
          ? " text-gray-800 bottom-2 bg-white rounded-full"
          : " text-white bottom-2 bg-gray-800 rounded-full"
          } p-2 right-4 text-2xl`}
      >
        {sidebar ? <IoClose /> : <RiMenu3Fill />}
      </button>
    );
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6 ">
      <div
        className={`bg-white fixed lg:static top-0 w-[80%] md:w-[60%] lg:w-full z-50 transition-all ${
          sidebar ? "-left-0" : "-left-full"
        } w-full h-full lg:overflow-y-hidden overflow-y-scroll drop-shadow-xl col-spam-1`}
      >
        <Sidebar></Sidebar>
      </div>
      <div className="bg-gray-100 col-span-5">
        <BotonFlotante></BotonFlotante>
        <Header></Header>
        <div className="h-[90vh] overflow-y-scroll p-8">
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
