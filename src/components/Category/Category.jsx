import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const {id, img, category_bg_color, title, category_title} = category;
    return (
        <Link to= {`/category/${id}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="w-full" src={img} alt="" /></figure>
            <div className="card-body">
                <p>{category_title}</p>
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
        </Link>
    );
};

export default Category;