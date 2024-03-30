import { Link } from "react-router-dom";
import submenu from "./submenu.module.scss";
import classNames from "classnames/bind";
const CX = classNames.bind(submenu);

function Submenu() {
    return (
        <div className={CX('navigation')}>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Salad</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Beefsteak</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Dessert</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Drinks</p></Link>
            </div>
        </div>
    );
}


export default Submenu