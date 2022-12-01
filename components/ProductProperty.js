app.component('product-property', {
    props: {
        color: {
            type: Array,
            require: true
        },
        size: {
            type: Array,
            require: true
        },

    },
    template:
    /*html*/`
    <!-- <product-status :img="image" :inventory="inventory"></product-status> -->
        <p>Color:</p>
            <div v-for="(each, index) in color" 
            :key="each.id" 
            class="color-circle" 
            :style="{ 'background-color': each.color }"
            @click="changeVariant(index)"
            >

                
            </div>
        <p>Size:</p>
            <div v-for="each in size" :key="each.id">
                {{ each.size }}
            
            </div>
    `,
    data: function () {
        return {
            selectedVariant: 0,
        }
    },
    computed: {
          image() {
            return this.color[this.selectedVariant].image;
          },
          inventory() {
            return this.color[this.selectedVariant].quantity;
          },
          onSale() {
            return this.color[this.selectedVariant].onSale;
          },
        //   sizes() {
        //     return this.sizes[this.selectedVariant].size;
        //   },
    },
    methods: {
        changeVariant(index) {
            this.$emit('change-variant', index)
        },
    },
})