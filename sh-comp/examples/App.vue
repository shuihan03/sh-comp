<template>
    <div class="example">
        <div class="row-info" @click="showPopUp">显示底部滑入弹窗</div>
        <div class="row-info" @click="showModal">显示弹窗</div>
        <div class="row-info" @click="showKeyBoard">显示数字键盘</div>
        <jdd-modal :show="dialogShow" @close="closeModal">
          <div class="detail-info2">this is modal content</div>
        </jdd-modal>
        <jdd-popup :show="dialogBottomShow" :closeOnClickOverlay="true" @close="closeBottomDialog">
          <div class="detail-info">this is popup content</div>
        </jdd-popup>
        <jdd-number-keyboard :show="keyboardShow" @enter="handleEnter" @close="closeKeyBoard" @delete="handleDelete"></jdd-number-keyboard>
    </div>
</template>
<style lang='scss' scoped>
.row-info{
    margin: 0 0 12px;
    padding-left: 20px;
    background: #f7f8fa;
    line-height: 40px;
    border-radius: 20px;
    font-size: 14px;
    &:hover{
      background: #eef0f4;
    }
}
.detail-info{
    height: 200px;
    margin-top:50px;
    padding-left: 30px;
}
</style>
<script>
    export default {
        data() {
            return {
                dialogBottomShow: false,
                dialogShow:false,
                keyboardShow:false
            }
        },
        methods: {
            showPopUp(){
                this.dialogBottomShow=true;
            },
            closeBottomDialog() {
                this.dialogBottomShow=false;
            },
            showModal(){
                this.dialogShow=true;
            },
            closeModal(){
                this.dialogShow=false;
            },
            showKeyBoard(){
                this.keyboardShow=true;
            },
            hideKeyBoard(){
                this.keyboardShow=false;
            },
            closeKeyBoard(){
                this.keyboardShow=false;
            },
            handleDelete(){

            },
            handleEnter(){
                
            },
        }
    }
</script>