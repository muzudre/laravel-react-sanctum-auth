import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../Models/user";


function Login() {
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        window.axios.post('/api/login', {
            email: formData.get('email'),
            password: formData.get('password')
        }, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            }
        }).then((response) => {
            console.log(response.data)

            user.authenticated(response.data, navigate('/app/dashboard'))
        }).catch((error) => console.log('Error: ', error))
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Sign in with</p>
                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>


                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="email"
                                    placeholder="Email address"
                                    name="email"
                                    required
                                    autoComplete="email"
                                    autoFocus
                                />
                            </div>


                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="Password"
                                    placeholder="password"
                                    name="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                                    >Remember me</label
                                    >
                                </div>
                                <a href="#!" className="text-gray-800">Forgot password?</a>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login