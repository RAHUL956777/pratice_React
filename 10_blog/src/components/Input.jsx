import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { lable, type = "text", clasName = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {lable && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {lable}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${clasName}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;
