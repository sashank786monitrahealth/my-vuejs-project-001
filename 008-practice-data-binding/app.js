const app = Vue.createApp({
    data(){
        return {
        name:"sashank",
        age:"35",
        randomNumber:Math.random()*5,
        imgeURL:'https://picsum.photos/id/237/200/300'
    }
    }
})

app.mount('#assignment')