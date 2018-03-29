import { createStore } from 'redux';
import Staff from './STAFF';

const initialState = {
    Staff: new Staff(),
    staffDetail: null,
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
            document.getElementById('contentBox').style.opacity = '0.2';
            state.Staff.staffDetail = state.Staff.staff.filter(item => {
                return item.key == action.data;
            })[0]
            return { ...state, Staff: state.Staff };
        default:
            return state;
    }
}

const Store = createStore(reducer);

export default Store;