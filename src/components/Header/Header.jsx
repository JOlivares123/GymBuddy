import './Header.scss'

export const Header = () => {
    return(
        <header className="App-header">
            <div className='d-flex flex-row align-items-center'>
                <img className='d-flex Header-logo' alt='dumbbell logo' src='/logo72.png' />
                <h3 className='ps-2 Header-font'>Gym Buddy</h3>
            </div>
        </header>
    )
}