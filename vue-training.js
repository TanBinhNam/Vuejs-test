const app = Vue.createApp({
    data: function () {
        return {
   
              premium: true,
              cart: [],
        }
    },
    computed: {

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
        }

      },
      },
      
})
