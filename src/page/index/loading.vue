<template>
  <div>
    <div class="warp">
     加载中...{{num + '%'}}
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isFlag:true,
        num:0
      }
    },
    created () {
      let that=this;
    },
    mounted(){
      let that=this;
      let t=setInterval(_ => {
        if(that.num < 100) {
          that.num+=10;
        } else {
          clearInterval(t);
          this.$router.push('/index')
        }
      }, 100);
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  /*加载页*/

</style>
