<template>
    <div class="example">
        this is test page
        <jdd-button >button</jdd-button>
        <div @click="showPopUp">显示弹窗</div>
        <router-view></router-view>
        <jdd-popup :show="dialogBottomShow" :closeOnClickOverlay="true" @close="closeBottomDialog">
          <div class="detail-info">this is popup content</div>
        </jdd-popup>
    </div>
</template>
<style lang='scss' scoped>
.detail-info{
    height: 200px;
}
</style>
<script>
    export default {
        data() {
            return {
                dialogBottomShow: false
            }
        },
        methods: {
            showPopUp(){
                this.dialogBottomShow=true;
            },
            closeBottomDialog() {
                this.dialogBottomShow=false;
            }
        }
    }
</script>