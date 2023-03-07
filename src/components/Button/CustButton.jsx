import './Button.scss'

export const CustButton = ({link, text, onClick, color='orange', className}) => {
    return (
        <>
        {link ? 
            <a href={link} onClick={onClick} type='button' className={`btn btn-${color}-gm ` + className}>
                {text}
            </a>
            : 
            <button onClick={onClick} type='button' className={`btn btn-${color}-gm ` + className}>
                {text}
            </button>

        }
        </>
    )
}