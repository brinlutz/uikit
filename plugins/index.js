import VueResource from 'vue-resource';

import VueEvents from './vue-events';
import untilDeclOfNum from '../until/declOfNum';

function helpers () {
    let untils = {
        declOfNum: untilDeclOfNum
    }

    for(let i in untils) {
        if (!window[i]) {
            window[i] = untils[i]
        }
    }
}

export default function plugin(Vue) {
    helpers();
    Vue.use(VueResource);
    Vue.use(VueEvents);
}