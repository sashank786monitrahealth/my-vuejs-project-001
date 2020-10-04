function add(){
  counter++;
}

const app = Vue.createApp({
  data: function() {
    return {
      counter: 0,
      username:"",
    };
  },
  methods:{
    add(num){
      this.counter += num;
    },
    sub(num){
      this.counter -= num;
    },
    setName(event){
      console.log(event);
      this.username = event.target.value;
    }
  }
});

app.mount('#events');
