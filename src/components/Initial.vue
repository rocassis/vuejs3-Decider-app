<template>
  <div>
    <h1>Ask a question</h1>
    <div class="mb-3">
      <input name="question" id="question" type="text" class="form-control" v-model="question" />

        <button v-if="question" class="btn animate__animated animate__fadeIn" @click="handleNext">Next</button>
    </div>

    <!-- <div v-if="error" class="error">
        Your question is too short!
    </div> -->

  </div>
</template>

<script>
export default{
    data() {
        return {
            question:'',
            // error: false
        }
    },
    methods: {
        handleNext(e){
            e.preventDefault();
            let quest_size = this.question.length;
            if(quest_size <= 5){
                // this.error = true;
                this.$emit('handleToast',{
                    type:'error',
                    message:'Your question is too short!'
                });
            }else{
                this.error = false;
                this.$emit('goto',1);
                this.$emit('question', this.question);
            }
        }
    },
}
</script>
