import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader/StaffHeader';
import StaffItemPanel from './StaffItemPanel/StaffItemPanel';
import StaffFooter from './StaffFooter/StaffFooter';
import StaffDetail from './StaffDetail/StaffDetail';
import Store from './Store';
import { Provider } from 'react-redux';
import LoginBox from './LoginBox/LoginBox';
import $ from 'jquery';

//主界面
class App extends Component {
    render() {
        return (
            <Provider store={Store}>
                <div>
                    <div id='contentBox'>
                        <StaffHeader />
                        <StaffItemPanel />
                        <StaffFooter />
                    </div>
                    <StaffDetail />
                </div>
            </Provider>
        )
    }
}

//登录界面
class LoginPage extends Component {

    componentDidMount(){
        $('#login input').focus(function(){
            $(this).attr('placeholder','请输入登录密码');
        })
    }

    render () {
        return (
            <Provider store={Store}>
                <LoginBox />
            </Provider>
        )
    }
}

ReactDOM.render(<LoginPage />, document.getElementById('lock'));
ReactDOM.render(<App />, document.getElementById('root'));
