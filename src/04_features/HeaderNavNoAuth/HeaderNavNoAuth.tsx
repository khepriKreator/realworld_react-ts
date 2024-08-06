import {Tabs, Tab} from "../../06_shared/components";
import {Link, NavLink} from 'react-router-dom';
export const HeaderNavNoAuth = () => {
   return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">conduit</Link>
                <Tabs className="nav navbar-nav pull-xs-right">
                    <Tab className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Tab>
                    <Tab className="nav-item">
                        <NavLink className="nav-link" to="/login">Sign in</NavLink>
                    </Tab>
                    <Tab className="nav-item">
                        <NavLink className="nav-link" to="/register">Sign up</NavLink>
                    </Tab>
                </Tabs>
            </div>
        </nav>
   )
}