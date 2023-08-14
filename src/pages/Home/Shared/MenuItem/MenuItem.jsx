

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4 mb-4 mx-2 md:mx-0">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name} ------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">{price}</p>
        </div>
    );
};

export default MenuItem;