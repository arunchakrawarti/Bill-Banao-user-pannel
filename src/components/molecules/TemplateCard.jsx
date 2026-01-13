"use client";
import React from "react";
import clsx from "clsx";

export default function TemplateCard({
  title,
  description,
  image = "/placeholder.png",
  primaryText = "Generate",
  secondaryText = "Preview",
  onPrimary,
  onSecondary,
  primaryVariant = "primary", 
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
    
      <div className="mb-4 flex justify-center">
        <div className="flex h-60 w-40 items-center justify-center rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 text-gray-500">
          Template Preview
        </div>
      </div>
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          onClick={onSecondary}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium hover:bg-gray-50"
        >
          <i className="ri-eye-line" />
          {secondaryText}
        </button>

        <button
          onClick={onPrimary}
          className={clsx(
            "flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium",
            primaryVariant === "primary"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-blue-600 text-blue-600 hover:bg-blue-50"
          )}
        >
          <i className="ri-magic-line" />
          {primaryText}
        </button>
      </div>
    </div>
  );
}
