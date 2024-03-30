import React from 'react';
import { Input } from 'antd';
import styles from './index.css'
const { Search } = Input;


const onSearch = (value, _e, info) => console.log(info?.source, value);
function SearchID() {
    return (
        <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            style={{
                styles
            }}
        />
    );
}

export default SearchID;