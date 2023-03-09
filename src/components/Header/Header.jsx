import { useNavigate } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    const navigate = useNavigate();

    return(
        <header className="App-header">
            <div onClick={() => navigate('/')} className='Header-hover d-flex flex-row align-items-center'>
                <img className='d-flex Header-logo' alt='dumbbell logo' src='/logo72.png' />
                <h3 className='ps-2 Header-font'>Gym Buddy</h3>
            </div>
        </header>
    )
}