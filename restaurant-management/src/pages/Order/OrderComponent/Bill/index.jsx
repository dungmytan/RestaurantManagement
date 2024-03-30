import bill from './bill.module.scss'
import classNames from 'classnames/bind'
const CX = classNames.bind(bill);

function Bill() {
    return (<div className={CX('container')}>
        <p>000001</p>
        <p>T2</p>
        <p>12/03/2024</p>
        <p>300.000 đ</p>
        <p style={{ color: 'red' }}>Unpaid</p>
    </div>);
}

export default Bill;