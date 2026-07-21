interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  text,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className="
        w-full
        bg-blue-600
        hover:bg-blue-700
        text-white
        p-3
        rounded-lg
        transition
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
    >
      {text}
    </button>
  );
}