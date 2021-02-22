import NumberKeyboard from './src/index.vue'

NumberKeyboard.install = (Vue) => {
    Vue.component(NumberKeyboard.name, NumberKeyboard);
}

export default NumberKeyboard;