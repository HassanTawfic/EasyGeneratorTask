
import { useForm } from 'react-hook-form'
import type { RegisterProps } from "../Models/User";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from '../Context/useAuth';
import { useState } from 'react';

type Props = {};

const validationSchema: Yup.ObjectSchema<RegisterProps> = Yup.object({
    name: Yup.string().nullable().defined(),
    email: Yup.string().required("Email is required").email('Invalid email address'),
    password: Yup.string().required("Password is required")
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[^A-Za-z0-9]/, 'Password must contain at least one symbol')
        .matches(/[A-Za-z]/, 'Password must contain at least one letter')
})

const Register = (props: Props) => {

    const { RegisterUser } = useAuth()
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>({ resolver: yupResolver(validationSchema) })

    const handleRegister = async (data: RegisterProps) => {
        setLoading(true);
        try {
            await RegisterUser(data);
        } finally {
            setLoading(false);
        }
    }
    return (
        <section className="bg-gray-800 min-h-screen flex justify-center items-center px-4">
            <div className="bg-white p-10 sm:p-14 rounded-2xl shadow-lg w-full max-w-md">
                <h3 className="text-center text-3xl font-bold mb-8">Signup</h3>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Name</label>
                        <input
                            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            type="text"
                            {...register("name")}
                        />
                        {errors.name && <span className="text-sm text-red-600 mt-1">{errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Email</label>
                        <input
                            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            type="email"
                            {...register("email")}
                        />
                        {errors.email && <span className="text-sm text-red-600 mt-1">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col">
                        <label className="font-semibold text-gray-700 mb-1">Password</label>
                        <input
                            className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                            type="password"
                            {...register("password")}
                        />
                        {errors.password && <span className="text-sm text-red-600 mt-1">{errors.password.message}</span>}
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-gray-800 text-white font-medium py-2 rounded-xl transition-colors flex items-center justify-center gap-2 ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-700"
                            }`}
                    >
                        {loading && (
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                />
                            </svg>
                        )}
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Register