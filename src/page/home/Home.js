import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import './Home.css'
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
const Home = props => {
    return (
        <div className="home-container">
            <Sidebar />
            <div className={props.sidebarIsOpen ? 'home-main' : 'home-main sidebar-close'}>
                <Header />
                <div className='main-content'>
                    {/* react router ver 5 */}
                    {/* <Switch>
                        <Route path="/user-info" component={UserWithLoading} />
                        <Route path="/list-groups" component={ListGroupsWithLoading} />
                        <Route path="/settings" component={SettingsWithLoading} />
                    </Switch> */}

                    {/* react router ver 6 */}
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sidebarIsOpen: state.view.sidebarIsOpen
    }
}

export default connect(mapStateToProps, null)(Home);