import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-content text-white">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">ACC Helper</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li> <Link to='/home'>Home</Link> </li>
                    <li> <Link to='/home'>Login</Link> </li>
                    <li> <Link to='/home'>Sign up</Link> </li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                        <a href="/" className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a href="/">Settings</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;