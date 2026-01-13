"use client";

const Dropdown = ({
  value,
  onChange,
  options = [],
  placeholder = "Select option",
  valueKey = "value",
  labelKey = "label",
  className = "w-full",
}) => {
  return (
    <div
      className={`${className} border flex items-center justify-between bg-[#F3F3F5] border-gray-200 px-3 rounded-full`}
    >
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none flex-1 py-2 appearance-none"
      >
        {/* Placeholder */}
        <option value="">{placeholder}</option>

        {/* Dynamic options */}
        {options.map((item, index) => (
          <option key={index} value={item[valueKey]}>
            {item[labelKey]}
          </option>
        ))}
      </select>

      <i className="ri-arrow-down-s-line text-gray-500 pointer-events-none" />
    </div>
  );
};

export default Dropdown;
