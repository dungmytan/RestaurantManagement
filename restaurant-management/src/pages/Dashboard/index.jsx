import SubmenuDashboard from './SubmenuDashboard'
import dashboard from './dashboard.module.scss'
import classNames from 'classnames/bind'
const CX = classNames.bind(dashboard);

function Dashboard() {
    return (<div className={CX('container')}>
        <div className={CX('submenu')}>
            <SubmenuDashboard />
        </div>
        <div className={CX('statistics')}>
            <div className={CX('revenue')}>
                <p>Revenue</p>
                <p>8.888.888 đ</p>
            </div>
            <div className={CX('total-order')}>
                <p>Revenue</p>
                <p>8.888.888 đ</p>
            </div>
        </div>
        <div className={CX('graph')}>

        </div>
    </div>);
}

export default Dashboard;