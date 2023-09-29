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
    </div>
  );
});

export default Input;
