<script>
import ProductProperty from './ProductProperty.vue'
import ProductDetail from './ProductDetail.vue'
import ReviewForm from './ReviewForm.vue'
import ReviewList from './ReviewList.vue'
export default {
  props: {
      premium: {
        type: Boolean,
        required: true
      },
      cart: {
        type: Array,
        required: true
      },
      // productId: {
      //   type: Number,
      //   required: true
      // }
    },
    components: {
      ProductProperty,
      ProductDetail,
      ReviewForm,
      ReviewList
    },
    emits: ["add-to-cart", "delete-cart"],
    data: function () {
      return {
          product: 'Socks',
          brand: 'Vue Mastery',
          description: 'Wear when you feel cold or when you wearing shoes',
          //image: '../training/src/assets/images/socks_green.jpg', if declare in data, must have a method to change value
          imageLink: 'https://vuejs.org/guide/introduction.html#pick-your-learning-path',
      
          selectedVariant: 0,
          red: 'red',
          green: 'green',
          detailsMaterial: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
              { id: 2234, color: 'green', image: '../src/assets/images/socks_green.jpg', quantity: 2, onSale: true },
              { id: 2235, color: 'blue', image: '../src/assets/images/socks_blue.jpg', quantity: 10, onSale: true },
            ],
            sizes: [
              { id: 444, size: 'XL' },
              { id: 555, size: 'M' },
              { id: 666, size: '2XL' },
              { id: 777, size: '3XL' }
            ],
            reviews: [],
            disable: true,
            sizeChoose: null
      }
  },
  // watch: {
  //   productId() {
  //     var array = this.variants.map(function (obj) {
  //         return obj.id;
  //     })     
  //     let index = array.indexOf(this.productId );
  //     this.variants[index].quantity = this.variants[index].quantity + 1;
  //     console.log(2);
  //     if(this.productId != null){
  //       this.productId = null;
  //     }
    
  //   }
  // },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inventory() {
      return this.variants[this.selectedVariant].quantity;
    },
    onSale() {
      return this.variants[this.selectedVariant].onSale;
    },
    phiShip(){
      if(this.premium){
        return 'Free';
      }
      return 2.99;
    }
},
  methods: {
    changeVariant(index) {
          this.selectedVariant = index;
      },
    addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
          this.variants[this.selectedVariant].quantity = this.variants[this.selectedVariant].quantity - 1;
      },
    deleteCart() {
        this.$emit('delete-cart', this.variants[this.selectedVariant].id);       
    },
    formSubmit(review){
      this.reviews.push(review);
    },
    sizeDataGet(id){
      if(id != null){
        this.sizeChoose = id;
        console.log(this.sizeChoose);
        return this.disable = false;
      }
    
    },
    // updateQuantity(id){
    
    //   this.variants[id].quantity = this.variants[id].quantity + 1;
    // }
    },
}
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <a :href='imageLink' target="_blank"><img :src='image' :class="[ inventory <= 0 ? 'out-of-stock-img' : '']"></a>
      </div>

      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="onSale" :class="green">On Sale</p>
        <p v-else :class="red">Stop Sale</p>
        <p v-if="inventory >= 11">In Stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Some</p>
        <p v-else>Out Of Stock</p>

        <p :class="{strikeout: !onSale}">Shipping: {{ phiShip }}</p>

        <ProductDetail :class="{strikeout: !onSale}" :detail="detailsMaterial"></ProductDetail>
        
        <ProductProperty :color="variants" :sizes="sizes" @change-variant="changeVariant" @size="sizeDataGet" />
      </div>
        <div class="text-right">
          <button 
          class="button"
          :disabled="((!onSale || inventory <= 0) || disable)"
          @click="addToCart"
          :class="{ disabledButton: (!onSale || inventory <= 0) || disable}"
          >Add to Cart</button>

          <button class="button delete" id="delete" @id-remove-from-cart="updateQuantity"  @click="deleteCart">Delete to Cart</button>
        </div>
      </div>
    </div>
    <ReviewList v-if="reviews.length" :reviews="reviews" />
    <ReviewForm @review-submitted="formSubmit" />
 
</template>

<style scoped>
.strikeout {
  text-decoration: line-through;
}
</style>