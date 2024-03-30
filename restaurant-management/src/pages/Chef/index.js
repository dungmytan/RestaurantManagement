import { Link } from 'react-router-dom'
import OrderChef from './ChefComponent/OrderChef'
import OrderDetailChef from './ChefComponent/OrderDetailChef';
import chef from "./chef.module.scss"
import classNames from "classnames/bind";
const CX = classNames.bind(chef);

function Chef() {
    return (<div className={CX('container')}>
        <div className={CX('order-list')}>
            <div className={CX('submenu')}>
                <div className={CX('sub-obj')}>
                    <Link style={{ textDecoration: 'none' }} to='#'><p>New Order</p></Link>
                </div>
                <div className={CX('sub-obj')}>
                    <Link style={{ textDecoration: 'none' }} to='#'><p>Finished Order</p></Link>
                </div>
            </div>
            <OrderChef />
            <OrderChef />
            <OrderChef />
            <OrderChef />
        </div>
        <div className={CX('detail')}>
            <div className={CX('info')}>
                <div className={CX('sub-content')}>
                    <p>Order ID</p>
                    <p>18:00</p>
                </div>
                <div className={CX('main-info')}>
                    <p className={CX('order-id')}>#000001</p>
                    <p className={CX('table')}>Table : T1</p>
                </div>
            </div>
            <div className={CX('detail-list')}>
                <OrderDetailChef />
                <OrderDetailChef />
                {/* <OrderDetailChef />
                <OrderDetailChef /> */}
            </div>
        </div>
    </div>);
}

export default Chef;