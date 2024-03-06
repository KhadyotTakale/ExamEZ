import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    function Tutslogin() {
        navigate('/tutorlogin');
    }
    function StudentLogin() {
        navigate('/studentlogin');
    }
    function InstLogin() {
        navigate('/institutelogin');
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-md w-full p-8 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex justify-center bg-red-300">Login</h2>
                <div className="flex justify-center space-x-4">
                    <button onClick={InstLogin} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Institute Login
                    </button>
                    <button onClick={StudentLogin} className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">
                        Student Login
                    </button>
                    <button onClick={Tutslogin} className="py-2 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
                        Tutor Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
