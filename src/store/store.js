import { createStore } from "vuex"
import user from "./modules/user"
import config from "./modules/config"
import auth from "./modules/auth"

const store = createStore({
    modules: {
        user,
        config,
        auth
    }
})
export default store