import logo from "../../assets/Images/Frame 2 1.png";
import style from "./navbar.module.css";
import React from 'react'

const navbar = () => {
  return (
    <>
        <div className={`${style.navigation} container`}>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>

                </ul>
            </div>
        </div>
    </>
  )
}

export default navbar