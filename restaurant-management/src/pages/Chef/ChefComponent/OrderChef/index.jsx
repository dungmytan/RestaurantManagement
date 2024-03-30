import orderchef from "./orderchef.module.scss"
import classNames from "classnames/bind"
const CX = classNames.bind(orderchef);

function OrderChef() {
    return (<div className={CX('container')}>
        <div className={CX('content-top')}>
            <p className={CX('order-id')}>Order : #000001</p>
            <p>18:00</p>
        </div>
        <div className={CX('content-middle')}>
            <p>Table : T1</p>
        </div>
        <div className={CX('content-bottom')}>
            <p className={CX('quantity')}>Items : 4</p>
            <p>400.000 đ</p>
        </div>
    </div>);
}

export default OrderChef;