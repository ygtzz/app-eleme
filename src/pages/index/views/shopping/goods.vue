<template>
    <div class="c">
        <div class="left">
            <ul class="menu">
                <li @click="fMenuItemClick(item)" :class="{'active':activeMenuName==item.name}" class="item f12" v-for="(item,index) in goods">{{item.name}}</li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="item in goods">
                    <div class="title f12"> {{item.name}}</div>
                    <c-foods :foods="item.foods"></c-foods>
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
import data from 'index/mock/data';
import foods from './foods.vue';

export default {
    name:'c-goods',
    created(){
        this.goods = data.goods;
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
        }
    },
    methods:{
        fMenuItemClick(item){
            this.activeMenuName = item.name;
        }
    },
    components:{
        'c-foods':foods
    }
}
</script>