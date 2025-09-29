export default function Button({buttonType ="button", variant="primary", children, ...props}) {

    const variants = {
        primary: "bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded",
        secondary: "bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded"
    }

    return  (
        <button 
            className={`${variants[variant]}`} 
            type={`${buttonType}`}
            {...props}
            >
                {children}
        </button>
    );
}