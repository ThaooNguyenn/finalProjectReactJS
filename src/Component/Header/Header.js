import {Link} from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";

import '../Assets/Header.css'
import Banner from '../Banner/Banner';

const Header = () => {
    return (
        <div className='header'>
            <div className='menu'>
                <img className='logo' alt='' src='https://us.123rf.com/450wm/iul123rf/iul123rf1905/iul123rf190500122/123154028-sv-letter-logo.jpg?ver=6'/>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to ={"/"} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"About"} className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"About"} className="nav-link">Post Jd</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"Contact"} className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to ={"Notification"} className="nav-link"> <IoNotifications/></Link>
                    </li>
                </ul>
                <p className='btn-header'><Link  to ={"Sign out"} className="nav-link">Sign out</Link></p>
            </div>
        </div>
    )
}

export default Header;