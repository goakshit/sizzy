import { createStore } from "vuex"
import user from "./modules/user"
import config from "./modules/config"

const store = createStore({
    modules: {
        user,
        config
    }
})
export default store