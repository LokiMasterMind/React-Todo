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
  },
  filterTodo:function(todos,showCompleted,searchText){
    var filteredTodo=todos;

    filteredTodo=filteredTodo.filter((todo)=>{
      return !todo.completed || showCompleted
    });

    filteredTodo=filteredTodo.filter((todo)=>{
      var text=todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1 ;
    });

    filteredTodo.sort((a,b)=>{
      if(!a.completed && b.completed){
        return -1;
      }else if(a.completed && !b.completed){
        return 1;
      }else {
        return 0;
      }
    });

      return filteredTodo;
  }
}
