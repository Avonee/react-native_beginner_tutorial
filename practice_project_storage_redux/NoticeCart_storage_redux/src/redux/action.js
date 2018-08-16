export const ADD_TO_COUNTER = 'ADD_TO_COUNTER'

// action creator
// this is what we call to send an action.
export function addToCounter(newName) {
    return {
        type: ADD_TO_COUNTER,
        payload: { newName: newName },
    }
}