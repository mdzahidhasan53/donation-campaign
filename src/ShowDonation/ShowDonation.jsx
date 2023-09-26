

const ShowDonation = ({data}) => {
    const {img_rectangle, category_title, title} = data;
    return (
        <div>
            <img src={img_rectangle} alt="" />
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default ShowDonation;