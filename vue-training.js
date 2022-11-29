



const app = Vue.createApp({
    data: function () {
        return {
            product: 'Socks',
            description: 'Wear when you feel cold or when you wearing shoes',
            image: '../training/src/assets/images/socks_green.jpg',
            imageLink: 'https://vuejs.org/guide/introduction.html#pick-your-learning-path',
        
            inventory: 011,
            onSale: false,
            red: 'red',
            green: 'green',
            detailsMaterial: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: '../training/src/assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: '../training/src/assets/images/socks_blue.jpg' },
              ],
              sizes: [
                { id: 444, size: 'XL' },
                { id: 555, size: 'M' },
                { id: 666, size: '2XL' },
                { id: 777, size: '3XL' }
              ],
              cartCount: 0,
        }
    },

    methods: {
        changeImage(value) {
            this.image = value;
        },
        addToCart() {
            this.cartCount ++;
            this.inventory --;
        },
        deleteCart() {
            if(this.cartCount === 0){
                Swal.fire({
                    title: 'The Product On Cart Is O',
                    text: "Can't Delete More!",
                  width: 600,
                  padding: '3em',
                  color: '#716add',
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
            this.cartCount --;
        }
      },

})
