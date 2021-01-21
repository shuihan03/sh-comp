import Button from './packages/button'
import Popup from './packages/popup'

const install=(Vue)=>{
    if(install.installed) return;

    Vue.component('jdd-button', Button);
    Vue.component('jdd-popup', Popup);
}
if (typeof window !== 'undefined' && window.Vue) {
    console.log('install')
	install(window.Vue)
}

export default{
    install,
    Button,
    Popup
}