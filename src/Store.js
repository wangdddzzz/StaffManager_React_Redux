import { createStore } from 'redux';
import Staff from './STAFF';
import $ from 'jquery';

const initialState = {
    Staff: new Staff(),
    staffDetail: null,
    login: false,
    password: 'wangdi',
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'descripSearch':
            state.Staff.descripSearch = action.data;
            state.Staff.searchStaff();
            return { ...state, Staff: state.Staff };
        case 'idSearch':
            state.Staff.idSearch = action.data
            state.Staff.searchStaff();
            return { ...state, Staff: state.Staff };
        case 'orderSearch':
            state.Staff.orderSearch = action.data;
            return { ...state, Staff: state.Staff.searchStaff(), }
        case 'addStaffItem':
            state.Staff.addStaffItem(action.data);
            return { ...state, Staff: state.Staff };
        case 'closeBox':
            $('#contentBox').removeClass('hide');
            state.Staff.staffDetail = null;
            return { ...state, Staff: state.Staff };
        case 'editStaffItem':
            state.Staff.editStaffItem(action.data);
            return { ...state, Staff: state.Staff };
            return state;
        case 'removeItem':
            state.Staff.removeItem(action.data);
            return { ...state, Staff: state.Staff };
        case 'showDetail':
            $('#contentBox').addClass('hide');
            state.Staff.staffDetail = state.Staff.staff.filter(item => {
                return item.key == action.data;
            })[0]
            return { ...state, Staff: state.Staff };
        case 'login':
            if(state.password == action.data){
                state.login = true;
                $('#lock').addClass('zoomOutDown');
                setTimeout(() => $('#container').css({'z-index':1}), 1500);
            }else{
                $('#login input').val('').addClass('bounce').attr('placeholder','密码错误');
            }
            return {...state, login : state.login};
        default:
            return state;
    }
}

const Store = createStore(reducer);

export default Store;