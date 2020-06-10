import api from "./api-helper"

export const getAllPlants = async () => {
  const resp = await api.get('/plants');
  return resp.data
}

export const getOnePlant = async (id) => {
  const resp = await api.get(`/plants/${id}`)
  return resp.data
}