import brand_logo from  "../assets/brand_logo.png";
import "../components/navbar.css";
export default function Navbar(){
    return(<>
        <div>
            <nav className="container">
                <div className="logo">
                    <img src={brand_logo} alt="brand_logo" />
                </div>
                
                <ul>
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>

                <button>Login</button>
            </nav>
            
        </div>
        </>
    )
}