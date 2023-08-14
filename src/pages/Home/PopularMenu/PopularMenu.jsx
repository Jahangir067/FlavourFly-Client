import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'From Our Menu'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to='/order/salad'>
                <div className="flex justify-center items-center">
                    <button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">View All Menu</button>
                </div>
            </Link>
        </section>
    );
};

export default PopularMenu;