"use client";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-64 bg-black
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0
          overflow-hidden   /* 🔥 IMPORTANT */
        `}
      >
        <nav className="h-full flex flex-col">
          <div className="text-center border-b border-gray-600 shrink-0">
            <h1 className="text-white mt-5 mb-5 font-montserrat font-semibold text-[1.5rem]">
              Bill Banao
            </h1>
          </div>

          <ul className="flex-1 overflow-y-auto px-3 mt-3 no-scrollbar">
            {SideBarData.map((item, index) => (
              <NavigationLink key={index} {...item} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideBar;
