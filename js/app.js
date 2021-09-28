// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue (
    {
        el: "#root",
        data: {
            emailList: [ ],
            
        },
        methods: {

        },
        mounted() {
            // store all the promises in an array
            let promiseList = [];
            for(let i = 0; i < 10; i++) {
                promiseList.push(
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                        .then((response) => {
                            return response.data.response;
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                )
            }
            // when the promises are fullfilled, store the results in data
            Promise.all(promiseList)
                .then((results) => {
                    this.emailList = [...results];
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
)