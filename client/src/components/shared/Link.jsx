import clsx from "clsx";

const linkVariants = {
  default: "text-blue-500 hover:underline",
  primary: "text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded",
  secondary: "text-gray-700 hover:text-gray-900",
};

export default function Link({
  href,
  as: Tag = "a",
  variant = "default",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      href={href}
      className={clsx(linkVariants[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
