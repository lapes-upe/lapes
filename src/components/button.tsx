
type CustomButtonProps = {
  children?: React.ReactNode;
  isSelected?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton = ({ children, isSelected, className, ...props }: CustomButtonProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0.5 top-0.5 bg-gray-700/50" style={{ width: '100%', height: '100%' }} />
      <button
        {...props}
        className={`relative px-2 transition-all hover:translate-x-[0.4px] hover:translate-y-[0.5px] ${isSelected ? "bg-amber-500 text-white" : "bg-gray-200"} ${className || ""}`}
      >
        {children || "Click me"}
      </button>
    </div>
  );
};

