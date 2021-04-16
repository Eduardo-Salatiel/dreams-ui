import ClipPathCard from "../components/ClipPathCard";
import MousemoveProductCard from "../components/MousemoveProductCard";
import SimpleProductCard from "../components/SimpleProductCard";
import UpMotionCard from "../components/UpMotionCard";

export const carouselArray =[{
    title: '3D CARD',
    component: <MousemoveProductCard />
},
{
    title: 'SIMPLE PRODUCT CARD',
    component: <SimpleProductCard />
},{
    title: 'UP MOTION CARD',
    component: <UpMotionCard />
},{
    title: 'CLIP PATH CARD',
    component: <ClipPathCard />
}]