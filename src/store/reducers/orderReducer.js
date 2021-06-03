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
        // case 'SET_ORDERS':
        //     return { ...state, orders: action.orders }
        case 'SET_ORDER':
            return { ...state, currOrder: action.order }
        case 'SET_GUSET_AMOUNT':
            return { ...state, currOrder: action.guestAmount }
        case 'ADD_ORDER':
            return { ...state, currOrder: [...state.order, action.order] }
        case 'CANCEL_ORDER':
            return { ...state, orders: state.orders.filter(order => order._id !== action.orderId) }
        case 'UPDATE_ORDER':
            return {
                ...state,
                orders: state.orders.map(order =>
                    order._id === action.order._id ? action.order : order
                )
            }
        default:
            return state
    }
}
