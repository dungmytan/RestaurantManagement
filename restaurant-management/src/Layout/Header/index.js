import { Link } from "react-router-dom";
import header from "./header.module.scss";
import classNames from "classnames/bind";
import { BellOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
const CX = classNames.bind(header);
function Header() {
    return (
        <div className={CX('navigation')}>
            <div className={CX('logo')}>
                <img src='/logo-removebg-preview.png' alt=''></img>
            </div>
            <div className={CX('nav-center')}>
                <div>
                    <Link className={CX('nav-center-obj')}to='#'>HOME</Link>
                </div>

                <div>
                    <Link className={CX('nav-center-obj')}to='#'>MENU</Link>
                </div>
            </div>
            <div className={CX('nav-right')}>
                <div className={CX('icon')}>
                <BellOutlined />
                </div>

                <div className={CX('icon')}>
                <ShoppingCartOutlined />
                </div> 
                <div className={CX('icon')}>
                    <div className={CX('avatar')}></div>
                </div>
            </div>
        </div>
    );
}


export default Header