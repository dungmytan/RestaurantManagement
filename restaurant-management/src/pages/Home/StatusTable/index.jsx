import status from "./status.module.scss";
import classNames from "classnames/bind";
const CX = classNames.bind(status);

function StatusTable() {
    return (
        <div className={CX('classify-table')}>
            <div className={CX('type')}>
                <div className={CX('signal')} style={{ background: '#0EDE16' }}></div>
                <div className={CX('text')}>
                    Vacant
                </div>
            </div>
            <div className={CX('type')}>
                <div className={CX('signal')} style={{ background: '#469BFF' }}></div>
                <div className={CX('text')}>
                    Hold on order
                </div>
            </div>
        </div>
    );
}

export default StatusTable;