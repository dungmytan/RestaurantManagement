import { Link } from "react-router-dom";
import table from "./table.module.scss";
import classNames from "classnames/bind";
const CX = classNames.bind(table);

function Table() {
    return (
        <div className={CX('table')}>
            <Link to='#'>
                <img src='/Table 2 seat.jpg' alt=''></img>
                <p className={CX('name-table')}>T01</p>
                <p className={CX('order-id')}>#000008</p>
                <div style={{ background: '#469BFF' }} className={CX('status')}></div>
            </Link>
        </div>
    );
}

export default Table;