export const FOCUS_DATE = "FOCUS_DATE";
export const RECIEVE_ITEMS = "RECIEVE_ITEMS";
export const REQUEST_ITEMS = "REQUEST_ITEMS";


export function focusDate(date) {
  return {
    type : FOCUS_DATE,
    date : date
  }
}

function requestItems(date) {
  return {
    type: REQUEST_ITEMS,
    subreddit
  }
}

function receiveItems(date, json) {
  return {
    type: RECEIVE_ITEMS,
    entries : json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchItems(date) {
  return dispatch => {
    dispatch(requestItems(date))
    return fetch('http://localhost:3000/items?date='+date.toString())
      .then(response => response.json())
      .then(json => dispatch(receiveItems(subreddit, json)))
  }
}

function shouldFetchItems(state, date) {
  const itemsForDate = state.items.filter(item => item.date == date});
  if (!items) {
    return true
  } 
  return false
}

export function fetchItemsIfNeeded(dates) {
  return (dispatch, getState) => {
    dates.foreach( date => {
      if (shouldFetchItems(getState(), date)) {
        return dispatch(fetchItems(date));
      }
    })
  }
}
