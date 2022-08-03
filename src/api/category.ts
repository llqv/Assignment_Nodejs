import instance from "./config";

// List
export const listCategory = () => {
    return instance.get('/categories')
}

// Category by id
export const catebyId = (id: any) => {
    return instance.get(`/categries/${id}`)
}