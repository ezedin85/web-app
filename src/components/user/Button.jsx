export default function Button({ type, title, disabled, onClick }) {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn ${type==='add'? 'add' : type==='remove'? 'remove' : 'checkout'}`}
        >
            {title}
        </button>
    )
}
