import Compares from './Compares.vue'

const coms = [Compares]

const install = function(Vue){
    coms.forEach((com)=>{
        Vue.component(com.name,com)
    })
}

export default install
