"use client"

import { useState, ChangeEvent, FormEvent } from 'react';

type FormState = {
    registerUsername: string;
    registerPassword: string;
    reEnterRegisterPassword: string;
};

export default function RegisterForm() {
    
    const [form, setForm] = useState<FormState>({
        registerUsername: '',
        registerPassword: '',
        reEnterRegisterPassword: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setForm({
            registerUsername: '',
            registerPassword: '',
            reEnterRegisterPassword: '',
        });
        alert(form.registerUsername + ' ' + form.registerPassword);
    };

    return(
        <div>
            Register
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='registerUsername'>Username</label>
                    <input id='registerUsername' type='text' value={form.registerUsername} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='registerPassword'>Password</label>
                    <input id='registerPassword' type='password' value={form.registerPassword} onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor='reEnterRegisterPassword'>Re-enter Password</label>
                    <input id='reEnterRegisterPassword' type='password' value={form.reEnterRegisterPassword} onChange={handleChange}></input>
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    );
};