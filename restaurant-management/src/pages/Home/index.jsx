import Table from "./HomeComponents/Table";
import SubmenuHome from "./SubmenuHome";
import home from "./Home.module.scss"
import classNames from "classnames/bind";
import StatusTable from "./StatusTable";
const CX = classNames.bind(home);

function Home() {
    return (
        <div>
            <div className={CX('container')}>
                <div className={CX('submenu')}>
                    <SubmenuHome />
                </div>
            </div>
            <StatusTable />
            <div className={CX('content')}>
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
                <Table />
            </div>
        </div>
    );
}

export default Home;