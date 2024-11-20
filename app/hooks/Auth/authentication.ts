'use client';

import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookie from 'js-cookie';


export function LoginData() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        setIsLoggedIn(!!Cookie.get("admin"));
    }, [])
    const handleSignOut = async () => {
        Cookie.remove('admin')
        setIsLoggedIn(false);
        router.push('/page/login');
    }
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
            if (responseData.ok) {
                Cookie.set('admin', data.user,);
                router.push(data.redirect);
                setSuccess(true);
            } else {
                setError('Invalid email or password');
                throw new Error('invalid');
            }
        } catch (err) { 
            setLoading(false);
            setError(`${err}`);
        } finally {
            setLoading(false);
        }
    }
    return {
        email,
        password,
        setEmail,
        setPassword,
        setError,
        setLoading,
        setSuccess,
        success,
        error,
        loading,
        handleSubmit,
        isLoggedIn,
        setIsLoggedIn,
        handleSignOut
    }
}

