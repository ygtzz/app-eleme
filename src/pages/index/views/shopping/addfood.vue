<template>
    <div class="addfood">
        <transition name="move">
            <span @click="fMinus" v-show="count > 0" class="decrease dib f14 vm">
                <i class="fa fa-minus"></i>
            </span>
        </transition>
        <span v-show="count > 0" class="count vm">{{count}}</span>
        <span @click.stop.prevent="fAdd" class="add dib f14 vm">
            <i class="fa fa-plus"></i>
        </span>
    </div>
</template>
<style lang="sass" scoped>
    .addfood{height:24px;}
    .count{padding:0 6px;color:#93999f;}
    .decrease{border:2px solid #00a0dc;border-radius:50%;color:#00A0DC;width:20px;height:20px;line-height:20px;text-align:center;}
    .add{color:#fff;background:#00a0dc;border-radius:50%;width:20px;height:20px;line-height:20px;text-align:center;}
</style>
<style>
    .move-enter-active,.move-leave-active{
        transition:all .4s linear;
    }
    .move-enter,.move-leave-active{
        transform: translateX(24px) rotate(180deg);
        opacity:0;
    }
</style>
<script>
import data from 'index/mock/data';

export default {
    name:'c-addfood',
    data(){
        return{
           count:0
        }
    },
    methods:{
        fAdd(event){
            if(!event._constructed){
                return;
            }
            this.count++;
            this.$emit('add',event.target);
        },
        fMinus(){
            this.count--;
        }
    }
}
</script>