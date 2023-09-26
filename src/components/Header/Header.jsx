import { NavLink } from "react-router-dom";
import './Header.css';


const Header = () => {

    const links = <>
        <li><NavLink style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                background: isActive ? "white" : "white",
                color: isActive ? "red" : "black",
            };
        }}
        to="/">Home</NavLink></li>
        <li><NavLink 
        style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                background: isActive ? "white" : "white",
                color: isActive ? "red" : "black",
            };
        }}
        to="/donation">Donation</NavLink></li>
        <li><NavLink
         style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                background: isActive ? "white" : "white",
                color: isActive ? "red" : "black",
            };
        }}
          to="/statistic">Statistic</NavLink></li>


    </>

    return (
        <div className="navbar container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src="https://i.postimg.cc/P5M7jZ4d/Logo.png" alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Header;