const reducer = (state, action) => {
    if(action.type === 'True'){
        state = true;
    }
    if(action.type === 'False'){
        state = false;
    }

    return state
}

export default reducer;