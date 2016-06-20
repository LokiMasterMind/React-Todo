var React=require('react');
var uuid=require('uuid');
var moment = require('moment');

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
            completed:false,
            createAt: moment().unix(),
            completedAt:undefined
          }
        ]
      })
  },
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },
  handleToggle:function(id){
    var updatedTodo=this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed=!todo.completed;
        todo.completedAt= todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({todos:updatedTodo});
  },
  render:function(){
    var {todos,showCompleted,searchText}=this.state;

  var filteredTodo=TodoAPI.filterTodo(todos,showCompleted,searchText);
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodo} onToggle={this.handleToggle}/>
        <TodoAdd submitForm={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports=TodoApp;
