import { useState } from "react";
import Cover from "../../Home/Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const desserts = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <Helmet>
                <title>FlavourFly | Order Food</title>
            </Helmet>
            <Cover
                title={'Order Food'}
                img={'https://i.ibb.co/GJfzZQ4/banner2.jpg'}
            ></Cover>

            <Tabs className={'max-w-7xl mx-auto'} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className={' grid grid-cols-5 sm:grid-cols-2 md:grid-cols-5 justify-center md:max-w-lg mx-auto items-center my-8 space-x-2 py-4 font-bold px-2'}>
                    <Tab className={'tab tab-bordered active text-lg md:text-2xl pb-4 border-b-2  border-b-gray-700'}>Salad</Tab>
                    <Tab className='tab tab-bordered text-lg md:text-2xl pb-4 border-b-2  border-b-gray-700'>Pizza</Tab>
                    <Tab className='tab tab-bordered text-lg md:text-2xl pb-4 border-b-2  border-b-gray-700'>Soap</Tab>
                    <Tab className='tab tab-bordered text-lg md:text-2xl pb-4 border-b-2  border-b-gray-700'>Dessert</Tab>
                    <Tab className='tab tab-bordered text-lg md:text-2xl pb-4 border-b-2  border-b-gray-700'>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;