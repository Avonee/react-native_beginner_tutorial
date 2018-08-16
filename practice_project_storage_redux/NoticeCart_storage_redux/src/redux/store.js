import reducer from './reducer'
import { createStore } from 'redux'

// This connects the reducer to the store
export default function configureStore() {
    let store = createStore(
        // reducer, { newName: 'Avon' }
        reducer
    )

    return store
}