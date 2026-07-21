import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function InputField({
  label,
  error,
  ...props
}: Props) {
  return (
    <div className="mb-4">

      {label && (
        <label className="block mb-2 text-sm font-medium">
          {label}
        </label>
      )}

      <input
        {...props}
        className="w-full border p-3 rounded outline-none focus:ring-2 focus:ring-blue-500"
      />

      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}

    </div>
  );
}