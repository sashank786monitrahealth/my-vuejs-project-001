const app = Vue.createApp({
    data(){
        return {
        name:"sweety",
        age:"2",
        randomNumber:Math.random()*5,
        imgeURL:'https://picsum.photos/seed/picsum/200/300'
    }
    },
    methods:{
        calculateAge(){
            return parseInt(this.age) +5;
        },
        calculateRandom(){
            Math.random()*10;
        }
    }
})

app.mount('#assignment')