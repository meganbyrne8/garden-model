import api from "./api-helper"

export const getAllGardens = async () => {
  const resp = await api.get('/gardens')
  return resp.data
}

export const getOneGarden = async (id) => {
  const resp = await api.get(`/gardens/${id}`)
  return resp.data
}

export const createGarden = async (gardenData) => {
  const resp = await api.post('/gardens', { garden: gardenData })
  return resp.data
}

export const updateGarden = async (id, gardenData) => {
  const resp = await api.put(`/gardens/${id}`, { garden: gardenData })
  return resp.data
}

export const deleteGarden = async (id) => {
  const resp = await api.delete(`/gardens/${id}`)
  return resp
}

export const gardenToPlant = async (gardenId, plantId) => {
  const resp = await api.get(`/plants/${plantId}/garden/${gardenId}`)
  return resp.data
}