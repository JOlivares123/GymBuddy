import {useForm} from 'react-hook-form'

import { CustButton } from '../../components/Button/CustButton'
import { isMobile } from '../../utils/WindowSize'
import './LoginPage.scss'

export const LoginPage = () => {
    return(
        <>
            <h1 className="mt-5">Login</h1>
            <form className='me-auto ms-auto col-7 mt-4 text-start'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control TransparentInput white" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control TransparentInput white" id="password"/>
                </div>
            </form>
            <CustButton text='Login' className={isMobile() ? 'col-7 mt-3' : 'px-4 mt-3'} />
            <h5 className="mt-5">Need an account? <a className='white' href="/signup"> Sign Up</a></h5>
        </>
    )
}