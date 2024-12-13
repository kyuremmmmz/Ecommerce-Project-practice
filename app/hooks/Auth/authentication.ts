'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookie from 'js-cookie';
import { io } from "socket.io-client";

export function LoginData() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [hasErr, setHasErr] = useState<boolean>(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const userCookie = Cookie.get('user');
        const user2Cookie = Cookie.get('user2');
        setIsLoggedIn(!!userCookie || !!user2Cookie);
    }, [isLoggedIn]);

    useEffect(() => {
        const socket = io('http://localhost:3002');
        socket.on('login', (email: string) => {
            console.log('Logged in user email:', email);
            const userLoggedIn = !!Cookie.get('user') || !!Cookie.get('user2');
            setIsLoggedIn(userLoggedIn);
        });
        return () => {
            socket.disconnect();
        };
    }, [isLoggedIn]);

    const handleSignOut = async () => {
        Cookie.remove('user');
        Cookie.remove('user2');
        setIsLoggedIn(false);
        router.push('/page/login');
    };

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };

    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const responseData = await fetch('http://localhost:3001/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await responseData.json();
            if (responseData.ok) {
                Cookie.set('user', data.user);
                Cookie.set('user2', data.user);
                router.push(data.redirect);
                setSuccess(true);
            } else {
                setError(data.message);
                setHasErr(true);
                throw new Error(data.message);
            }
        } catch (err) {
            setLoading(false);
            setHasErr(true);
            setError(`${err}`);
        } finally {
            setLoading(false);
            setHasErr(false);
        }
    };

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
        hasErr,
        setIsLoggedIn,
        handleSignOut,
        handleVisibility,
        isVisible
    };
}
