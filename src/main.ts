import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import Navigo from 'navigo'
import cardPage from './pages/user/cardPage'

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
        // print(HomePage)
    },
    "/card": () => {
        print(cardPage)
    },
})
router.resolve();

