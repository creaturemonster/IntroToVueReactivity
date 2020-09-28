const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      longMessage: 'Hello World!'
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

const app2=Vue.createApp({
  data(){
    return {
      message:'',
      favoriteMeal:[]
    };
  },
});

app.mount("#app2");

const handler ={
  set(target, key, value){
    if(key == 'message'){
      target.longMessage = value + 'World';
    }
    target.longMessage;
    console.log(target);
    console.log(key);
    console.log(value);
  }
};

const proxy=new Proxy(data, handler);

proxy.message='Hello !!!';

app.mount('#app');
