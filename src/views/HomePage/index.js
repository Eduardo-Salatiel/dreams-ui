import { useRecoilValue } from 'recoil';
import Carousel from '../../components/Carousel';
import ClipPathCard from '../../components/ClipPathCard';
import ComponentsSlider from '../../components/layout/ComponentsSlider';

import Sidebar from "../../components/layout/Sidebar";
import MousemoveProductCard from '../../components/MousemoveProductCard';
import SimpleProductCard from '../../components/SimpleProductCard';
import UpMotionCard from '../../components/UpMotionCard';
import { sidebarToggleActive } from '../../recoil/styles/atoms';
import './style.scss';


const HomePage = () => {
    const toggleClass = useRecoilValue(sidebarToggleActive);

    return ( 
        <div className="home-page">
            <div className={`home-page-left-child ${toggleClass}`}>
                <Sidebar/>
            </div>
            <div className={`home-page-rigth-child ${toggleClass}`}>
                <ComponentsSlider />
            </div>
        </div>
     );
}
 
export default HomePage;