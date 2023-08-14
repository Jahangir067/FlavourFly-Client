import { Link } from "react-router-dom";
import Cover from "../../Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}

            <div className="grid md:grid-cols-2 gap-4 my-8 max-w-7xl mx-auto">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${title}`}>
                <div className="flex justify-center items-center">
                    <button className="btn btn-outline mb-4 text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Order Now</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;