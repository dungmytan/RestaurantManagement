import itemorder from "./itemorder.module.scss"
import classNames from "classnames/bind";
const CX = classNames.bind(itemorder);

function ItemOrder() {
    return (<div className={CX('container')}>
        <div className={CX('image')}>
            <img src="/hinhanhbeefsteak/Beefsteak-1.jpg" alt=''></img>
        </div>
        <div className={CX('content')}>
            <p className={CX('title')}>Beefsteak with green chili sauce (80g)</p>
            <p className={CX('note')}>123456789/123456789/123456789</p>
            <div className={CX('bottom-content')}>
                <p className={CX('quantity')}>Quantity: 1</p>
                <p className={CX('price')}>300.000 đ</p>
            </div>
        </div>
    </div>);
}

export default ItemOrder;