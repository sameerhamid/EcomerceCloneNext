const initialState = {
    name: '',
};
const commonReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: payload
            };
        default:
            return state;
    }
};

export default commonReducer;
