<template>
    <div class="shopart">
        <div class="cart f12">
            <div class="left">
                <span class="cart-outer dib">
                    <span class="cart-inner">
                        <i class="fa fa-shopping-cart f20"></i>
                    </span>
                </span>
                <span class="price b f16 ml10">¥{{price}}</span>
                <span class="f18 ml5">|</span>
                <span class="ml5">另需配送费¥4元</span>
            </div>
            <div class="right">¥20元起送</div>
        </div>
        <div class="ball-container">
            <div v-for="ball in balls">
                <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                    <div class="ball" v-show="ball.show">
                        <div class="inner inner-hook"></div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .cart{height:48px;line-height:48px;background:#141D27;color:#72777D;display:flex;align-items:center;}
    .left{flex:1;}
    .price{}
    .right{padding:0 15px;color:#7D8287;background:#2B333B}
    .cart-outer{padding:5px;border-radius:50%;background:#141d27;position:relative;top:-10px;margin-left:10px;}
    .cart-inner{padding:14px;background:#2B343C;border-radius:50%;}
</style>
<script>
export default {
    name:'c-shopcart',
    data(){
        return {
            price:0,
            balls:[
                {show:false},
                {show:false},
                {show:false},
                {show:false},
                {show:false}
            ],
            dropBalls:[]
        }
    },
    props:{
        
    },
    methods:{
        addFood(target) {
            this.drop(target);
        },
        drop(el){
            const aHiddenBall = this.balls.filter(item => !item.show);
            if(aHiddenBall.length){
                const ball = aHiddenBall[0];
                ball.show = true;
                ball.el = el;
                this.dropBalls.push(ball);
            }
        },
        beforeDrop(el){
            console.log(el)
            let count = this.balls.length;
            while(count--){
                const ball = this.balls[count];
                if(ball.show){
                    const rect = ball.el.getBoundingClientRect();
                    const x = rect.left -32;
                    const y = -(window.innerHeight - rect.top - 22);
                    el.style.display = '';
                    el.style.webkitTransform = `translate3d(0,${y}px,0)`;
                    el.style.transform = `translate3d(0,${y}px,0)`;
                    let inner = el.getElementsByClassName('inner-hook')[0];
                    inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
                    inner.style.transform = `translate3d(${x}px,0,0)`;
                }
            }
        },
        dropping(el,done){
            let rf = el.offsetHeight;
            console.log(el)
            this.$nextTick(() => {
                el.style.webkitTransform = 'translate3d(0,0,0)';
                el.style.transform = 'translate3d(0,0,0)';
                let inner = el.getElementsByClassName('inner-hook')[0];
                inner.style.webkitTransform = 'translate3d(0,0,0)';
                inner.style.transform = 'translate3d(0,0,0)';
                el.addEventListener('transitionend', done);
            });
        },
        afterDrop(el){
            let ball = this.dropBalls.shift();
            if (ball) {
                ball.show = false;
                el.style.display = 'none';
            }
        }
    }
}
</script>