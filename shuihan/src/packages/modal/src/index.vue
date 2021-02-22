<template>
    <div class="f-modal" v-if="display">
        <div :class="'f-modal-mask mask-'+animation"></div>
        <div :class="'f-modal-content modal-'+animation" :style="'margin-top: '+offset+'%'"
            @animationend="onAnimationEnd">
            <div class="f-modal-close" v-if="showClose"  @click="handleClose"></div>
            <div class="f-modal-title">{{title}}</div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'jdd-modal',
        props: {
            show: {
                type: Boolean,
                default: false,
                observer(val, oldVal) {
                    if (val === oldVal) return;
                    if (val) {
                        this.display=true;
                        this.animation='enter';
                    } else {
                        this.animation='leave';
                    }
                }
            },
            showClose: {
                type: Boolean,
                default: true
            },
            title: String,
            offset: {
                type: Number,
                default: 0
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
            onAnimationEnd() {
                if (!this.show) {
                   this.display=false;
                   this.animation='leave'; 
                } else {
                    this.animation='enter';
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
    $animateTime: .2s;

    .f-modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 0 20px;
        z-index: 99;

        @keyframes modal-enter {
            0% {
                transform: scale(0.9);
                opacity: 0;
            }

            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        @keyframes modal-leave {
            0% {
                transform: scale(1);
                opacity: 1;
            }

            100% {
                transform: scale(0.9);
                opacity: 0;
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

        .modal-enter {
            animation-name: modal-enter;
        }

        .modal-leave {
            animation-name: modal-leave;
        }

        .mask-enter {
            animation-name: mask-enter;
        }

        .mask-leave {
            animation-name: mask-leave;
        }

        .f-modal-mask,
        .f-modal-content {
            animation-duration: $animateTime;
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
            position: relative;
            width: 100%;
            background-color: #ffffff;
            border-radius: 24px;
            box-sizing: border-box;
            padding: 56px 48px 64px;
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

        &-title {
            font-size: 40px;
            line-height: 56px;
            color: #172641;
            font-weight: bolder;
            text-align: center;
        }
    }
</style>