<template>
    <div>
    <h3>Your answer is</h3>
    <div class="viewer">{{ result }}</div>

    <div>
        <hr/>
        <button class="btn animate__animated animate__fadeInLeft" @click="startOver">Start over</button>
        <button class="btn animate__animated animate__fadeInRight" @click="getResult">Decide again</button>
    </div>
  </div>
</template>

<script>
 export default{
    props: ['result'],
    mounted() {
        this.$emit('showResult');
    },
    methods: {
        startOver(){
            this.$emit('startOver');
        },
        getResult(){
            this.$emit('showResult');
        }
    },
 }
</script>
