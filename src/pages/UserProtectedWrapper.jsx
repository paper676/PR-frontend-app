import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children, setShowLogin ,setAuthState}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
            setAuthState("Login")
            setShowLogin(true);
        }
    }, [token, setShowLogin]);

    return <>{children}</>;
};

export default UserProtectedWrapper;