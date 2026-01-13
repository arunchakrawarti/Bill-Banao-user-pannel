"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NavigationLink = ({
  label,
  heroIcon,
  route = "#",
  hasChildren = false,
  subMenu = [],
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive =
    pathname === route ||
    subMenu.some((item) => pathname === item.route);

  const handleClick = (e) => {
    if (hasChildren) {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  return (
    <li className="w-full">
      {/* Parent */}
      <Link
        href={route}
        onClick={handleClick}
        className={`
          flex items-center justify-between
          px-4 py-2 rounded-md text-sm
          transition-all
          ${
            isActive || open
              ? "bg-[#E0EAFE] text-black"
              : "text-gray-400 hover:bg-gray-800"
          }
        `}
      >
        <span className="flex items-center gap-3">
          <i className={`${heroIcon} text-lg`} />
          {label}
        </span>

        {hasChildren && (
          <i
            className={`ri-arrow-down-s-line transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>
      
      {hasChildren && open && (
        <ul className="mt-2 space-y-3">
          {subMenu.map((item, i) => {
            const isChildActive = pathname === item.route;

            return (
              <li key={i}>
                <Link
                  href={item.route}
                  className={`
                    block px-3 py-3 rounded text-xs
                    ${
                      isChildActive
                        ? "bg-[#E0EAFE] text-black"
                        : "text-gray-400 border hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default NavigationLink;