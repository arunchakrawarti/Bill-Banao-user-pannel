"use client";
import clsx from "clsx";
import Link from "next/link";

const sizeMap = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-23 h-23 text-lg",
};

const Profile = ({
    icon = "👤",
    size = "sm",
    name = "",
    desc = "",
    rounded = "xl",
    className,
    route = "#",
}) => {
    return (
        <Link href={route} className="flex items-center gap-2">
            <div
                className={clsx(
                    "flex items-center justify-center text-white cursor-pointer",
                    "bg-gradient-to-r from-purple-500 to-pink-500",
                    sizeMap[size],
                    rounded === "full" ? "rounded-full" : "rounded-2xl",
                    className
                )}
            >
                <span>{icon}</span>

            </div>
            <div>
                <p className="h5">{name}</p>
                <p className="p2 text-gray-500!">{desc}</p>
            </div>
        </Link>
    );
};

export default Profile;
