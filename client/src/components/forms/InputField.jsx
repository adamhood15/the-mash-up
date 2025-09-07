export default function InputField({fields}) {
    return (
        <>
            <input
                className="text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-red-400"
                placeholder="First Name"
                type="text"
                id="firstName"
                onChange={handleInputChange}
            />
        </>
    )
}