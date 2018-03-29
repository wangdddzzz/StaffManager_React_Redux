
function addStaffItem (value) {
    return {
        type: 'addStaffItem',
        data: value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addStaffItem: (value) => dispatch(addStaffItem(value)),
    }
}

export default mapDispatchToProps;