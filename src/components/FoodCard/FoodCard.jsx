
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div>
            <div className="card  w-full h-full bg-base-100 shadow-2xl border-b-4 border-x-2 border-x-cyan-500 border-b-sky-600 border-t-4 border-t-sky-600 shadow-blue-800">
                <figure><img className="w-full transition duration-300 ease-in-out hover:scale-110" src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-12 mt-4 p-4 badge bg-black text-white">${price}</p>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{name}</h2>
                        <div className="badge badge-outline badge-secondary">FlavourFly</div>
                    </div>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;