"use client";

import Input from "../common/Input";

export default function Header({ onMenuClick,title }) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-[#2B7FFF] px-6 py-3 md:py-4.5 shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md  text-primary lg:hidden hover:bg-card/10"
        >
          <i className="ri-menu-2-line text-xl" />
        </button>
        <div className="relative text-white">
          <Input placeholder="Search here" icon="ri-search-line text-white" className="border border-white"/>
        </div>
      </div>
      <div className="flex items-center gap-3">
      <div className="flex text-center justify-center bg-white rounded-full w-7 h-7">
          <i className="ri-notification-line text-lg text-[#2B7FFF]"></i>
        </div>
        <div className="flex text-center justify-center bg-white rounded-full w-7 h-7">
          <i className="ri-user-line text-lg text-[#2B7FFF]"></i>
        </div>
      <div>
          <p className="font-inter font-normal text-[0.875rem] tracking-[-0.009375rem] text-right text-white">John</p>
          <p className="font-inter font-normal text-[0.75rem]  tracking-[0] text-right text-white">Tax Consultant</p>
        </div>
        
      </div>
    </header>
  );
}


