import { CustButton } from '../../components/Button/CustButton'
import './LoginPage.scss'

export const LoginPage = () => {
    return(
        <>
            <h1 className="mt-5">Login</h1>
            <form className='me-auto ms-auto col-7 mt-4 text-start'>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control TransparentInput white" id="email" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control TransparentInput white" id="password"/>
                </div>
            </form>
            <CustButton text='Login' className='px-4 mt-3' />
            <h5 className="mt-5">Need an account? <a className='white' href="/signup"> Sign Up</a></h5>
        </>
    )
}