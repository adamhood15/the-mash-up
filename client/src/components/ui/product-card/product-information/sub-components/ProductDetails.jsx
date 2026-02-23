import Text from "../../../../shared/Text";
import clsx from "clsx";

export default function ProductDetails({ product }) {
  const { name, condition, price } = product;

  const conditionStyles = {
    mint: "bg-purple-400",
    excellent: "bg-blue-400",
    great: "bg-green-400",
    good: "bg-teal-400",
    fair: "bg-yellow-400",
    poor: "bg-red-400",
  };

  return (
    <div className="product-details-container flex flex-col gap-2">
      <div className="product-details-row flex justify-between items-center">
        <Text variant="lead" as="p" className="text-white">
          {name}
        </Text>

        <Text
          variant="small"
          as="p"
          className={clsx(
            "uppercase rounded-xs border-2 p-1 text-black",
            conditionStyles[condition]
          )}
        >
          {condition}
        </Text>
      </div>

      <Text variant="large" as="p" className="text-green-500">
        ${price.toFixed(2)}
      </Text>
    </div>
  );
}