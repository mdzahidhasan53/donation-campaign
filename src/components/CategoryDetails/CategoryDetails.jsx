import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../utility/localstorage";


const CategoryDetails = () => {
    const categories = useLoaderData();
    console.log(categories);
    const { id } = useParams();
    const foundCategory = categories.find((category) => category.id == id);
    const { title, img, description, price, font_color } = foundCategory;

    const handleDonation = () =>{
        saveDonation(id);
        toast("Thanks for your Donation!!");
    }
    return (
        <div className="card bg-base-100 shadow-xl container mx-auto mt-12 lg:w-[1100px]">
            <figure><img className="w-full lg:w-[1100px] lg:h-[500px]" src={img} alt="" /></figure>

            <div className="bg-black opacity-30 -mt-32 lg:h-[130px]  lg:w-[1100px]">
                    
            </div>
            <div className="static lg:relative lg:-mt-32">
            <button onClick={handleDonation} style={{background:`${font_color}`}} className="btn mt-10 ml-6 text-white normal-case ">Donate ${price} </button>
            </div>
            
            <div className="card-body md:w-[1100px] mt-10 lg:mt-4">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                
            </div>
            <ToastContainer />
        </div>
    );
};

export default CategoryDetails;