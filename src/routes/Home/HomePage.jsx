import { Tile } from '../../components/Tile/Tile'
import './HomePage.scss'

export const HomePage = ({name='Jacob'}) => {
    return(
        <div>
            <h1 className='text-center text-sm-center text-md-start text-lg-start text-xl-start py-5 ps-3'>Welcome {name}</h1>
            <div className='d-flex TileContainer w-95 flex-md-row flex-lg-row flex-xl-row flex-sm-column flex-column'>
                <Tile buttonTxt='START SESSION' title='Work Out' desc='jfjfjf' link='/workout' />
                <Tile buttonTxt='START SESSION' title='Stats' desc='jfjfjf' link='/stats' />
                <Tile buttonTxt='START SESSION' title='Profile' desc='jfjfjf' link='/profile' />
            </div>
        </div>
    )
}