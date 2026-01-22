"use client";
import Input from "../common/Input";

export default function Header({ onMenuClick, title }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#2B7FFF] shadow">
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-3">
        <div className="flex items-center gap-2 sm:gap-3 w-full max-w-full">
          <button
            onClick={onMenuClick}
            className="flex h-9 w-9 items-center justify-center rounded-md text-white lg:hidden hover:bg-white/10"
          >
            <i className="ri-menu-2-line text-xl" />
          </button>
          <div className="relative w-full max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[360px]">
            <Input
              placeholder="Search here"
              icon="ri-search-line text-white"
              className="border border-white bg-transparent text-white placeholder:text-white/70 h-10 sm:h-11"
            />
          </div>
        </div>

       
        <div className="flex items-center gap-2 sm:gap-3 ml-3">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white">
            <i className="ri-notification-line text-[#2B7FFF] text-base sm:text-lg"></i>
          </div>
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white">
            <i className="ri-user-line text-[#2B7FFF] text-base sm:text-lg"></i>
          </div>
          <div className="hidden sm:block text-right text-white w-[80px]">
            <p className="text-sm font-normal">John</p>
            <p className="text-xs opacity-90">Tax Consultant</p>
          </div>
        </div>

      </div>
    </header>
  );
}