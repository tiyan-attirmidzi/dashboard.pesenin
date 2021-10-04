import axios from 'axios';

const ROOT_API = process.env.NEXT_PUBLIC_API;
const VERSION_API = 'api/v1';

export async function getTableSection() {
  const url = await axios.get(
    // eslint-disable-next-line comma-dangle
    `${ROOT_API}/${VERSION_API}/tables/sections`
  );
  const axiosResponse = url.data;
  return axiosResponse.tableSections;
}

export async function getTableTableSection(id: string) {
  const url = await axios.get(
    // eslint-disable-next-line comma-dangle
    `${ROOT_API}/${VERSION_API}/tables/sections/${id}`
  );
  const axiosResponse = url.data;
  return axiosResponse.tableSection.tables;
}

export async function getTableDetail(id: string) {
  const url = await axios.get(
    // eslint-disable-next-line comma-dangle
    `${ROOT_API}/${VERSION_API}/tables/${id}`
  );
  const axiosResponse = url.data;
  return axiosResponse.table;
}

export async function createTable(data) {
  const url = await axios
    .get(`${ROOT_API}/${VERSION_API}/tables`, data)
    .catch((err) => err.response);
  const axiosResponse = url.data;
  if (axiosResponse?.error === 1) {
    return axiosResponse;
  }
  return axiosResponse.table;
}

export async function getMenus() {
  return null;
}
