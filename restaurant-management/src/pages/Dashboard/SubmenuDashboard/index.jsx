import { Link } from 'react-router-dom'
import submenudashboard from './submenudashboard.module.scss'
import classNames from 'classnames/bind'
const CX = classNames.bind(submenudashboard);

function SubmenuDashboard() {
    return (
        <div className={CX('navigation')}>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Day</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Week</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Month</p></Link>
            </div>
            <div className={CX('nav-obj')}>
                <Link style={{ textDecoration: 'none' }} to='#'><p>Year</p></Link>
            </div>
        </div>
    );
}

export default SubmenuDashboard;