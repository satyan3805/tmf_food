import {RES_IMG} from '../utils/constants';

const RestuarantCard = (props) =>(
    
    <div className='res-card'>
        {console.log(props)}
        <img className="res-logo" src={RES_IMG + props.resInfo.info.cloudinaryImageId} />
        <h3>{props.resInfo.info.name}</h3>
        <h3>{props.resInfo.info.cuisines}</h3>
        <h3>{props.resInfo.info.avgRating}</h3>
        <h3>{props.resInfo.info.costForTwo}</h3>
    </div>
);

export default RestuarantCard;