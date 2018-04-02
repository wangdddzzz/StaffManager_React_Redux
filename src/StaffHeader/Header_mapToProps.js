//Action Creators
function descripSearch(text){
    return {
      type:'descripSearch',
      data: text
    }
  }
  
  function idSearch(text){
    return {
      type:'idSearch',
      data: text
    }
  }
  
  function orderSearch(text){
    return {
      type:'orderSearch',
      data: text
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      descripSearch: (value) => dispatch(descripSearch(value)),
      idSearch: (value) => dispatch(idSearch(value)),
      orderSearch: (value) => dispatch(orderSearch(value)),
    }
  }

  export default mapDispatchToProps;