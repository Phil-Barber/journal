import { combineReducers } from 'redux';

import { 
  FOCUS_DATE,
  RECIEVE_ITEMS,
  REQUEST_ITEMS
} from '../actions';

//import { ... } from '../actions'

function items(
    state = {
        isFetching : false,
        entries : []
    }, 
    action
) {
    switch (action.type) {
        case REQUEST_ITEMS:
            return Object.assign({}, state, {
                isFetching : true
            });
        case RECIEVE_ITEMS:
            return Object.assign({}, state, {
                isFetching : false,
                entries : action.entries
                lastUpdated : action.receivedAt
        default :
            return state;
    }
}

function dateFocus(state = new Date(), action) {
  switch (action.type) {
    case FOCUS_DATE:
      return action.date;
    default: 
      return state;
  }
}

const reducer = combineReducers({
  dateFocus,
  items
});

export default reducer;
