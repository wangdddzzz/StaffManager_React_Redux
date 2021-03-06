import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './Login_mapToProps';
require('./LoginBox.css');

class LoginBox extends Component {

    login () {
        let input = this.refs.input;
        this.props.login(input.value);
    }

    render() {
        return (
            <div id="login">
                <img src="./images/pic.jpg" alt=""></img>
                <input ref='input' type="password" placeholder="请输入登录密码"></input>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
}

LoginBox = connect(null,mapDispatchToProps)(LoginBox);

export default LoginBox;



