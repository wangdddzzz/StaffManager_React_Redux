import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import StaffHeader from './StaffHeader/StaffHeader';
import StaffItemPanel from './StaffItemPanel/StaffItemPanel';
import StaffFooter from './StaffFooter/StaffFooter';
import StaffDetail from './StaffDetail/StaffDetail';
import Store from './Store';
import { Provider } from 'react-redux';

class App extends Component {

    render() {
        return (
            <Provider store={Store}>
                <div>
                    <div id='contentBox' style={{ 'transition': 'opacity 0.5s ease-in-out' }}>
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

ReactDOM.render(<App />, document.getElementById('root'));
