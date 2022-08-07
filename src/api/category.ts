import Category from "../models/category";
import instance from "./config";

// List
export const listCategory = () => {
    return instance.get('/categories')
}

// Category by id
export const ReadCate = (id: any) => {
    return instance.get(`/categories/${id}`)
}
//Remove
export const RemoveCate = (id: any) => {
    return instance.delete(`/categories/${id}`)
}
//add
export const CreateCate = (category: Category[]) => {
    return instance.post(`/categories/`, category)
}
//update
//update
export const UpdateCate = (category: Category[]) => {
    return instance.patch(`/categories/${category.id}`, category)
}