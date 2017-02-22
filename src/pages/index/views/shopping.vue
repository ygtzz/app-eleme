<template>
    <div class="shopping">
        shopping
    </div>
</template>
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
<style lang="sass" scoped>
    
</style>