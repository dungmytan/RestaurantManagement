import { Link } from "react-router-dom";
import submenuhome from "./submenuhome.module.scss";
import classNames from "classnames/bind";
const CX = classNames.bind(submenuhome);

function SubmenuHome() {
    return (
        <div className={CX('navigation')}>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>All tables</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Occupied</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Vacant</p></Link>
            </div>
        </div>
    );
}


export default SubmenuHome