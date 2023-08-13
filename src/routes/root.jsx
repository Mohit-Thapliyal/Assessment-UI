import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useState } from "react";

function Root() {
  const [sidebarIsVisible, setSidebarIsVisible] = useState(false);
  return (
    <>
      <div
        className={`z-10 lg:bg-transparent flex fixed h-full overflow-hidden lg:-z-10 duration-300 w-full ease-in lg:w-[14%] xl:w-[12%] ${
          sidebarIsVisible ? "ml-0" : "ml-[-100%] lg:ml-0"
        }`}
      >
        <Sidebar
          sidebarIsVisible={sidebarIsVisible}
          setSidebarIsVisible={setSidebarIsVisible}
        />
      </div>
      <div className="flex flex-col w-full float-right min-h-screen lg:p-5 lg:pt-0 bg-blue-accent-lighter lg:w-[86%] xl:w-[88%]">
        <Outlet context={[setSidebarIsVisible]} />
      </div>
    </>
  );
}

export default Root;
