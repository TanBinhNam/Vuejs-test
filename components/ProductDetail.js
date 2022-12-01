app.component('product-detail', {
    props: {
        detail: {
            type: Array,
            require: true
        }
    },
    template: 
    `
    <p>Description
            <ul>
              <li v-for="each in detail">
                {{ each }}
              </li>
            </ul>

    </p>
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