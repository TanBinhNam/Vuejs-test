<script>
export default {
    data() {
      return {
        name: '',
        review: '',
        rating: null,    
      }
    },
    methods: {
        onSubmit() {
            if(this.name === '' || this.review === '' || this.rating === null ){
                let attr = 'in ';
                if(this.name === ''){
                    attr += 'Name ';
                }
                if(this.review === ''){
                    attr += 'Review ';
                }
                if(this.rating === null){
                    attr += 'Rating ';
                }
                Swal.fire({
                    title: 'Review is incomplete.',
                    text: "Write something "+attr,
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
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating              
            }
            
            Swal.fire({
                title: 'You want submit this review',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonText: 'No, Don\'t!',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Submit It.'
              }).then((result) => {
                if (result.isConfirmed) {
                    this.$emit('review-submitted', productReview);
                    this.name = '';
                    this.review = '';
                    this.rating = null;
                    Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Your review has been submited',
                            showConfirmButton: false,
                            timer: 1500
                        }
                      )
                } else if (                  
                    result.dismiss === Swal.DismissReason.cancel
                  ) {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'Your review don\'t be submited',
                        showConfirmButton: false,
                        timer: 1500
                    }
                    )
                  }
              })
        },
    }
}
</script>

<template>
  <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name" >Name:</label>
      <input id="name" v-model="name">
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      <input class="button" type="submit" value="Submit">
    </form>
</template>