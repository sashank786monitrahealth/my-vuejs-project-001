const app = Vue.createApp({
data(){
return {
    username:"",
    username2:""
};
},
methods:{
 showAlert(){
     alert("you pressed a button.")
 },
 showOutput(event){
     //console.log(event)
    this.username = event.target.value;

 },
 showOutput2(event){
     console.log(event)
    this.username2 = event.target.value;

 }
}
});

app.mount("#assignment");