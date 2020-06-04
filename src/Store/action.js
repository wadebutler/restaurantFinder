export const SET_RESTAURANTS = 'SET_RESTAURANTS';

export function setRestaurants(items) {
    return {
        type: SET_RESTAURANTS,
        items
    }
}