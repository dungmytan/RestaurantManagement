import { Link } from 'react-router-dom'
import submenuorder from './submenuorder.module.scss'
import classNames from 'classnames/bind'
const CX = classNames.bind(submenuorder);
function SubmenuOrder() {
    return (
        <div className={CX('navigation')}>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>All Orders</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Paid Orders</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Unpaid Orders</p></Link>
            </div>
        </div>
    );
}

export default SubmenuOrder;