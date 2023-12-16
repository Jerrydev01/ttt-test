import { twMerge } from "tailwind-merge";
/**
 * Renders a button component with the provided children, className, and onClick event handler.
 *
 * @param {IProps} children - The content to display inside the button.
 * @param {string} className - Additional CSS class names to apply to the button.
 * @param {function} onClick - The event handler function to execute when the button is clicked.
 * @return {JSX.Element} The rendered button component.
 */
interface IProps {
  children: React.ReactNode;
  className?: string;
  handleSubmit: (value: any) => void;
}
const ButtonComponent = ({ children, className, handleSubmit }: IProps) => {
  return (
    <button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        handleSubmit(e);
      }}
      className={twMerge(
        "font-semibold px-[40px] py-[8px] transition-all duration-300 delay-75 ease-in-out",
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
