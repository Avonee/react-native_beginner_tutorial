import { ADD_TO_COUNTER } from './action'

const initialState = {
    newName: 'Avon'
}
// reducer: listens to actions and modifies the state
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_COUNTER:
            return {
                ...state,
                newName: action.payload.newName
            }
        default:
            return state
    }
}