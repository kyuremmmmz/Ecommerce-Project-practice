'use client';

import { useState } from "react";



export function LoginData() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const responseData = await fetch('http://localhost:3001/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept' : 'application/json'
                },
                body: JSON.stringify({ email, password }),
            }
            );
            const data = await responseData.json();
            console.log(data);

            
            if (!responseData.ok) {
                throw new Error(`Failed to login: ${data}`);
            }
        } catch (err) { 
            setError(`${err}`);
         }
    }
    return {email, password, setEmail, setPassword ,  setError, setLoading, setSuccess, success,error, loading, handleSubmit}
}

