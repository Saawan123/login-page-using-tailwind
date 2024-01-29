import React, { useState } from "react";
import { eyeButtonHidden, eyeButtonShow } from "../assets/Icons/Icons";

const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <div
        className={`relative ${
          isHovered && type === "password" ? "hover-visible" : ""
        }`}
      >
        <input
          onChange={handleChange}
          value={value}
          id={id}
          name={name}
          type={isHovered ? "text" : type}
          required={isRequired}
          className={fixedInputClass + customClass}
          placeholder={placeholder}
        />
        {type === "password" && (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          >
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 hover:outline-none hover:ring z-40"
            >
              {isHovered ? <>{eyeButtonShow}</> : <>{eyeButtonHidden}</>}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

