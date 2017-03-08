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
    .c{display:flex;height:100%;}
    .left{width:80px;}
    .right{flex:1;
        height:100%;
        overflow:auto;
    }
    .item{padding:15px;background-color:#F3F5F7;
        &.active{background-color:#fff}
    }
    .title{color:#93999f;line-height:2.1;background:#F3F5F7;padding-left:14px;border-left:2px solid #D9DDE1;}
</style>
<script>
import data from 'index/mock/data';
import food from './food.vue';
import {infiniteScroll} from 'mint-ui';

export default {
    name:'c-goods',
    created(){
        this.goods = data.goods;
        
    },
    mounted(){
        this.$nextTick(() => {
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
            scrollY: 0,
            leftScroll:'',
            rightScroll:''
        }
    },
    methods:{
        fMenuItemClick(item){
            this.activeMenuName = item.name;
        },
        fInitScroll(){

        }
    },
    components:{
        'c-food':food
    }
}
</script>