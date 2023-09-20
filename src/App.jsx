import { defineComponent } from "vue";

import "./styles/index.css"

export default defineComponent({
    setup() {
        return () => {
            return <div class="root">Hellow Vue3 Jsx</div>
        }
    }
})