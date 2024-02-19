export default function InputError({ message, className = "", ...props }) {
    return message ? (
        <p {...props} style={{ color: "red" }} className={className}>
            {message}
        </p>
    ) : null;
}
