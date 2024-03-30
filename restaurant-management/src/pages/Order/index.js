// import React, { useState } from 'react';
import SubmenuOrder from './SubmenuOrder'
import Date from './Date'
import SearchID from './SearchID'
import Bill from './OrderComponent/Bill'
import order from './order.module.scss'
import { Pagination } from 'antd';
import styles from './index.css'
import classNames from 'classnames/bind'
const CX = classNames.bind(order);

function Order() {
    // const [current, setCurrent] = useState(3);
    // const onChange = (page) => {
    //     console.log(page);
    //     setCurrent(page);
    // };

    return (<div className={CX('container')}>
        <div className={CX('submenu')}>
            <SubmenuOrder />
            <Date />
            <SearchID />
        </div>

        <div className={CX('content')}>
            <div className={CX('content-top')}>
                <p>ID</p>
                <p>Table</p>
                <p>Date</p>
                <p>Total</p>
                <p>Status</p>
            </div>
            <div className={CX('content-middle')}>
                <Bill />
                <Bill />
                <Bill />
                <Bill />
                <Bill />
                <Bill />
                <Bill />
                <Bill />
                <Bill />
                <Bill />
            </div>
            <div className={CX('content-bottom')}>
                <Pagination style={styles} size="small" total={1000} />
            </div>
        </div>
    </div>);
}

export default Order;