const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            'Leggere un libro',
            'Fare la spesa',
            'Giocare alla playstation',
            

        ]
      }
    },
    methods: {
        
    },
  }).mount('#app')

//   MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.