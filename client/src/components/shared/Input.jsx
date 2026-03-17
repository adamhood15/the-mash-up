export default function Input({placeholder, onChange, value, type, className}) {
    return (
    <>
        <input 
        className={className} 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        />
    </>
    );
};