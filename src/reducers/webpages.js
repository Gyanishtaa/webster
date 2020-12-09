import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (webpages = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...webpages, action.payload];
    case UPDATE:
      return webpages.map((webpage) => (webpage._id === action.payload._id ? action.payload : webpage));
    case DELETE:
      return webpages.filter((webpage) => webpage._id !== action.payload);
    default:
      return webpages;
  }
};

