import clsx from "clsx";

const buttonVariants = {
  default:
    "flex items-center justify-center text-white text-sm sm:text-base bg-[#fc2403] hover:bg-red-600 py-2 w-full transition duration-150 ease-in",
  primary:
    "flex items-center justify-center text-white text-sm sm:text-base bg-black hover:bg-neutral-800 py-2 w-full transition duration-150 ease-in",
  secondary:
    "flex items-center justify-center text-black text-sm sm:text-base bg-white hover:bg-neutral-200 py-2 w-full border border-black transition duration-150 ease-in",
};

export default function Button({
  type = "button",
  variant = "default",
  className,
  children,
}) {
  return (
    <button
      type={type}
      className={clsx(buttonVariants[variant], className)}
    >
      {children}
    </button>
  );
}
