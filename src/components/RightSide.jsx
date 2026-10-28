"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RightSide = () => {

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }


    return (
        <div className="bg-base-100 border border-base-200 rounded-2xl shadow-md p-5 space-y-4">

            <h2 className="text-xl font-bold text-base-content">
                Login With
            </h2>

            {/* Google Login */}
            <button onClick={handleGoogleLogin} className="btn btn-outline w-full rounded-xl gap-3 normal-case">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5 h-5"
                >
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 3.56 13.22l7.98 6.19C13.43 13.72 18.24 9.5 24 9.5z" transform="translate(0 4)" />
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.65 5.94c4.47-4.13 7.13-10.2 7.13-17.59z" />
                    <path fill="#FBBC05" d="M11.53 28.59A14.4 14.4 0 0 1 10.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 1 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z" transform="translate(0 4)" />
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.65-5.94c-2.13 1.43-4.86 2.28-8.25 2.28-5.76 0-10.64-3.89-12.39-9.13l-7.98 6.19C6.56 42.62 14.66 48 24 48z" transform="translate(0 -4)" />
                </svg>
                Continue with Google
            </button>

            {/* GitHub Login */}
            <button className="btn btn-outline w-full rounded-xl gap-3 normal-case">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.82.58A12 12 0 0 0 12 .5z" />
                </svg>
                Continue with GitHub
            </button>

        </div>
    );
};

export default RightSide;