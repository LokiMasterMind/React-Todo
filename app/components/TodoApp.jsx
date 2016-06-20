var React=require('react');
var uuid=require('uuid');

var TodoList=require('TodoList');
var TodoAdd=require('TodoAdd');
var TodoSearch=require('TodoSearch');

var TodoAPI = require('TodoAPI');

var TodoApp=React.createClass({
  getInitialState:function(){
    return{
      showCompleted:false,
      searchText:"",
      todos:TodoAPI.getTodo()
    }
  },
  componentDidUpdate:function(){
    TodoAPI.setTodo(this.state.todos);
  },
  handleAddTodo:function(text){
      this.setState({
        todos:[
          ...this.state.todos,
          {
            id:uuid(),
            text:text,
            completed:false
          }
        ]
      })
  },
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText
    })
  },
  handleToggle:function(id){
    var updatedTodo=this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed=!todo.completed;
      }
      return todo;
    });
    this.setState({todos:updatedTodo});
  },
  render:function(){
    var {todos}=this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <TodoAdd submitForm={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports=TodoApp;
