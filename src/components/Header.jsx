import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pathname: this.props.location.pathname
        }   
    }
    render(){
        const {pathname} = this.state;
        return(
            <div className="bs-example">
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a className="navbar-brand">Brand</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ml-auto">
                            <Link to="/login">
                                <div className={"nav-item nav-link " + (pathname == '/login' ? 'active' : '')}>Login</div>
                            </Link>
                            <Link to="/register">
                                <div className={"nav-item nav-link " + (pathname == '/register' ? 'active' : '')}>Register</div>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;

