import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import Navigo from 'navigo'

const router = new Navigo('/', { linksSelector: "a" })

export type ComponentBase = {
    render: () => Promise<string>
    afterRender?: () => void
}

const print = async (component: ComponentBase,param?:any)=>{
    document.getElementById('app')?.innerHTML = await component.render()
    if (component.afterRender) {
        component.afterRender()
    }
}

router.on({
    "/": () => {
        // print(HomePage)
    }
})
router.resolve();
createApp(App).mount('#app')
