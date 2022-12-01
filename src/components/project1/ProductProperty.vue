<script>
export default {
    props: {
        color: {
            type: Array,
            require: true
        },
        sizes: {
            type: Array,
            require: true
        },

    },
    emits: ["change-variant"],
    data: function () {
        return {
            selectedVariant: 0,
            size: null
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
    },
    methods: {
        changeVariant(index) {
            this.$emit('change-variant', index)
        },
        sizeData(id) {        
            this.size = id;
            // console.log(this.size);
            this.$emit('size', this.size);
        },
    },
}
</script>

<template>
     <p>Color:</p>
            <div v-for="(each, index) in color" 
            :key="each.id" 
            class="color-circle" 
            :style="{ 'background-color': each.color }"
            @click="changeVariant(index)"
            >

                
            </div>

        <p>Size:</p>
        <div class="radio-toolbar" >
            <ul>
                <li  v-for="each in sizes" :key="each.id"   >
                    <input :data-id="each.id" 
                    type="radio" 
                    @click="sizeData(each.id)" 
                    :id="each.id" 
                    name="size"
                    :value="each.size">
                    <label :for="each.id">{{ each.size }}</label>
                </li>
            </ul>
                
        </div>
 
</template>


<style scoped>
ul li{
    display: inline;
    margin-left: 20px;
}
.radio-toolbar input[type="radio"] {
    display: none;
}

.radio-toolbar label {
    border: 1px solid #ccc;
    color: #555;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.5px;
    margin-top: 5px;
    padding: 10px 15px;
    transition: all 0.5s ease 0s;
}

.radio-toolbar input[type="radio"]:checked+label {
    border: 1px solid #ff6666;
    color: #ff6666;
}
</style>