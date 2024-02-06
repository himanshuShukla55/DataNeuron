import React from "react";

const Input = (props) => {
  const { id, type, label, value, touched, error, handleChange, handleBlur } =
    props;
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className="outline-none bg-transparent text-white peer border-b border-white p-3 text-xl"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 p-0 cursor-text ${
          value
            ? "top-[-10px] text-sm"
            : "top-5 text-xl peer-focus:text-sm peer-focus:top-[-10px] transiton-top ease-out duration-100"
        }`}
      >
        {label}
      </label>
      {touched && error && (
        <p className="text-sm text-red-600 p-0 m-0">{error}</p>
      )}
    </div>
  );
};

export default Input;
