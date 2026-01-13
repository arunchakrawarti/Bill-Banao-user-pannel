"use client";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`
          inset-y-0 left-0 z-50
          w-64 lg:w-[17.7%]
          bg-black
          transform transition-transform duration-300
          ${isMobile ? "fixed" : "relative"}
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <nav className="flex h-full flex-col mt-3 gap-4 pb-4">
          <div className="text-center border-b border-gray-600">
            <h1 className="text-white mt-2 mb-5 font-montserrat font-semibold text-[1.5rem]  tracking-[-0.019375rem]">
              Bill Banao
            </h1>
          </div>

          <ul className="flex flex-col mt-3 gap-3 px-3">
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