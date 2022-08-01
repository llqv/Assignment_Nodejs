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

const router = new Navigo('/', { linksSelector: "a" })

export type ComponentBase = {
    render: () => Promise<string>
    afterRender?: () => void
}

const print = async (component: ComponentBase, param?: any) => {
    const element = document.getElementById('app')
    if (element) {
        element.innerHTML = await component.render()
    }

    if (component.afterRender) {
       component.afterRender()
    }
}

router.on({
    "/": () => {
        print(HomePage)
    },
    "/card": () => {
        print(cardPage)
    },
    "/detailPage": () => {
        print(DetailProduct)
    },
    "/signin": () => {
        print(signin)
    },
    "/signup": () => {
        print(signup)
    },
    "/admin/edit/:id": () => {
        print(editProductPage)
    },
    "/adminPages": () => {
        print(listProduct)
    },
})
router.resolve();

