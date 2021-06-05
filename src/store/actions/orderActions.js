export function setLocation(order) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_LOCATION', order })
            console.log('order in actions',order);
        } catch (err) {
            console.log('orderActions: err in setLocation', err)
        }
    }
}
export function setDates(order) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_DATES', order })
        } catch (err) {
            console.log('orderActions: err in setDates', err)
        }
    }
}
export function setGuestAmount(order) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_ORDER', order })
        } catch (err) {
            console.log('orderActions: err in setGuestAmount', err)
        }
    }
}

