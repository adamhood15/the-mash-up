import clsx from "clsx";

const headingVariants = {
  display: "text-5xl font-bold",
  xl: "text-4xl font-semibold",
  lg: "text-3xl font-semibold",
  md: "text-2xl font-medium",
  sm: "text-xl font-medium",
};

export default function Heading({
  as: Tag = "h1",
  variant = "xl",
  className,
  children,
}) {
  return (
    <Tag className={clsx(headingVariants[variant], className)}>
      {children}
    </Tag>
  );
}
