import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>LOGN IN</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">EMAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="Email" id="email" name="email"  required />
                <label htmlFor="Password">PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Password" id="password" name="password"  required />
                <body> 
<a href="https://freetamilebooks.com/ebooks/eliya_tamilil_software_testing/" target="_blank"> Forget Password</a>
</body> 
                

                 <button type="Submit">LOG IN</button>
            

                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account?  REGISTER HERE.</button>
        </div>
    )
}