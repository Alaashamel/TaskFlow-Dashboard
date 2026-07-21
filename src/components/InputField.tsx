interface Props {
  type?: string;
  placeholder: string;
  value?: string;
}

export default function InputField({
  type = "text",
  placeholder,
  value,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="w-full border p-3 rounded mb-4"
    />
  );
}