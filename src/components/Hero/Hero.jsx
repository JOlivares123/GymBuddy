import { CustButton } from '../Button/CustButton'
import {isMobile} from './../../utils/WindowSize'
import './Hero.scss'

export const Hero = () => {
    return(
        <div className='Hero'>
            <h1 className='Hero-main-text'> Need a Work Out Buddy ?</h1>
            <p className='pt-2 Hero-subtext'>
                Welcome! Gym Buddy was created in order to help track your workout sessions.
                
                
            </p>
            <p className='Hero-subtext'>
                Gym Buddy helps track resting periods between workouts to maximize muscle growth.
            </p>
            <p className='Hero-subtext'>
                We track workout sessions to generate stats for your progress.
            </p>
            
            <div className={isMobile() ? 'd-flex flex-column' : 'pt-4 text-center'}>
                <CustButton link='/signup' className={isMobile() ? 'mb-2' : 'me-3'} text='Sign Up' color='yellow'/>
                <CustButton link='/login' className='' text='Login' color='pink'/>
            </div>
        </div>
    )
}