import orderdetail from "./orderdetailchef.module.scss"
import classNames from "classnames/bind";
const CX = classNames.bind(orderdetail);
function OrderDetailChef() {
    return (
        <div className={CX('container')}>
            <p className={CX('title')}>Beefsteak with green chili sauce (80g)</p>
            <p className={CX('note')}>no onion</p>
            <div className={CX('detail-bottom')}>
                <p className={CX('quantity')}>Quantity : 2</p>
                <button className={CX('status')}>In progress</button>
            </div>
        </div>
    );
}

export default OrderDetailChef;