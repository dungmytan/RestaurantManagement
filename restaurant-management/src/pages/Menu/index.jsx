import SubmenuHome from "./Submenu"
import Item from "./MenuComponents/Item";
// import SearchItem from "./SearchItem";
import menu from "./menu.module.scss"
import classNames from "classnames/bind";
import itemApi from "./MenuComponents/Item/api";
const CX = classNames.bind(menu);


function Menu() {
    return (<>
        <div className={CX('container')}>
            <SubmenuHome />
            {/* <SearchItem /> */}
        </div>
        <div className={CX('item-list')}>
            {itemApi.map(product => {
                return <Item
                    title={product.name}
                    decs={product.description}
                    price={product.price} />
            })}
        </div>
    </>
    );
}

export default Menu;