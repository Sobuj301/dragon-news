"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';

const LoginPage = () => {
    const [show, isShow] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleLogin = async (formData) => {
        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            rememberMe: true, // If false, the user will be signed out when the browser is closed. 
            callbackURL: "/"
        })

        if (error) {
            alert(error.message)
        }

        if (data) {
            alert("login successfully")
        }

    }
    return (
        <div className='h-screen flex justify-center items-center '>
            <form onSubmit={handleSubmit(handleLogin)} className='w-96 bg-blue-100 p-8 rounded-2xl'>
                <fieldset className="fieldset relative">
                    <h2 className='text-2xl font-bold mb-5 text-center'>Please Login </h2>

                    {/* email field */}
                    <label className="label">Email</label>
                    <input {...register("email", { required: "Email Field Require" })} type="email" className="input w-full" placeholder="Email" />
                    {errors.email && <p className='text-sm py-2 text-red-600'>{errors.email.message}</p>}

                    {/* Password field */}
                    <label className="label">Password</label>
                    <input {...register("password", { required: "Password Field Require" })} type={show ? "text" : "password"} className="input w-full" placeholder="Password" />
                    <span onClick={() => isShow(!show)} className='absolute right-2 bottom-30'>
                        {show ? <FaEyeSlash /> : <FaRegEye />}
                    </span>
                    {errors.password && <p className='text-sm py-2 text-red-600'>{errors.password.message}</p>}
                    <button className="btn btn-neutral mt-4">Registration</button>
                    <p className='text-sm font-black py-2'>All ready have a account please <Link className='underline' href={"/register"}>Register</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default LoginPage;