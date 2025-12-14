import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TiTick } from "react-icons/ti";
export default function Dropdown({
  name,
  value,
  options = [],
  onChange,
  placeholder = "Select",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const normalizedOptions = useMemo(
    () =>
      options.map((option) =>
        typeof option === "string" ? { label: option, value: option } : option
      ),
    [options]
  );

  const selectedOption = normalizedOptions.find(
    (option) => option.value === value
  );

  const handleSelect = (option) => {
    setIsOpen(false);
    if (onChange) {
      onChange({
        target: {
          name,
          value: option.value,
        },
      });
    }
  };

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-1 text-left text-base font-semibold text-slate-600 shadow-sm transition focus:outline-none"
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <IoIosArrowDown
          className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
          {normalizedOptions.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center justify-between px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-gray-100 ${
                  option.value === value ? "bg-gray-50" : ""
                }`}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <TiTick className="h-4 w-4 text-green-500" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
