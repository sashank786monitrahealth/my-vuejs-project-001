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
    submitForm(event){
      event.preventDefault();
      alert('submitted');
    },
    add(num){
      this.counter += num;
    },
    sub(num){
      this.counter -= num;
    },
    setName(event, lastName){
      console.log(event);
      this.username = event.target.value+" "+lastName;
    }
  }
});

app.mount('#events');
