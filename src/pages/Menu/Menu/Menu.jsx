import { Helmet } from 'react-helmet-async';
import Cover from "../../Home/Shared/Cover/Cover";
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div className=''>
            <Helmet>
                <title>FlavourFly | Our Menu</title>
            </Helmet>

            <Cover img={'https://i.ibb.co/L67yjND/banner.jpg'} title='Order and Enjoy'></Cover>
            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>
            {/* offered menu items */}
            <div className='max-w-7xl mx-auto'>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            {/* dessert items */}
            <MenuCategory
                items={desserts}
                title={'dessert'}
                coverImg={'https://i.ibb.co/tmXfcns/dessert-bg.jpg'}
            ></MenuCategory>
            {/* pizza items */}
            <MenuCategory
                items={pizza}
                title={'pizza'}
                coverImg={'https://i.ibb.co/NpTLKxG/pizza-bg.jpg'}
            ></MenuCategory>
            {/* salad items */}
            <MenuCategory
                items={salad}
                title={'salad'}
                coverImg={'https://i.ibb.co/cTJrLdD/salad-bg.jpg'}
            ></MenuCategory>
            {/* soap items */}
            <MenuCategory
                items={soup}
                title={'soup'}
                coverImg={'https://i.ibb.co/xF6yb1V/soup-bg.jpg'}
            ></MenuCategory>
            {/* drinks items */}
            <MenuCategory
                items={drinks}
                title={'drinks'}
                coverImg={'https://i.ibb.co/5r9NtP4/colorful-soda-drinks-macro-shot.jpg'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;