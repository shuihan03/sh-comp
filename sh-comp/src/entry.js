import Button from './packages/button'
import Popup from './packages/popup'
import Modal from './packages/Modal'

const install=(Vue)=>{
    if(install.installed) return;

    Vue.component('jdd-button', Button);
    Vue.component('jdd-popup', Popup);
    Vue.component('jdd-modal',Modal)
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