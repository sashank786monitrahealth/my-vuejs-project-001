const app = Vue.createApp({
    data(){
        return {
          courseGoalA:"finish the course and Learn Vue!",
          courseGoalB:'Master Vue and Build Amazing Apps!',
          vueLink:"https://v3.vuejs.org/"
        };
    }

    ,
    methods:{
     outputGoal(){
         const randomNumber = Math.random();
         if(randomNumber < 0.5){
             return this.courseGoalA
         } else {
             return this.courseGoalB
         }
     }
    }
}) ;


app.mount("#user-goal");