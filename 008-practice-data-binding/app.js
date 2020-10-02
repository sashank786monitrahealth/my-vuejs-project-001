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
            return this.age +5;
        }
    }
})

app.mount('#assignment')