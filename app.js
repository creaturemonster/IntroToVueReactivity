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
      //this.message = this.currentUserInput;
      this.message=this.$refs.userText.value;
    },
  },
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  }, beforeUpdated(){
    console.log('beforeMount');
  }, updated(){
    console.log("updated()");
  }, unmounted(){
    console.log("unmounted()");
  }
});
app.mount('#app');
setTimeout(function (){
  app.unmount();
}, 3000);

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
