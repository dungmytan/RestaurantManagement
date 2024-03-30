import { Link } from "react-router-dom"
import classNames from "classnames/bind";
import item from "./item.module.scss"
import { ArrowRightOutlined } from "@ant-design/icons"
const CX = classNames.bind(item);

function Item({ title, decs, price }) {
    return (
        <div className={CX('item-obj')}>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='#'>
                <div className={CX('image-item')}>
                    <img src='/hinhanhbeefsteak/Beefsteak-1.jpg' style={{ height: '10em', width: '16em' }} alt=''></img>
                </div>
                <p className={CX('title-item')}>{title}</p>
            </Link>
            <p className={CX('describe-item')}>{decs}</p>
            <div className={CX('bottom-item')}>
                <p className={CX('price-item')}><p className={CX('content')}>From</p>{price} đ</p>
                <Link to='#'>
                    <button className={CX('add-item')}>
                        <p>Add to cart <ArrowRightOutlined /></p>
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default Item;