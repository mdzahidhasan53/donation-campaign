

const ShowDonation = ({ data }) => {
    const { img_rectangle, category_title, title, category_bg_color,font_color,text_bg_color,price } = data;
    return (
        <div style={{background:`${category_bg_color}`}} className="card card-side shadow-xl">
            <figure><img className="h-full" src={img_rectangle} alt="Movie" /></figure>
            <div className="card-body">
                <p style={{background:`${text_bg_color}`, color:`${font_color}`}} className="w-fit p-1 rounded-md">{category_title}</p>
                <h2 className="card-title">{title}</h2>
                <p style={{color:`${font_color}`}} className="font-bold">$ {price}</p>
                <div className="card-actions">
                    <button style={{background:`${font_color}`}} className="btn normal-case text-white">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ShowDonation;