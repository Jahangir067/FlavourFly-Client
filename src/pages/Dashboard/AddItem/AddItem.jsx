import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success) {
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new mmwnu item', data.data)
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Item Added Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    }
        
    return (
        <div className="h-full w-full max-w-5xl md:ms-16">
            <Helmet>
                <title>FlavourFly | Add an Item</title>
            </Helmet>

            <SectionTitle
                subHeading={"What's New?"}
                heading={'Add an Item'}
            ></SectionTitle>



            <form onSubmit={handleSubmit(onSubmit)} className="mx-4 md:mx-16">
                <div className="w-full mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Recipe Name *</label>
                    <input 
                    type="text" 
                    name="name" 
                    {...register("name", {required: true, maxLength: 120})} 
                    placeholder="Recipe Name" 
                    className="input input-bordered w-full"
                    required
                     />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">

                    <div>
                        <h2>Category *</h2>
                        <select id="small" 
                        defaultValue='Choose a Category'
                        {...register("category", { required: true })} required
                        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled>Choose a Category</option>
                            <option value='Pizza'>Pizza</option>
                            <option value='Soup'>Soup</option>
                            <option value='Salad'>Salad</option>
                            <option value='Dessert'>Dessert</option>
                            <option value='Drinks'>Drinks</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Price *</label>
                        <input type="number" name="price" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="sm:col-span-2 mb-4">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Recipe Details *</label>
                    <textarea id="message" rows="6" {...register("recipe", { required: true })} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                </div>


                <input  {...register("image", { required: true })} className="block my-2 w-full md:w-1/2 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple required/>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Item</button>
            </form>

        </div>
    );
};

export default AddItem;