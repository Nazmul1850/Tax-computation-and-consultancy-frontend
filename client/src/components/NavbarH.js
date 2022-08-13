
import Wrapper from '../assets/wrappers/NavbarH'
import {Logo} from '.'
import { Link } from "react-scroll";



const NavbarH = () => {
    return(
        <Wrapper>
            <nav>
                <div className='logo-style'>
                    <Logo/>
                    <h3>T <span>C</span> <small>&</small> C</h3>
                </div>
                <Link 
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className='btn btn-hero service-btn'>
                    Our Services
                </Link>
            </nav>
        </Wrapper>
    );
}
export default NavbarH;