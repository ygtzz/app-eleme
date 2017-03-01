<template>
    <div class="c">
        <div class="left" ref="leftWrapper">
            <ul class="menu" >
                <li @click="fMenuItemClick(item)" :class="{'active':activeMenuName==item.name}" class="item f12" v-for="(item,index) in goods">{{item.name}}</li>
            </ul>
        </div>
        <div class="right" ref="rightWrapper">
            <ul>
                <li v-for="item in goods">
                    <div class="title f12"> {{item.name}}</div>
                    <c-food :foods="item.foods"></c-food>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .c{display:flex;}
    .left{width:80px;}
    .right{flex:1;}
    .item{padding:15px;background-color:#F3F5F7;
        &.active{background-color:#fff}
    }
    .title{color:#93999f;line-height:2.1;background:#F3F5F7;padding-left:14px;border-left:2px solid #D9DDE1;}
</style>
<script>
import BScroll from 'better-scroll';
import data from 'index/mock/data';
import food from './food.vue';

export default {
    name:'c-goods',
    created(){
        this.goods = data.goods;
        
    },
    mounted(){
        this.$nextTick(() => {
            console.log('lalala')
            this.fInitScroll();
        });
    },
    props:{
        seller:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            goods:[],
            activeMenuName:'',
            scrollY: 0
            leftScroll:'',
            rightScroll:''
        }
    },
    methods:{
        fMenuItemClick(item){
            this.activeMenuName = item.name;
        },
        fInitScroll(){
            this.leftScroll = new BScroll(this.$refs.leftWrapper,{
                click:true
            });
            this.rightScroll = new BScroll(this.$refs.rightWrapper,{
                click:true,
                probeType: 3
            });
            this.rightScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            });
            //this.rightScroll.scrollTo(0, 1500)
        }
    },
    components:{
        'c-food':food
    }
}
</script>