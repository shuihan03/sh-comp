<template>
    <div class="password-input list-class">
        <div class="password-input-item item-class" v-for="(item,index) in list" :key="index">
            <template v-if="dot">
                <div class="password-input-dot" v-if="value.length > index"></div>
            </template>
            <template v-else>
                 <div>{{value[index]}}</div>
            </template>    
            <div class="password-input-cursor" v-if="focus && value.length === index"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'jdd-password-input',
        props: {
            value: String,
            length: {
                type: Number,
                default: 6
            },
            dot: Boolean,
            focus: Boolean,
        },
        data() {
            return {
                list: []
            }
        },
        created(){
            this.list= new Array(this.length).fill(null)
        }
    }
</script>

<style lang='scss' scoped> 
    @import "../../../styles/_var.scss";
    .password-input {
        @extend .flex;
        @extend .between;

        @keyframes cursor-flicker {
            from {
                opacity: 0;
            }

            50% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        &-item {
            position: relative;
            width: 48px;
            height: 52px;
            @extend .flex;
            @extend .middle;
            @extend .center;
            background-color: rgba($mainStrong, 0.1);
            border-radius: $borderRadius;
            font-size: 40px;
            line-height: 56px;
            font-weight: bolder;
            color: $mainStrong;
        }

        &-dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: $mainStrong;
        }

        &-cursor {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 1px;
            height: 40%;
            background-color: $mainStrong;
            transform: translate(-50%, -50%);
            animation: 1s cursor-flicker infinite;
        }
    }
</style>