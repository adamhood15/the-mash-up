export default function Icon({ className, variant="user", onClick, ...props }) {
    return (
    <i className={`${className}`} onClick={onClick} {...props}></i>
    );
}