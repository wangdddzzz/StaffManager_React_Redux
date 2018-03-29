
function removeItem(text){
    return {
        type: 'removeItem',
        data: text,
    }
}

function showDetail(text){
    return {
        type: 'showDetail',
        data: text,
    }
}

// export const mapStateToProps = (state) => {
//     return {
//         item: state.item,
//     }
// }

export const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (value) => dispatch(removeItem(value)),
        showDetail: (value) => dispatch(showDetail(value)),
    }
}