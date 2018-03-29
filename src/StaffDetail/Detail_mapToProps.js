// import staffDetail from './StaffDetail';

function editStaffItem (text) {
    return {
        type: 'editStaffItem',
        data: text,
    }
}

function closeBox () {
    return {
        type: 'closeBox',
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        editStaffItem: (value) => dispatch(editStaffItem(value)),
        closeBox: () => dispatch(closeBox()),
    }
}

export const mapStateToProps = (state, ownProps) => {
    return {
        staffDetail: state.Staff.staffDetail,
    }
}


