var $ = require('jquery');
module.exports={
  setTodo:function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos',JSON.stringify(todos));
      return todos;
    }
  },
  getTodo:function(){
    var stringTodo=localStorage.getItem('todos');
    var todos=[];
    try{
      todos=JSON.parse(stringTodo);
    }catch(e){

    }

    if($.isArray(todos)){
      return todos;
    }else{
      return [];
    }
  }
}
