<template>
    <div class="popup" v-if="display">
        <div :class="'popup-mask mask-'+animation" v-if="display" @click="tapMask"></div>
        <div :class="'popup-content popup-'+animation" @animationend="onAnimationEnd">
            <div class="popup-close" @click="handleClose"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'jdd-popup',
        props: {
            show: Boolean,
            closeOnClickOverlay: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            show(val, oldVal) {
                if (val === oldVal) return;
                if (val) {
                    this.display = true;
                    this.animation = 'enter';
                } else {
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
            handleClose() {
                this.$emit('close')
            },
            tapMask() {
                if (this.closeOnClickOverlay) {
                    this.$emit('close')
                }
            },
            onAnimationEnd() {
                if (!this.show) {
                    this.display = false;
                    this.animation = 'leave';
                } else {
                    this.animation = 'enter';
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    $animateTime: .2s;

    .popup {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 9;

        @keyframes popup-enter {
            0% {
                transform: translate(0, 100%);
            }

            100% {
                transform: translate(0, 0);
            }
        }

        @keyframes popup-leave {
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

        .popup-leave {
            animation-name: popup-leave;
        }

        .popup-enter {
            animation-name: popup-enter;
        }

        .mask-enter {
            animation-name: mask-enter;
        }

        .mask-leave {
            animation-name: mask-leave;
        }

        .popup-mask,
        .popup-content {
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
        }

        &-content {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #ffffff;
            box-sizing: border-box;
            border-radius: 24px 24px 0 0;
            padding-bottom: constant(safe-area-inset-bottom);
            padding-bottom: env(safe-area-inset-bottom);
        }

        &-close {
            position: absolute;
            right: 16px;
            top: 16px;
            width: 24px;
            height: 24px;
            background-size: cover;
            background-position: center;
            background-image: url(https://storage.360buyimg.com/jms-mini/svg/icon-close.svg);
        }
    }
</style>