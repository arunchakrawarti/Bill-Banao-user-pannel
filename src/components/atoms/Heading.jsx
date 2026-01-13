"use client";
import React from "react";
import Link from "next/link";
import Button from "../common/Button";

const Heading = ({
  title,
  paragraph,
  actions = [],
  showBack = false,
  backRoute = "#", 
  backIcon,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-6">

      {/* Left Content */}
      <div className="flex items-start gap-3 font-inter">

        {/* Back Icon */}
        {showBack && (
          <Link href={backRoute}>
            <div className="mt-1 text-gray-600 hover:text-black text-xl cursor-pointer">
              {backIcon ? backIcon : <i className="ri-arrow-left-line" />}
            </div>
          </Link>
        )}

        {/* Title & Paragraph */}
        <div>
          {title && <h1 className="font-inter font-normal text-[1rem] text-[#0A0A0A] tracking-[-0.0194rem]">{title}</h1>}
          {paragraph && <p className="font-inter font-normal text-[0.875rem] mt-2 tracking-[-0.0094rem] text-[#4A5565]"
>{paragraph}</p>}
        </div>
      </div>

      {/* Right Actions */}
      {actions.length > 0 && (
        <div className="flex gap-3 font-inter">
          {actions.map((action, index) => (
            <Button
              rounded="rounded-md"
              className="span "
              key={index}
              variant={action.variant}
              onClick={action.onClick}
            >
              {action.icon && <span className="">{action.icon}</span>}
              {action.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Heading;
