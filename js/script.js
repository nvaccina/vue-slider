const {createApp} = Vue;

createApp({

  data(){
    return{
      //array con foto
      posters: [
        'img/lemure.jpg',
        'img/lupo.jpg',
        'img/tigre.jpeg',
        'img/volpe.jpg',
        'img/zebra.jpg',
      ],
      counter: 0,
      goAutoscroll: true
    }
  },

  methods:{

    nextPrev(isNext){
      
      isNext ? this.counter++ : this.counter--;

      if(this.counter === this.posters.length) this.counter = 0;

      if(this.counter < 0) this.counter = this.posters.length - 1;
    },    

    startAutoscroll(){
      setInterval(() =>{
        if(this.goAutoscroll) this.nextPrev(true)
      },3000)
    }
  },
  
  mounted(){
    this.startAutoscroll()
  }

}).mount('#app')



