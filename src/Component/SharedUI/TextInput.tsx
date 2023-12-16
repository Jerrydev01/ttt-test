import { twMerge } from "tailwind-merge";

interface IProps {
  InputType: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value: string;
}
const TextInput = ({
  InputType,
  placeholder,
  onChange,
  className,
  value,
}: IProps) => {
  return (
    <div>
      <input
        type={InputType}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={twMerge("border-2 px-4 py-2 w-full", className)}
      />
    </div>
  );
};

export default TextInput;
