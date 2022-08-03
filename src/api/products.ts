import Product from "../models/product"
import instance from "./config"

//list
export const List = () => {
    return instance.get(`/products`)
}
//read
export const Read = (id: any) => {
    return instance.get(`/products/${id}`)
}
//add
export const Create = (product: Product[]) => {
    return instance.post(`/products/`, product)
}
//update
export const Update = (product: Product[]) => {
    return instance.patch(`/products/${product.id}`, product)
}
//List by cate
export const Listbycate = (category: number) => {
    return instance.get(`/products?category=${category}`)
}