const initialState = {
    currOrder: {
        location: '',
        startDate: '',
        endDate: '',
        guestAmount: { adults: 0, children: 0, infants: 0 },
    }
}

export function orderReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_LOCATION':
            return { ...state, currOrder: {...state.currOrder, location: action.location} }
        case 'SET_ORDER':
            return { ...state, currOrder: action.order }
        case 'SET_GUSET_AMOUNT':
            return { ...state, currOrder: action.guestAmount }
        default:
            return state
    }
}
