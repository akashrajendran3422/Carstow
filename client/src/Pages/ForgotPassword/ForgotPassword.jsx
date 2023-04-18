import React, { useState } from "react";

export const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>FORGOT PASSWORD</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">EMAIL</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="text" placeholder="Email" id="email" name="email"  required />
                <label htmlFor="Password">PASSWORD</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Password" id="password" name="password"  require></input>
                 
                 <button type="Submit">RESET</button>
            

                
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>REGISTER HERE.</button>
        </div>
    )
}