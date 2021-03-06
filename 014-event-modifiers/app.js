function add(){
  counter++;
}

const app = Vue.createApp({
  data: function() {
    return {
      counter: 10,
      username:"",
      confirmName:""
    };
  },
  methods:{
    confirmInput(){
       this.confirmName = this.username;
    },
    submitForm(event){
      //event.preventDefault();
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
