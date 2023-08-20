import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
           console.log(item);
           if(user && user.email) {
            const cartItem = {menuItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    refetch(); // refetch cart to update the number of items in the cart
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                      })
                      
                      Toast.fire({
                        icon: 'success',
                        title: 'Item Added on the Cart'
                      })
                }
            })
           }
           else{
            Swal.fire({
                title: 'Please Login First',
                text: "You won't be able to order without login!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
           }
    }

    return (
        <div>
            <div className="card w-full h-full bg-base-100 shadow-2xl border-b-4 border-x-2 border-x-cyan-500 border-b-sky-600 border-t-4 border-t-sky-600 shadow-blue-800">
                <figure><img className="w-full transition duration-300 ease-in-out hover:scale-110" src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 mr-12 mt-4 p-4 badge bg-black text-white">${price}</p>
                <div className="card-body">
                    <div className="flex justify-between">
                        <h2 className="card-title">{name}</h2>
                        <div className="badge badge-outline badge-secondary">FlavourFly</div>
                    </div>
                    <p>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={ () => handleAddToCart(item)} className="btn btn-outline text-orange-400 bg-slate-100 border-0 border-orange-400 border-b-4 mt-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;