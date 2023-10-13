import NavItems from './NavItems';
import {APP_LOGO} from '../utils/constants';

const Header = () => (
    <div className="header-div">
       <div className = "logo">
           <img className="logo-img" src={APP_LOGO} />
       </div>
       <NavItems />
    </div>
);

export default Header;