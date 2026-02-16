import Heading from "../../shared/Heading";
import Text from "../../shared/Text";

export default function FormHeader({
  title,
  subtitle,
  align = "center",
  className,
}) {
  return (
    <div className={`space-y-2 text-${align} ${className || ""}`}>
      {title && (
        <Heading as="h2" variant="xl">
          {title}
        </Heading>
      )}

      {subtitle && (
        <Text as ="p" variant="body">
          {subtitle}
        </Text>
      )}
    </div>
  );
}
