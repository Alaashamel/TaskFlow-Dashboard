import { forwardRef } from "react";

interface Props {
  type?: string;
  placeholder: string;
}


const InputField = forwardRef<HTMLInputElement, Props>(
(
  {
    type = "text",
    placeholder,
    ...props
  },
  ref
) => {

  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      {...props}
      className="w-full border p-3 rounded mb-4"
    />
  );
});


export default InputField;