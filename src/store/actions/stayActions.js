import { stayService } from '../../services/stayService'
import { userService } from '../../services/userService'
import { socketService, SOCKET_EVENT_stay_ADDED } from '../../services/socketService'


export function loadStays() {
  return async dispatch => {
    try {
      const stays = await stayService.query()
      dispatch({ type: 'LOAD_STAYS', stays })

      // socketService.on(SOCKET_EVENT_stay_ADDED, stay =>{
      //   dispatch({ type: 'ADD_stay', stay })
      // })

    } catch (err) {
      console.log('stayActions: err in loadstays', err)
    }
  }
}

export function addStay(stay) {
  return async dispatch => {
    try {
      const addedStay = await stayService.add(stay)
      dispatch({ type: 'ADD_STAY', stay: addedStay })
     
    } catch (err) {
      console.log('stayActions: err in addStay', err)
    }
  }
}

export function removeStay(stayId) {
  return async dispatch => {
    try {
      await stayService.remove(stayId)
      dispatch({ type: 'REMOVE_STAY', stayId })
    } catch (err) {
      console.log('stayActions: err in removestay', err)
    }
  }
}
