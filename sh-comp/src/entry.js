import Button from './packages/button'
import Popup from './packages/popup'
import Modal from './packages/Modal'
import NumberKeyboard from './packages/number-keyboard'

const install=(Vue)=>{
    if(install.installed) return;

    Vue.component('jdd-button', Button);
    Vue.component('jdd-popup', Popup);
    Vue.component('jdd-modal',Modal);
    Vue.component('jdd-number-keyboard',NumberKeyboard);
}
if (typeof window !== 'undefined' && window.Vue) {
    console.log('install')
	install(window.Vue)
}

export default{
    install,
    Button,
    Popup,
    NumberKeyboard
}