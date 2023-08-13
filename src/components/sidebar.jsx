import { NavLink } from "react-router-dom";
import {
  AssessmentIcon,
  CrossIcon,
  DashboardIcon,
  LibraryIcon,
  RoundStatusIcon,
} from "../icons";

// eslint-disable-next-line react/prop-types
function Sidebar({ sidebarIsVisible, setSidebarIsVisible }) {
  return (
    <>
      <div 
        onClick={() => setSidebarIsVisible(false)}
        className={`w-full fixed h-full bg-black lg:hidden ${
          sidebarIsVisible ? "bg-opacity-50" : "bg-opacity-0"
        }`}
      />
      <div className="z-20 bg-blue-accent-light lg:bg-white h-full w-[80%] lg:w-full px-5 py-8 flex flex-col text-primary text-sm font-medium gap-5 duration-300 ease-in-out">
        <div className="flex justify-between items-center lg:hidden">
          <span>Menu</span>
          <button onClick={() => setSidebarIsVisible(false)}>
            <CrossIcon />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex p-3 gap-2 rounded-md items-center hover:bg-blue-accent lg:flex-col ${
                isActive ? "text-blue border border-blue bg-blue-accent" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <DashboardIcon color={isActive ? "#0073E6" : "#1C4980"} />
                <span>Dashboard</span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/assessment"
            className={({ isActive }) =>
              `flex p-3 gap-2 rounded-md items-center hover:bg-blue-accent lg:flex-col ${
                isActive ? "text-blue border border-blue bg-blue-accent" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <AssessmentIcon color={isActive ? "#0073E6" : "#1C4980"} />
                <span>Assessment</span>
              </>
            )}
          </NavLink>
          <NavLink
            to="my-library"
            className={({ isActive }) =>
              `flex p-3 gap-2 rounded-md items-center hover:bg-blue-accent lg:flex-col lg:text-center ${
                isActive ? "text-blue border border-blue bg-blue-accent" : ""
              }`
            }
          >
            {({ isActive }) => (
              <>
                <LibraryIcon color={isActive ? "#0073E6" : "#1C4980"} />
                <span>My Library</span>
              </>
            )}
          </NavLink>
        </div>
        <div className=" w-full border-t border-dashed border-stroke-light" />
        <NavLink
          to="round-status"
          className={({ isActive }) =>
            `flex p-3 justify-between items-center rounded-md hover:bg-blue-accent lg:flex-col-reverse lg:gap-2 ${
              isActive ? "text-blue border border-blue bg-blue-accent" : ""
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="flex gap-2 items-center lg:flex-col lg:text-center">
                <RoundStatusIcon color={isActive ? "#0073E6" : "#1C4980"} />
                <span>Round Status</span>
              </div>
              <span className="text-xs text-red bg-red-accent border border-red px-[6px] py-[1px] rounded-full">
                Admin
              </span>
            </>
          )}
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
