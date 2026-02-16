import Button from "../../shared/Button";

export default function FormFooter({
  buttonText = "Submit",
  buttonVariant = "primary",
  isLoading = false,
  secondaryContent,
  align = "center",
  className,
}) {
  return (
    <div className={`flex flex-col items-${align} space-y-4 ${className || ""}`}>
      <Button
        type="submit"
        variant={buttonVariant}
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : buttonText}
      </Button>

      {/* Optional secondary content */}
      {secondaryContent && (
        <div className="flex justify-center items-center mt-4">
          {secondaryContent}
        </div>
      )}
    </div>
  );
}
