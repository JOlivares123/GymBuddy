import './Button.scss'

export const CustButton = ({text, onClick, color='orange', className}) => {
    return(
        <button onClick={onClick} type='button' className={`btn btn-${color}-gm ` + className}>
            {text}
        </button>
    )
}