import { useForm } from "react-hook-form"
import { CustButton } from "../../components/Button/CustButton"
import './SignupPage.scss'

export const SignupPage = () => {
    return(
        <>
            <h1 className="mt-5">Sign Up</h1>
            <form className='me-auto ms-auto col-7 mt-4 text-start'>
                <div class="mb-3">
                    <label for="firstName" class="form-label">First Name <span style={{color: 'red'}}>*</span></label>
                    <input type="firstName" class="form-control TransparentInput white" id="firstName" aria-describedby="firstNameHelp"/>
                </div>
                <div class="mb-3">
                    <label for="lastName" class="form-label">Last Name <span style={{color: 'red'}}>*</span></label>
                    <input type="lastName" class="form-control TransparentInput white" id="lastName" aria-describedby="lastNameHelp"/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address <span style={{color: 'red'}}>*</span></label>
                    <input type="email" class="form-control TransparentInput white" id="email" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password <span style={{color: 'red'}}>*</span></label>
                    <input type="password" class="form-control TransparentInput white" id="password"/>
                </div>
            </form>
            <CustButton text='Sign Up' className='px-4 mt-3' />
            <h5 className="mt-5">Already a user? <a className='white' href="/login"> Login</a></h5>
        </>
    )
}