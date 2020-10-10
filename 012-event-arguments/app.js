function add(){
  counter++;
}

const app = Vue.createApp({
  data: function() {
    return {
      counter: 0,
    };
  },
  methods:{
    add(num){
      this.counter += num;
    },
    sub(num){
      this.counter -= num;
    }
  }
});

app.mount('#events');
