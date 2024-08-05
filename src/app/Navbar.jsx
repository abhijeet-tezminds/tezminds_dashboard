import Image from "next/image";
import tezmindsLogo from '../assets/tezmindslogo.png';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <div style={{display:'flex', justifyContent:"space-between"}}>
            <div style={{display:'flex'}}>
                <Image src={tezmindsLogo} />
                <MenuIcon/>
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default Navbar;