import { useLoaderData, useParams } from "react-router-dom";


const CategoryDetails = () => {
    const categories = useLoaderData();
    console.log(categories);
    const { id } = useParams();
    const foundCategory = categories.find((category) => category.id == id);
    const { title, img, description, price } = foundCategory;
    return (
        <div className="card bg-base-100 shadow-xl container mx-auto mt-12 lg:w-[1100px]">
            <figure><img className="w-full lg:w-[1100px] lg:h-[500px]" src={img} alt="" /></figure>

            <div className="bg-black opacity-30 -mt-32 lg:h-[130px]  lg:w-[1100px]">
                    
            </div>
            <div className="static lg:relative lg:-mt-32">
            <button className="btn btn-warning mt-10 ml-6 text-white normal-case ">Donate ${price} </button>
            </div>
            
            <div className="card-body md:w-[1100px] mt-10 lg:mt-4">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default CategoryDetails;