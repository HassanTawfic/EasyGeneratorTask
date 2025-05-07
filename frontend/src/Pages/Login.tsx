import { useForm } from 'react-hook-form'
import "react-toastify/dist/ReactToastify.css";
import type { LoginProps } from "../Models/User";
import { useAuth } from "./../Context/useAuth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

type Props = {};

const ValidationSchema: Yup.ObjectSchema<LoginProps> = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required")
})

const Login = (props: Props) => {
    const { LoginUser } = useAuth()
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.redirected) {
            toast.info("You were redirected because you are not logged in.");
        }
    }, [location.state]);


    const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>({ resolver: yupResolver(ValidationSchema) })

    const handleLogin = async (data: LoginProps) => {
        setLoading(true);
        try {
            await LoginUser(data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="bg-gray-800 min-h-screen flex justify-center items-center px-4">
            <div className="bg-white p-10 sm:p-14 rounded-2xl shadow-lg w-full max-w-md">
                <h3 className="text-center text-3xl font-bold mb-8">Login</h3>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleLogin)}>
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
                        className={`bg-gray-800 text-white font-medium py-2 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-700"
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
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </section>
    )

}

export default Login;