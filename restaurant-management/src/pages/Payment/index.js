import ItemOrder from "./PaymentComponent/ItemOrder"
import payment from "./payment.module.scss"
import classNames from "classnames/bind";
const CX = classNames.bind(payment);

function Payment() {
    return (<div className={CX('container')}>
        <div className={CX('item-list')}>
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
            <ItemOrder />
        </div>
        <div className={CX('content')}>
            <p className={CX('sub-title')}>Order ID</p>
            <p className={CX('order-id')}>#000001</p>
            <div className={CX('detail')}>
                <p>Table T1</p>
                <p>18:00 28/03/2024</p>
            </div>
            <div className={CX('fee')}>
                <div className={CX('tax')}>
                    <p>Tax</p>
                    <p>80.000 đ</p>
                </div>
                <div className={CX('service-charge')}>
                    <p>Service charge</p>
                    <p>50.000 đ</p>
                </div>
                <div className={CX('total-price')}>
                    <p>Total</p>
                    <p>300.000 đ</p>
                </div>
            </div>
            <div className={CX('nav')}>
                <button className={CX('continue-order')}>Continues order</button>
                <button className={CX('payment')}>Payment</button>
            </div>

        </div>
    </div >);
}

export default Payment;