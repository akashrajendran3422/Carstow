import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>REGISTER</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name"  required />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="email" name="email" required/>
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)}  placeholder="Password" id="password" name="password" required/>
            <button type="submit">LOG IN</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account?.LOGN  IN.</button>
    </div>
    )
}