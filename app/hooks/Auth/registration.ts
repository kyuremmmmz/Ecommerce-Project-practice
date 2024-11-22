"use client"

import { useState } from "react"

export default function RegisterData() {
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const fetchData = await fetch('http://localhost:3001/registration')
        } catch (error) {
            console.log(error);
            
        }
    }
}