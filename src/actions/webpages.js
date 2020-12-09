import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getWebpages = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWebpages();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWebpage = (webpage) => async (dispatch) => {
  try {
    const { data } = await api.createWebpage(webpage);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateWebpage = (id, webpage) => async (dispatch) => {
  try {
    const { data } = await api.updateWebpage(id, webpage);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};



export const deleteWebpage = (id) => async (dispatch) => {
  try {
    await await api.deleteWebpage(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
