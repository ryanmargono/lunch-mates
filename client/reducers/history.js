const ADD_HISTORY = "ADD_HISTORY"

export const addHistory = group => ({
    type: ADD_HISTORY,
    history: { group, time: Date.now() }
})

function historyReducer(history = [], action) {
    switch (action.type) {
        case ADD_HISTORY:
            return [action.history, ...history]
        default:
            return history
    }
}

export default historyReducer