import { useRecoilState } from 'recoil';
import { sidebarToggleActive } from '../../../../recoil/styles/atoms';

import './style.scss';

const SidebarMenuIcon = () => {
    const [toggleClass, setToggleClass] = useRecoilState(sidebarToggleActive);

    const handleToggleClick = () => {
        if (toggleClass === '') {
            setToggleClass('active')
        } else {
            setToggleClass('');
        }
    }

    return ( 
        <div className={`sidebar-menu-icon ${toggleClass}`} onClick={handleToggleClick}/>
     );
}
 
export default SidebarMenuIcon;