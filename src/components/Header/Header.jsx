import './Header.scss'

export const Header = () => {
    return(
        <header className="App-header">
            <div className='d-flex flex-row align-items-center'>
                <img className='d-flex Header-logo' alt='dumbbell logo' src='/logo72.png' />
                <h1 className='ps-2 Header-font'>Gym Buddy</h1>
            </div>
        </header>
    )
}