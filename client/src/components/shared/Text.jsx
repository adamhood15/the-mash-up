import clsx from "clsx";

const textVariants = {
  body: "text-base",
  small: "text-sm",
  large: "text-lg",
  lead: "text-xl font-light",
};

export default function Text({
  as: Tag = "p",
  variant = "body",
  className,
  children,
}) {
  return (
    <Tag className={clsx(textVariants[variant], className)}>
      {children}
    </Tag>
  );
}
