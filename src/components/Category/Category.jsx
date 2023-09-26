import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const {id, img, category_bg_color, title, category_title, font_color, text_bg_color} = category;
    return (
        <Link to= {`/category/${id}`}>
            <div style={{background: `${category_bg_color}`}} className="card card-compact shadow-xl">
            <figure><img className="w-full" src={img} alt="" /></figure>
            <div className="card-body">
                <p className="w-fit p-2 rounded-md" style={{color:`${font_color}`, background:`${text_bg_color}`}}>{category_title}</p>
                <h2 style={{color:`${font_color}`}} className="card-title">{title}</h2>
            </div>
        </div>
        </Link>
    );
};

export default Category;