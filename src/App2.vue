
<script>
import ProductDisplay from './components/project1/ProductDisplay.vue'
export default {
  components: {
    ProductDisplay
  },
  data: function () {
        return {
          productId: null,
              premium: true,
              cart: [],
        }
    },
    beforeCreate () {
        console.log('Loading...');
    },
    created () {
      console.log('Have data cart');
    },
    beforeMount () {

        console.log(this.$el + 'beforeMount') // lỗi vì chưa gắn kết DOM vì vậy chưa thể truy cập đến các thành phần trong DOM ở console.log sẽ hiển thị ra 
    },
    mounted () {

        console.log(this.$el) // khi này this.$el đã gắn kết với DOM, lúc này có thể truy cập được tới các thành phần trong DOM 
    },
    // beforeUpdate() {
    //     alert("updating")
    // },
    // updated() {
    //   alert("update success")
    // },
    beforeDestroy () {
         this.cart = []
         delete this.cart
    },
    destroyed () {
        console.log(this.cart) //thời điểm này sẽ không nhận được gì ở console.
    },
    computed: {

    },
    watch: {
      productId(newCart) {
        console.log(newCart);
      }
    },
    methods: {
      updateCart(id) {
        this.cart.push(id);       
      },
      deleteCart(id) {
        if(this.cart.length === 0){
          Swal.fire({
              title: 'The Product On Cart Is O',
              text: "Can't Delete More!",
            width: 600,
            padding: '3em',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left top
              no-repeat
            `,
            timer: 1500,
            showConfirmButton: false
            })
            return;
      }
        const index = this.cart.indexOf(id)
        if (index > -1) {
            this.cart.splice(index, 1)
            this.productId = id;
           // this.$emit('id-remove-from-cart', id)
        }

      },
      },
}
</script>

<template>
  <div class="nav-bar"></div>

  <div class="cart">Cart({{ cart.length }})</div>

  <ProductDisplay :premium="premium" @add-to-cart="updateCart" 
   :cart="cart" @delete-cart="deleteCart"/>

</template>
