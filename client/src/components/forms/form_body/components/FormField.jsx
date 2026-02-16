export default function FormField({ 
    name, 
    label, 
    type, 
    value, 
    placeholder, 
    onChange 
}) {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={name} className="mb-1 font-medium">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2"
      />
    </div>
  );
}
