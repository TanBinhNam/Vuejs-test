app.component('product-status', {
    props: {
        img: {
            type: String,
            require: true
        },
        inventory: {
            type: Number,
            require: true
        }
    },
    template:
    `
    <div class="product-image">
    <a :href='imageLink' target="_blank"><img :src='img' :class="[ inventory <= 0 ? 'out-of-stock-img' : '']"></a>
    </div>
    `,
    data: function () {
        return {
   
        }
    },
    computed: {

  },
    methods: {
      
      },
})