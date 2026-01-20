// "use client";
// import { useState, useEffect } from "react";
// import Sidebar from "../organisms/Sidebar";
// import Header from "../organisms/Header";

// const MainLayout = ({ children, title }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   useEffect(() => {
//     document.body.style.overflow = drawerOpen ? "hidden" : "auto";
//   }, [drawerOpen]);

//   return (
//     <div className="flex w-full h-auto bg-gray-100 md:bg-gray-50 ">
//       <div
//         className="hidden lg:flex bg-black/20 backdrop-blur-sm w-[19%]"
//         onClick={() => setDrawerOpen(false)}
//       >
//       </div>
//       <div />
//       <Sidebar
//         isMobile
//         isOpen={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//       />
//       <div className="w-full lg:w-[88%] flex flex-col">
//         <Header title={title} onMenuClick={() => setDrawerOpen(true)} />
//         <main className="flex-1 p-4 md:px-6 lg:px-8 pb-10">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;




"use client";
import { useState, useEffect } from "react";
import Sidebar from "../organisms/Sidebar";
import Header from "../organisms/Header";

const MainLayout = ({ children, title }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "auto";
  }, [drawerOpen]);

  return (
    <div className="h-screen w-full overflow-hidden flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={drawerOpen}
        isMobile
        onClose={() => setDrawerOpen(false)}
      />

      {/* Main area */}
      <div className="flex-1 min-w-0 flex flex-col">
        <Header title={title} onMenuClick={() => setDrawerOpen(true)} />

        {/* 👇 MAIN SCROLL AREA */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
