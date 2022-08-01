import { Outlet, Link } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import BigSidebar from '../../components/BigSidebar';
import Navbar from '../../components/Navbar';
import SmallSidebar from '../../components/SmallSidebar';


const SharedLayout = () => {
    return (
        <Wrapper>
        <main className='dashboard'>
            <SmallSidebar></SmallSidebar>
            <BigSidebar></BigSidebar>
            <div>
                <Navbar>
                    <div className='dashboard-page'>
                        <Outlet/>
                    </div>
                </Navbar>
            </div>
        </main>
        <Outlet />
      </Wrapper>
    )
}
export default SharedLayout;