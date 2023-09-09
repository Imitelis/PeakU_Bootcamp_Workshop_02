import axios from "axios";

const apiUrl = "localhost:8000";
const baseUrl = `https://lively-darkness-2264.fly.dev/api/blogs`;

const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

/*
const create = async (newObject) => {
  const request = axios.post(baseUrl, newObject, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return request.then((response) => response.data);
};

const remove = async (id) => {
  const url = `${baseUrl}/${id}`;
  const request = axios.delete(url);
  return request.then((response) => response.data);
};

const update = async (id, updatedObject) => {
  const url = `${baseUrl}/${id}`;
  const request = axios.put(url, updatedObject, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return request.then((response) => response.data);
};
*/

// eslint-disable-next-line
export default {
  getAll,
  // create,
  // remove,
  // update,
};
