const INITIAL_STATE = {
    name: ""
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
      case "SET_NAME":
          return{
              ...state,
              name: action.payload
          }
        case "POKE_DETAIL":
            console.log(action.payload);
            return{
                ...state,
                pokemon: action.payload
            }
        default:
            return state
    }
}

export default reducer;