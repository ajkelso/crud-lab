import cuid from 'cuid';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer
})


export default rootReducer;

function restaurantsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            } 
            return [...state, restaurant ]   
        
        case 'DELETE_RESTAURANT':
            return state.filter(rest => rest.id !== action.id)
        default:
            return state
    }
            
}

        
function reviewsReducer(state = [], action) {
    
    switch (action.type){
        case 'ADD_REVIEW':
            console.log(action);
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId 
            }
            return [...state, review]

        case 'DELETE_REVIEW':
            return state.filter(review => review.id !== action.reviewId)
       
        default:
            return state
    }
}
