<template>
    <div class="c">
        <div class="rate f12">
            <div class="left tc">
                <p class="score">4.2</p>
                <p>综合评分</p>
                <p>高于周边商家69.2%</p>
            </div>
            <div class="right">
                <p class="score-wrap">
                    <span>服务态度</span>
                    <span class="mid">
                        <c-star :score="4"></c-star>
                    </span>
                    <span>4.1</span>
                </p>
                <p class="score-wrap">
                    <span>商品评分</span>
                    <span class="mid">
                        <c-star :score="4"></c-star>
                    </span>
                    <span>4.3</span>
                </p>
                <p class="time">
                    <span>送达时间</span>
                    <span class="mid">38分钟</span>
                </p>
            </div>
        </div>
        <div class="comment-wrap">
            <div class="count">
                <span>全部24</span>
                <span>满意18</span>
                <span>不满意6</span>
            </div>
            <div class="set">
                <span class="hook">√</span>
                <span class="set-text">只看有内容的评价</span>
            </div>
            <ul class="commentList">
                <li class="item">
                    <div class="item-inner">
                        <div class="img">
                            
                        </div>
                        <div class="info">
                            <p class="user"></p>
                            <p class="rating"></p>
                            <p class="comment"></p>
                            <p class="tag"></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .c{}
    .rate{display:flex;
        padding:15px 10px;
        .left{border-right:1px solid #b1b5b9;padding-right:10px;}
        .right{flex:1;padding-left:20px;padding-top:5px;
            p{*{display:inline-block;}}
        }
        border-bottom:1px solid #b1b5b9;
    }
    .score-wrap{margin-bottom:8px;}
    .mid{padding:0 10px;width:90px;}
    :global(.mid .fa-star){font-size:dpr(16px)}
    .score{font-size:50px;color:#FF9900;}
</style>
<script>
import star from './star.vue';

export default {
    name:'c-comment',
    props:{
        
    },
    components:{
        'c-star':star
    }
}
</script>