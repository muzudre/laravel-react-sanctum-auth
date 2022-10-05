import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import user from "../Models/user";

function App() {
    const PrivateRoute = ({ component: Component, authenticated }) => (authenticated ? <Component /> : <Navigate to='/app/login' />)
    return (
        <Routes>
            <Route exact path={'/app/login'} element={<Login />} />
            <Route
                path='/app/dashboard'
                element={<PrivateRoute authenticated={user.isLoggedIn()} component={Dashboard} />} />
        </Routes>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('app'));
}