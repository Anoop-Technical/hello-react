import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, areaName, cuisines, costForTwo } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className='res-logo ' src={CDN_URL + cloudinaryImageId} alt="card-image" />
            <h3>{name}</h3>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{areaName}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
}
export default RestaurantCard;