const app = Vue.createApp({
    data(){
        return {
        name:"sweety",
        age:"2",
        randomNumber:Math.random()*5,
        imgeURL:'https://picsum.photos/seed/picsum/200/300'
    }
    }
})

app.mount('#assignment')