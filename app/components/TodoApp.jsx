var React=require('react');

var TodoList=require('TodoList');
var TodoAdd=require('TodoAdd');
var TodoSearch=require('TodoSearch');

var TodoApp=React.createClass({
  getInitialState:function(){
    return{
      showCompleted:false,
      searchText:"",
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
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText
    })
  },
  render:function(){
    var {todos}=this.state;
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <TodoAdd submitForm={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports=TodoApp;
