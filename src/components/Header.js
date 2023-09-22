import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus()

    const data = useContext(UserContext)
    console.log(data);
    return (
        <div className="flex justify-between shadow-lg mb-2 lg:bg-slate-300">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="p-4"> {onlineStatus?  '✅' : '❌'}</li>
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/about">About Us</Link></li>
                    <li className="p-4"><Link to="/contact">Contact</Link></li>
                    <li className="p-4">{data.loggedInUser}</li>
                    <button className="login" onClick={()=>{
                        btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;