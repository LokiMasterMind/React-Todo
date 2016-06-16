var React=require('react');

var TodoList=require('TodoList');

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
  render:function(){
    var {todos}=this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    );
  }
});

module.exports=TodoApp;
