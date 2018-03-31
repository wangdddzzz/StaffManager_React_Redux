function login (value) {
    return {
        type : 'login',
        data : value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login : (value) => dispatch(login(value)),
    }
}

export default mapDispatchToProps;