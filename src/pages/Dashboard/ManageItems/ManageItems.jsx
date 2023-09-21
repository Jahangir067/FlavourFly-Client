import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div className="h-full w-full md:ms-16">
            <Helmet>
                <title>FlavourFly | Manage Item</title>
            </Helmet>

            <SectionTitle
                subHeading={"Hurry Up"}
                heading={'Manage All Items'}
            ></SectionTitle>

            <div className="font-semibold h-[70px] mx-4 md:mx-0  flex justify-between items-center">
                <h3 className="text-2xl font-semibold">Total Items: {menu.length}</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table h-full w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden md:block">#</th>
                            <th>Item Image</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th className="hidden md:block">Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr
                                key={item._id}
                            >
                                <td className="hidden md:block">{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.category}</td>
                                <td>${item.price}</td>
                                <td className="hidden md:block">
                                    <button className="btn text-2xl btn-ghost text-red-600"><AiOutlineEdit /></button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn text-2xl btn-ghost text-red-500"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default ManageItems;