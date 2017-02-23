<template>
    <div class="c">
        <ul class="list">
            <li class="item" v-for="n in 5">
                <i class="fa fa-star" :class="{'active':n<=score}"></i>
            </li>
        </ul>
    </div>
</template>
<style lang="sass" scoped>
    .c{text-align:center}
    .list{width:100%;display:flex;font-size:40px;justify-content:space-around;}
    .item{}
    .active{color:#FF9900}
</style>
<script>
export default {
    name:'c-star',
    props:{
        score:{
            type:Number,
            required:true
        }
    }
}
</script>