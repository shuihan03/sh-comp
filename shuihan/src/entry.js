import Button from './packages/button'
import Popup from './packages/popup'
import Modal from './packages/Modal'
import NumberKeyboard from './packages/number-keyboard'
import PasswordInput from './packages/password-input'

const install=(Vue)=>{
    if(install.installed) return;

    Vue.component('jdd-button', Button);
    Vue.component('jdd-popup', Popup);
    Vue.component('jdd-modal',Modal);
    Vue.component('jdd-number-keyboard',NumberKeyboard);
    Vue.component('jdd-password-input',PasswordInput);
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