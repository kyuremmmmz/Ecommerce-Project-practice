"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function RegisterData() {
    const [firstName, setFirstName] = useState<string | ''>('');
    const [lastName, setLastName] = useState<string | ''>('');
    const [email, setEmail] = useState<string | ''>('');
    const [password, setPassword] = useState<string | ''>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const fetchData = await fetch('http://localhost:3001/registration', 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password,
                    })
                }
            );
            const data = await fetchData.json();
            if (fetchData.ok) {
                console.log(data);
                router.push(data.redirect);
                setLoading(false);
            } else {
                throw new Error('test error');
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return { password, email, lastName, firstName, loading, error,setLoading,setEmail, setLastName, setPassword, setFirstName, handleRegister, setError}
}