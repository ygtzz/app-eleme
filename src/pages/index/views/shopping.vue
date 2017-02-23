<template>
    <div class="shopping">
        <header>
            <c-header :seller="seller"></c-header>
        </header>
        <section>

        </section>
        <footer>

        </footer>
    </div>
</template>
<style lang="sass" scoped>
    
</style>
<script>
import {mapGetters,mapActions} from "vuex";
import header from './shopping/header.vue';
import {urlParse,fmtDate} from 'widget/util/util';
import _ from 'lodash';
import data from 'index/mock/data';

export default {
    name:'v-shopping',
    created() {
        
    },
    data() {
      return {
        seller: data.seller
      }
    },
    computed:{
       
    },
    methods:{
        
    },
    components:{
        'c-header':header
    },
    filters:{
        fmtDate:fmtDate
    }
}
</script>