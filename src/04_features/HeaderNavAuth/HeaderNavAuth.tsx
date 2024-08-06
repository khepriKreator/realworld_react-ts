import {Tabs, Tab} from "../../06_shared/components";
import {Link} from "react-router-dom";

export const HeaderNavAuth = () => {
    return (
        <nav className="navbar navbar-light">
        <div className="container">
            <Link className="navbar-brand" to="/">conduit</Link>
            <Tabs className="nav navbar-nav pull-xs-right">
                <Tab className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </Tab>
                <Tab className="nav-item">
                    <Link className="nav-link" to="/editor"> <i className="ion-compose"></i>&nbsp;New Article </Link>
                </Tab>
                <Tab className="nav-item">
                    <Link className="nav-link" to="/settings"> <i className="ion-gear-a"></i>&nbsp;Settings </Link>
                </Tab>
                <Tab className="nav-item">
                    <Link className="nav-link" to="/profile/eric-simons">
                        <img src="" className="user-pic"/>
                        Eric Simons
                    </Link>
                </Tab>
            </Tabs>
        </div>
    </nav>
    )
}