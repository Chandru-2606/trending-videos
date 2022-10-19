import React from "react";
import './header.css';
import { useNavigate } from 'react-router-dom';

import { Input, Space } from 'antd';



function Header () {
    const { Search } = Input;
    let navigate = useNavigate()

    const onSearch = (value) => console.log(value);
    return(
        <div className="header-div">
            <div className="header-logo">
            <a href="#">Videvo</a>
            </div>



            <div className="logout-btn">
                <button onClick={() => {navigate("/") } }>Log Out</button>
            </div>
        </div>
    );
}

export default Header;