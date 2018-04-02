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
        //根据描述筛选
        case 'descripSearch':
            state.Staff.descripSearch = action.data;
            state.Staff.searchStaff();
            return { ...state, Staff: state.Staff };
        //根据身份筛选
        case 'idSearch':
            state.Staff.idSearch = action.data
            state.Staff.searchStaff();
            return { ...state, Staff: state.Staff };
        //根据身份、年龄筛选
        case 'orderSearch':
            state.Staff.orderSearch = action.data;
            return { ...state, Staff: state.Staff.searchStaff(), }
        //添加新的成员项
        case 'addStaffItem':
            state.Staff.addStaffItem(action.data);
            return { ...state, Staff: state.Staff };
        //关闭详情窗口
        case 'closeBox':
            $('#contentBox').removeClass('hide');
            state.Staff.staffDetail = null;
            return { ...state, Staff: state.Staff };
        //编辑成员项
        case 'editStaffItem':
            state.Staff.editStaffItem(action.data);
            return { ...state, Staff: state.Staff };
            return state;
        //移除成员项
        case 'removeItem':
            state.Staff.removeItem(action.data);
            return { ...state, Staff: state.Staff };
        //显示详情窗口
        case 'showDetail':
            $('#contentBox').addClass('hide');
            state.Staff.staffDetail = state.Staff.staff.filter(item => {
                return item.key == action.data;
            })[0]
            return { ...state, Staff: state.Staff };
        //登录
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