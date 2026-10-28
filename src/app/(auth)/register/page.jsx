"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegistration = async (formData) => {

        const { name, photo, email, password } = formData;
        console.log(name,photo,email,password)
        const {data,error} = await authClient.signUp.email({
            name: name,
            email: email,
            password:password,
            image:photo,
            callbackURL:"/"
        })
        if(error){
            alert(error.message)
        }
        if(data){
            alert("signUp successfully")
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>

            <form onSubmit={handleSubmit(handleRegistration)} className='w-96 bg-blue-100 p-8 rounded-2xl'>
                <fieldset className="fieldset">
                    <h2 className='text-2xl font-bold mb-5 text-center'>Please Registration </h2>
                    {/* name field */}
                    <label className="label">Name</label>
                    <input {...register("name", { required: "Name Field Require" })} type="text" className="input w-full" placeholder="your name" />
                    {errors.name && <p className='text-sm py-2 text-red-600'>{errors.name.message}</p>}

                    {/* Photo url field */}
                    <label className="label">Photo</label>
                    <input {...register("photo", { required: "Photo url Field Require" })} type="url" className="input w-full" placeholder="Your photo url" />
                    {errors.photo && <p className='text-sm py-2 text-red-600'>{errors.photo.message}</p>}

                    {/* email field */}
                    <label className="label">Email</label>
                    <input {...register("email", { required: "Email Field Require" })} type="email" className="input w-full" placeholder="Email" />
                    {errors.email && <p className='text-sm py-2 text-red-600'>{errors.email.message}</p>}

                    {/* Password field */}
                    <label className="label">Password</label>
                    <input {...register("password", { required: "Password Field Require" })} type="password" className="input w-full" placeholder="Password" />
                    {errors.password && <p className='text-sm py-2 text-red-600'>{errors.password.message}</p>}
                    <button className="btn btn-neutral mt-4">Registration</button>
                    <p className='text-sm font-black py-2'>All ready have a account please <Link className='underline' href={"/login"}>login</Link></p>
                </fieldset>
            </form>
        </div>
    );
};

export default RegisterPage;