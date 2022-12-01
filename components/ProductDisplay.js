app.component('product-display', {
    props: {
      premium: {
        type: Boolean,
        required: true
      },
      cart: {
        type: Array,
        required: true
      }
    },
    template: 
    /*html*/`
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

        <p>Shipping: {{ phiShip }}</p>

        <product-detail :detail="detailsMaterial"></product-detail>
        
        <product-property :color="variants" :size="sizes" @change-variant="changeVariant"></product-property>
      </div>

      <button 
      class="button"
      :disabled="!onSale || inventory <= 0"
      @click="addToCart"
      :class="{ disabledButton: !onSale || inventory <= 0}"
      >Add to Cart</button>

      <button class="button delete" id="delete"  @click="deleteCart">Delete to Cart</button>

      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="formSubmit"></review-form>
  </div>`,
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
              { id: 2234, color: 'green', image: '../training/src/assets/images/socks_green.jpg', quantity: 2, onSale: true },
              { id: 2235, color: 'blue', image: '../training/src/assets/images/socks_blue.jpg', quantity: 0, onSale: false },
            ],
            sizes: [
              { id: 444, size: 'XL' },
              { id: 555, size: 'M' },
              { id: 666, size: '2XL' },
              { id: 777, size: '3XL' }
            ],
            reviews: [],
      }
  },
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
        return 'Free'
      }
      return 2.99
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
        this.variants[this.selectedVariant].quantity = this.variants[this.selectedVariant].quantity + 1;
    },
    formSubmit(review){
      this.reviews.push(review);
      console.log(review);
    }
    },
})