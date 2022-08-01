import instance from "./config";

// List
export const listCategory = () => {
    return instance.get('/category')
}

// Category theo id
export const catebyId = (id: any) => {
    return instance.get(`/category/${id}`)
}