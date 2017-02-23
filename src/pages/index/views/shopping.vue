<template>
    <div class="shopping">
        <header>
            <div class="banner">
                <div class="img">
                    <img src="//static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="shop">
                </div>
                <div class="info">
                    <p class="title"><span class="brand"></span><span>粥品香坊（回龙观）</span></p>
                    <p class="delivery">蜂鸟专送/38分钟送达</p>
                    <p class="discount"><span class="decrease mr5"></span><span>在线支付满28减5</span></p>
                </div>
                <div class="other">
                    <span class="count">5个<span class="fa fa-angle-right ml5"></span></span>
                </div>
            </div>
            <div class="bulletin">
                <span class="bulletin-icon dib"></span>
                <span class="bulletin-text dib ell">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</span>
                <span class="fa fa-angle-right ml2"></span>
            </div>
            <div class="bg">
                <img src="//static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="bg">
            </div>
        </header>
        <section>

        </section>
        <footer>

        </footer>
    </div>
</template>
<style lang="sass" scoped>
     header{width:100%;height:134px;position:relative;background:rgba(7,17,27,.5);color:#fff;}
    .banner{width:100%;position:relative;display:flex;padding:24px 12px 18px 24px;box-sizing:border-box;}
    .img{img{width:64px;height:64px;margin-right:16px;vertical-align:middle;}}
    .info{flex:1;font-size:dpr(12px);line-height:1;}
    .delivery{margin-top:8px}
    .discount{margin-top:10px}
    .brand{width: 30px;height: 18px;background-image:url(./header/brand@2x.png);
        background-size: cover;vertical-align: bottom;display: inline-block;margin-right:6px;}
    .discount{& *{vertical-align:middle}}
    .decrease{background-image:url(./header/decrease_1@2x.png);width:12px;height:12px;display:inline-block;}
    .title{font-size:dpr(16px);& *{vertical-align:middle}}
    .other{display:flex;align-items:flex-end;}
    .count{padding:0 8px;border-radius:15px;background:rgba(0,0,0,0.2);}
    .bulletin{display:flex;align-items:center;padding:0 22px 0 12px;box-sizing:border-box;background:rgba(7,17,27,0.2);line-height:2;height:28px;}
    .bulletin-icon{width:22px;height:12px;margin-right:3px;background:url(./header/bulletin@2x.png);}    
    .bulletin-text{flex:1;font-size:dpr(12px)}
    .bg{filter:blur(10px);width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;
        img{width:100%;height:100%;vertical-align:middle}
    }
</style>
<script>
import {mapGetters,mapActions} from "vuex";
import {fmtDate} from 'widget/filter/datetime';

export default {
    name:'c-shopping',
    created() {
        
    },
    watch:{
        '$route': function(){
            
        }
    },
    computed:{
       
    },
    methods:{
        
    },
    components:{
    },
    filters:{
        fmtDate:fmtDate
    }
}
</script>