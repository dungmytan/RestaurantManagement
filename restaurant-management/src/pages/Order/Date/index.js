import date from './date.module.scss'
import classNames from 'classnames/bind'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker } from 'antd';
import styles from './index.css'
const CX = classNames.bind(date);
dayjs.extend(customParseFormat);

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];

function Date() {
    return (
        <div className={CX('container')}>
            <DatePicker style={styles} defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
        </div>
    );
}

export default Date;