<template>
    <div class="number-keyboard" v-if="display">
        <div :class="'number-keyboard-mask mask-'+animation+(transparent&&' number-keyboard-mask--transparent')" 
            v-if="display" @click="tapMask"></div>
        <div :class="'number-keyboard-content keyboard-content-out keyboard-'+animation"
            bind:animationend="onAnimationEnd">
            <div class="number-keyboard-row">
                <div class="number-keyboard-item" data-value="1" bindtap="handleEnter">1</div>
                <div class="number-keyboard-item" data-value="2" bindtap="handleEnter">2</div>
                <div class="number-keyboard-item" data-value="3" bindtap="handleEnter">3</div>
            </div>
            <div class="number-keyboard-row">
                <div class="number-keyboard-item" data-value="4" bindtap="handleEnter">4</div>
                <div class="number-keyboard-item" data-value="5" bindtap="handleEnter">5</div>
                <div class="number-keyboard-item" data-value="6" bindtap="handleEnter">6</div>
            </div>
            <div class="number-keyboard-row">
                <div class="number-keyboard-item" data-value="7" bindtap="handleEnter">7</div>
                <div class="number-keyboard-item" data-value="8" bindtap="handleEnter">8</div>
                <div class="number-keyboard-item" data-value="9" bindtap="handleEnter">9</div>
            </div>
            <div class="number-keyboard-row">
                <div class="number-keyboard-item number-keyboard-action"></div>
                <div class="number-keyboard-item" data-value="0" bindtap="handleEnter">0</div>
                <div class="number-keyboard-item number-keyboard-action" bindtap="handleDelete">
                    <div class="number-keyboard-delete"></div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'jdd-number-keyboard',
        props: {
            show: {
                type: Boolean,
                value: false,
                observer(val, oldVal) {
                    if (val === oldVal) return;
                    if (val) {
                        this.display= true;
                        this.animation= 'enter';
                    } else {
                        this.animation= 'leave';
                    }
                }
            },
            transparent: {
                type: Boolean,
                value: true
            },
            closeOnClickOverlay: {
                type: Boolean,
                value: true
            }
        },
        watch: {
            show(val, oldVal) {
                if (val === oldVal) return;
                if (val) {
                    this.display = true;
                    this.animation = 'enter';
                } else {
                    this.display=false;
                    this.animation = 'leave';
                }
            }
        },
        data() {
            return {
                display: false,
                animation: 'enter'
            }
        },
        methods: {
            handleEnter(e) {
                const value = e.currentTarget.dataset.value;
                this.$emit('enter', value)
            },
            handleClose() {
                this.$emit('close')
            },
            handleDelete() {
                this.$emit('delete')
            },
            tapMask() {
                if (this.closeOnClickOverlay) {
                    this.$emit('close')
                }
            },
            onAnimationEnd() {
                if (!this.show) {
                      this.display= false;
                      this.animation= 'leave';
                } else {
                     this.animation= 'enter'
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    $animateTime: .2s;
    $mainStrong:rgb(23, 38, 65);

    .number-keyboard {
        @keyframes keyboard-enter {
            0% {
                transform: translate(0, 100%);
            }

            100% {
                transform: translate(0, 0);
            }
        }

        @keyframes keyboard-leave {
            0% {
                transform: translate(0, 0);
            }

            100% {
                transform: translate(0, 100%);
            }
        }

        @keyframes mask-enter {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        @keyframes mask-leave {
            0% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        .keyboard-leave {
            animation-name: keyboard-leave;
        }

        .keyboard-enter {
            animation-name: keyboard-enter;
        }

        .mask-enter {
            animation-name: mask-enter;
        }

        .mask-leave {
            animation-name: mask-leave;
        }

        .number-keyboard-mask,
        .number-keyboard-content {
            animation-duration: $animateTime * 1.5;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
        }

        &-mask {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);

            &.number-keyboard-mask--transparent {
                background-color: transparent;
            }
        }

        &-content {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #E7E9EC;
            box-sizing: border-box;
            padding: 20px 16px;
            padding-bottom: calc(constant(safe-area-inset-bottom) + 20px);
            padding-bottom: calc(env(safe-area-inset-bottom) + 20px);
        }

        &-row {
            display: flex;
            justify-content: space-between;
        }

        .number-keyboard-row+.number-keyboard-row {
            margin-top: 14px;
        }

        &-item {
            width: 110px;
            background-color: #ffffff;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $mainStrong;
            font-size: 24px;
            font-weight: bolder;
            height: 48px;

            &:active {
                background-color: rgba($mainStrong, 0.2);
            }
        }

        &-action {
            background-color: transparent;

            .number-keyboard-delete {
                width: 32px;
                height: 32px;
                background-image: url(https://storage.360buyimg.com/jms-mini/svg/icon-delete-arrow.svg);
                background-size: cover;
            }

            &:active {
                background-color: transparent;
            }
        }
    }
</style>