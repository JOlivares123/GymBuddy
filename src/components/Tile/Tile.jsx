import { CustButton } from '../Button/CustButton'
import './Tile.scss'

export const Tile = ({title, link, desc, buttonTxt, className, buttonColor}) => {
    return(
        <div className={`Tile TileAboveMobile TileMobile d-inline-block ${className}`}>
            <h3>{title}</h3>
            <p>{desc}</p>
            <CustButton color={buttonColor} className='px-5' text={buttonTxt} link={link}/>
        </div>
    )
}