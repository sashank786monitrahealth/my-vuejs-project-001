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
    add(){
      this.counter++;
    },
    sub(){
      this.counter--;
    }
  }
});

app.mount('#events');
