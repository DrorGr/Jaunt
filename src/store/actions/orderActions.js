export function setDates(order) {
    return async dispatch => {
        try {
            dispatch({ type: 'SET_ORDER', order })
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

