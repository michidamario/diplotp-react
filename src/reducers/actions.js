const editPersona = (items) => (dispatch) => {
    dispatch({type: 'EDIT_ITEMS', payload: items});
}