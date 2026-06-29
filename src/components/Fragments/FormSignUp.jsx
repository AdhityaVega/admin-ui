import React from 'react'
import LabeledInput from '../Elements/LabeledInput'
import Button from '../Elements/Button'
import CheckBox from '../Elements/CheckBox'
import { Link } from "react-router-dom";


function FormSignUp() {
    return (
        <>
            {/* form start */}
            <div className="mt-16">
                <form action="">
                    <div className="mb-6">
                        <LabeledInput
                            label="Name"
                            id="name"
                            type="text"
                            placeholder="Tanzir Rahman"
                            name="name"
                        />
                    </div>
                    <div className="mb-6">
                        <LabeledInput
                            label="Email Address"
                            id="email"
                            type="email"
                            placeholder="hello@example.com"
                            name="email"
                        />
                    </div>
                    <div className="mb-6">
                        <LabeledInput
                            label="Password"
                            id="password"
                            type="password"
                            placeholder="**************"
                            name="password" />
                    </div>
                    <div className="mb-3">
                        <CheckBox
                            label="Keep me signed in"
                            id="status"
                            type="checkbox"
                            name="status"
                        />
                    </div>
                    <Button>Sign Up</Button>
                </form>
            </div>
            {/* form end */}
            {/* teks start */}
            <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
                <div className="border border-gray-05 w-full"></div>
                <div className="px-2 bg-special-mainBg absolute"> or sign in with</div>
            </div>
            {/* teks end */}
            {/* sign in with google start */}
            <div className="mb-8">
                <Button type="button" variant="secondary">
                    <span className="flex items-center justify-center">
                        <svg
                            className="h-6 w-6 mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="800"
                            height="800"
                            viewBox="-0.5 0 48 48"
                            version="1.1"
                        >
                            <title>Google-color</title> <desc>Created with Sketch.</desc>
                            <defs> </defs>
                            <g
                                id="Icons"
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"

                            >
                                <path fill="#4285F4" d="M46.1454 24.0287C46.1454 22.09 45.9731 20.19 45.6441 18.356H24V32.7203H36.6343C36.09 37.4947 33.3444 41.5367 29.2483 44.2057V53.2503H36.6437C40.9703 49.336 43.4357 43.5187 43.4357 36.6977V36.6977Z" />
                                <path fill="#34A853" d="M24 48C30.2223 48 35.4526 45.941 39.2631 42.6107L31.6429 33.5663C29.5854 34.9457 26.966 35.7953 24 35.7953C18.2577 35.7953 13.3986 31.916 11.646 26.702H3.98543V35.9147C7.68343 43.2563 15.2289 48 24 48Z" />
                                <path fill="#FBBC05" d="M11.646 26.702C11.1963 25.3587 10.9429 23.9053 10.9429 22.4013C10.9429 20.8973 11.1963 19.444 11.646 18.1007V8.88806H3.98543C2.43457 11.979 1.51714 15.421 1.51714 18.9957C1.51714 22.5703 2.43457 26.0123 3.98543 29.1033L11.646 26.702Z" />
                                <path fill="#EA4335" d="M24 9.00467C27.3826 9.00467 30.4074 10.1697 32.7937 12.4437L39.4294 5.808C35.4411 2.09633 30.2109 0 24 0C15.2289 0 7.68343 4.74367 3.98543 12.0853L11.646 21.298C13.3986 16.084 18.2577 9.00467 24 9.00467Z" />
                            </g>
                        </svg>
                        Continue with Google
                    </span>
                </Button>
            </div>

            {/* sign in with google end */}
            {/* link start */}
            <div className="flex justify-center">
                <Link to="/login" className="text-primary text-sm font-bold">
                    Already have an account? Sign In
                </Link>
            </div>
            {/* link end */}
        </>
    )
}

export default FormSignUp