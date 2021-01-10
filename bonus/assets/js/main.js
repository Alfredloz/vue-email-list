
// Bonus (facolativo):
// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// Fate una cartella bonus.
let app = new Vue({
    el: '#app',
    data:{
        numbs: [],
    },
    methods:{
        randomNumber(){
            for (let i = 0; i < 36; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            .then(response =>{
                this.numbs.push(response.data.response);
            })               
            }
        }
    },
    mounted(){
    }
})