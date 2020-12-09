import axios from 'axios';

const url = 'http://localhost:3000/webpages';

export const fetchWebpages = () => axios.get(url);
export const createWebpage = (newWebpage) => axios.post(url, newWebpage);

export const updateWebpage = (id, updatedWebpage) => axios.patch(`${url}/${id}`, updatedWebpage);
export const deleteWebpage = (id) => axios.delete(`${url}/${id}`);
