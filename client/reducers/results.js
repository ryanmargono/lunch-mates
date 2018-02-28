const ADD_RESULTS = "ADD_RESULTS"
const CLEAR_RESULTS = "CLEAR_RESULTS"

export const addResults = results => ({ type: ADD_RESULTS, results })

export const clearResults = () => ({ type: CLEAR_RESULTS })

function resultsReducer(results=[], action){
    switch(action.type){
        case ADD_RESULTS:
            return action.results.concat(results)
        case CLEAR_RESULTS:
            return []
        default:
            return results
    }
}

export default resultsReducer