<template>
  <div class="container">
    <transition name="fade" appear mode="out-in">
      <component
        :is="screens[position]"
        :question="question"
        :result="result"
        @goto="handleGoto"
        @question="handleQuestion"
        @showResult="showResult"
        @startOver="restartValues"
        @handleToast="handleToast"
      />
    </transition>
  </div>
</template>

<script>
import appInitial from "./components/Initial.vue";
import appConfirm from "./components/Confirm.vue";
import appResults from "./components/Results.vue";

export default {
  components: {
    appInitial,
    appConfirm,
    appResults,
  },

  data() {
    return {
      screens: ["appInitial", "appConfirm", "appResults"],
      position: 0,
      question: "",
      result: "",
      list: [
        "Yes",
        "No",
        "Maybe",
        "Not sure..try again",
        "Ask a friend",
        "Call the police",
      ],
    };
  },
  methods: {
    handleGoto(position) {
      this.position = position;
    },
    handleQuestion(question) {
      this.question = question;
    },
    handleToast(values){
        this.$toast.show(values.message, {
            type: values.type,
            position: 'top',
            duration: 2000,
            pauseOnHover:false
        })
    },
    getRandomValue(){
        return this.list[Math.floor(Math.random() * this.list.length)];
    },
    generateResult(){
        let rand = this.getRandomValue();
        if(this.result !== ''){
            while(rand === this.result){
                rand = this.getRandomValue();
            }
        }
        this.result = rand;
    },
    showResult(){
        this.generateResult();
    },
    restartValues(){
        this.position = 0;
        this.question = '';
        this.result = '';
    }
  },
};
</script>

<style>
@import "./assets/style.css";

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: 0.5s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: 0.5s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
