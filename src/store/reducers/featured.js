const initialState = {
    pageApi: [],
};


export default function reducer(state = initialState, action){

    switch (action.type){
        case "RESPONSE_CHANGE_DEADLINE":
            return {...state, pageApi: {...state.pageApi, deadline: action.deadline}};
        case "RESPONSE_PAGE_API":
            return {...state, pageApi: action.api};

        default: return state;
    }
}