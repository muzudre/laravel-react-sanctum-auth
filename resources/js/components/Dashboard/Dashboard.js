import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../Models/user";

function Dashboard() {
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()

        window.axios.post('/api/logout')
            .then(() => {
                //successful response
            })
            .catch((error) => {
                //handle if something went wrong
                console.log('Error: ', error)
            })
            .then(() => {
                //this code will be definitely executed
                user.logout(navigate('/app/login'))
            })
    }

    return (
        <React.Fragment>
            <h1>Hello {user.name}, you're logged in!</h1>

            <form onSubmit={logout}>
                <button
                    type={"submit"}
                >
                    Logout
                </button>
            </form>
        </React.Fragment>
    )
}

export default Dashboard