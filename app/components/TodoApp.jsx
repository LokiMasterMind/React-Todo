var React=require('react');

var TodoList=require('TodoList');
var TodoAdd=require('TodoAdd');

var TodoApp=React.createClass({
  getInitialState:function(){
    return{
      todos:[
        {
          id:1,
          text:"First Todo"
        },
        {
          id:2,
          text:"Second Todo"
        },
        {
          id:3,
          text:"Third Todo"
        },
        {
          id:4,
          text:"Fourth Todo"
        }
      ]
    }
  },
  handleAddTodo:function(text){
    alert("text: "+text)
  },
  render:function(){
    var {todos}=this.state;
    return(
      <div>
        <TodoList todos={todos}/>
        <TodoAdd submitForm={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports=TodoApp;
