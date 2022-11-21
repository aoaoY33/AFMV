import { createRouter,createWebHistory } from "vue-router";
import Play from '../page/Play/Play'
import indexMain from '../page/indexMain/indexMain'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/",
            redirect:indexMain
        },
        {
            path:'/Play',
            name:"Play",
            component:Play,
        },
        {
            path:'/indexMain',
            name:"indexMain",
            component:indexMain,
        }
    ]
})
export default router;
