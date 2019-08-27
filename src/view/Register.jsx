import React from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {addUserData} from '../store/actions/userActions';

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onSubmit = () => {
        const { addUserData } = this.props;
        const { name, email, password } = this.state;
            addUserData({
                name, email
            });
        this.props.history.push('/dashboard');
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <>
                <Header location={this.props.location} />
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign Up</h3>
                            </div>
                            <div className="card-body">
				                <form onSubmit={this.onSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input onChange={this.onChange} name="name" type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                                        </div>
                                        <input onChange={this.onChange} name="email" type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-key"></i></span>
                                        </div>
                                        <input onChange={this.onChange} name="password" type="password" className="form-control" placeholder="password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Register" className="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer" style={{color: '#fff'}}><Link to="/login">Already have account?</Link></div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
	addUserData: (user) => dispatch(addUserData(user))
});

// Register.defaultProps = {
//   addToWhishList: () => {},
// }

export default connect(mapStateToProps, mapDispatchToProps)(Register);