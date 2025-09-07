export default function FormField ({ formFields, mode, onChange }) {
  return (
    <>
      {formFields
        .filter(field => field.includeIn.includes(mode))
        .map(field => (
          <div className="flex flex-col mb-5" key={field.id}>
            <label
              htmlFor={field.id}
              className="mb-1 text-xs tracking-wide text-gray-600"
            >
              {field.label}:
            </label>

            <div className="relative">
              {/* Left icon */}
              <div
                className="absolute left-0 top-0 h-full w-10 flex items-center justify-center text-gray-400"
                dangerouslySetInnerHTML={{ __html: field.icon }}
              />

              {/* Input */}
              <input
                id={field.id}
                type={field.type}
                placeholder={field.label}
                onChange={onChange}
                className="
                  text-sm
                  placeholder-gray-500
                  pl-10
                  pr-4
                  border border-gray-400
                  w-full
                  py-2
                  focus:outline-none focus:border-red-400
                "
              />
            </div>
          </div>
        ))}
    </>
  );
};
