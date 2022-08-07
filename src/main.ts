import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import Navigo from 'navigo'
import cardPage from './pages/user/cardPage'
import signin from './pages/register/signin'
import signup from './pages/register/signup'
import DetailProduct from './pages/user/detailproduct'
import HomePage from './pages/user/homepage'
import editProductPage from './pages/admin/editProductPage'
import listProduct from './pages/admin/listProduct'
import AddProd from './pages/admin/addProduct'
import listCategory from './pages/admin/listCategories'
import ListCategory from './pages/admin/listCategories'
import AddCate from './pages/admin/addCate'
import EditCate from './pages/admin/editCate'

const router = new Navigo('/', { linksSelector: "a" })

export type ComponentBase = {
    render: (_id: any) => Promise<string>
    afterRender?: () => void
}


const print = async (component: ComponentBase, _id: ComponentBase, params?: any) => {
    const element = document.getElementById('app')
    if (element) {
        element.innerHTML = await component.render(_id)
    }

    if (component.afterRender) {
        component.afterRender(_id)
    }
}

router.on({
    "/": () => {
        print(HomePage)
    },
    "/product/:id": (data: any) => {
        const id = data.data.id
        print(DetailProduct, id)
    },
    "/card": () => {
        print(cardPage)
    },
    "/signin": () => {
        print(signin)
    },
    "/signup": () => {
        print(signup)
    },
    "/admin/products/edit/:id": (data: any) => {
        const id = data.data.id
        print(editProductPage, id)
    },
    "/admin/categories/edit/:id": (data: any) => {
        const id = data.data.id
        print(EditCate, id)
    },
    "/adminPages": () => {
        print(listProduct)
    },
    "/adminPages/addcate": () => {
        print(AddCate)
    },
    "/adminPages/categories": () => {
        print(ListCategory)
    },
    "/adminPages/add": () => {
        print(AddProd)
    },
})
router.resolve();

