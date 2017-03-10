<template>
    <div class="c">
        <div class="shop">
            <div class="title">{{seller.name}}</div>
            <span class="desc">
                <span class="star-wrap dib">
                    <c-star :score="seller.score"></c-star>
                </span>
                <span>{{seller.ratingCount}}</span>
                <span class="orders">
                    月售{{seller.sellCount}}单
                </span>
            </span>
            <span class="collect-wrap">
                <p class="collect"></p>
                <p class="text">收藏</p>
            </span>
        </div>
        <div class="sale">
            <span class="minPrice">
                <p>起送价</p>
                <p><span>{{seller.minPrice}}</span><span>元</span></p>
            </span>
            <span class="deliveryPrice">
                <p>商家配送</p>
                <p><span>{{seller.deliveryPrice}}</span><span>元</span></p>
            </span>
            <span class="deliveryTime">
                <p>平均配置时间</p>
                <p><span>{{seller.deliveryTime}}</span><span>分钟</span></p>
            </span>
        </div>
        <div class="annouce">
            <div class="title">公告与活动</div>
            <div class="content-wrap">
                <p class="content">
                    {{seller.bulletin}}
                </p>
                <ul v-if="seller.supports" class="supports">
                    <li v-for="(item,index) in seller.supports" class="support-item">
                        <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                        <span>{{seller.supports[index].description}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="scenery">
            <div class="title">商家实景</div>
            <div class="slide-wrap">
                <div class="slide-content">
                    <ul class="picList">
                        <li v-for="pic in seller.pics" class="pic-item">
                            <img :src="pic" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="info">
            <div class="title">商家信息</div>
            <div class="content">
                <ul class="infoList">
                    <li v-for="info in seller.infos" class="info-item">{{info}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .c{height:480px;overflow-y:auto;font-size:dpr(12px)}
    .shop{padding:15px 20px;
        .star-wrap{width:90px;}
    }
</style>
<script>
import star from './star.vue';

export default {
    name:'c-merchant',
    props:{
        seller:{
            type:Object,
            required:true
        }
    },
    data(){
        return {
            classMap:['decrease', 'discount', 'special', 'invoice', 'guarantee']
        }
    },
    components:{
        'c-star':star
    }
}
</script>