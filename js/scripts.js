const { createApp } = Vue

  createApp({
    data() {
      return {

        newTodo: [],

        todos:  [
            {
               todo:  'Leggere un libro',
               done: true
            },

            {
               todo :    'Fare la spesa',
               done: false
            },

            {
               todo:    'Giocare alla playstation',
               done:false
            }

        ]
      }
    },
    methods: {

        remove(index) {

            this.todos.splice(index, 1)
        },

        addTask() {

            if(this.newTodo != '' && this.newTodo.length > 3) {
                this.todos.push({
                    todo: this.newTodo,
                    done: false
                });
                this.newTodo = '';

            }

        },


        submitOnEnter(event) {
            if(event.keyCode === 13) {
                this.addTask()
            }
        },

        toggleDone(index) {

            
            this.todos[index].done = !this.todos[index].done;
        }

        
    },
  }).mount('#app')

