<template>
    <div id="app">
        <div class="container">
            <header class="top-fixed">
                <c-header></c-header>  
            </header>
            <section class="body">
                <router-view></router-view>
            </section>
            <footer class="bottom-fixed">
                <c-footer></c-footer> 
            </footer>
        </div>
        <!--mask layer-->
        <transition name="welcome">
            <section class="welcome" v-show="bShowWelcome"></section>    
        </transition>
        <section class="mobile-tips" v-show="bPc">
            <div class="inner">
                <div class="mobile-model"> <img src="/static/images/mobile.png" alt=""></div>
                <div class="text">
                    <p>为保证最佳用户体验</p>
                    <p class="tl">1.请用chrome移动设备调试模式(F12)下打开</p>
                    <p class="tl">2.手机浏览器访问</p>
                </div>
                <button class="btn-close mt20" @click='bPc = false'>关闭</button>
            </div>
        </section>
    </div>
</template>
<script>
import {mapState} from 'vuex';
import header from './widget/header.vue';
import footer from './widget/footer.vue';

export default {
    created(){
        var self = this;
        setTimeout(function(){
            self.bShowWelcome = false;
        },2000);
        this.bPc = !this.fIsMobile();
    },
    data(){
        return {
            bShowWelcome:true,
            bPc:false
        }
    },
    computed:{
        ...mapState({
            model:'app'
        })
    },
    methods:{
        fIsMobile(){
            return /Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone|SymbianOS|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
    },
    components:{
        'c-header':header,
        'c-footer':footer
    }
} 
</script>
<style lang="sass" scoped>
    #app{
        height:100%;width:100%;
    }
    .container{
        height:100%;width:100%;
        overflow:hidden;
        display:flex;
        flex-direction:column;
        background-color:#F1F0F6;
    }
    .top-fixed{
        
    }
    .body{
        flex:1;
        overflow:auto;
        padding-bottom:20px;        
    }
    .bottom-fixed{
        border-top: 1px solid #E7E7E7;
    }
    .welcome{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:9999;
        background: url(/static/images/launchimage.png) no-repeat center center;
        background-size: cover;
    }
    .mobile-tips{
        position:absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background:rgba(0,0,0,.7);
        color:#ccc;
        text-align:center;
        font-size:16px;
        line-height:1.6
    }
    .inner{width:20em;margin:0 auto;}
    .mobile-model{margin-top:90px;}
    .text{margin-top:15px;}
    .btn-close{padding:2px 5px;color:#fff;background-color:#04be02;border:0;border-radius:6px}
</style>
<style>
    .welcome-enter-active,.welcome-leave-active{
        transition: all .25s linear;
    }
    .welcome-enter,.welcome-leave-active{
        opacity:0;
    }
</style>