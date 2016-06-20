var React=require("react");
var ReactDOM=require("react-dom");
var TestUtils=require('react-addons-test-utils');
var expect = require('expect');
var $=require('jquery');

var TodoApp=require("TodoApp");

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo text to todos of states by handleAddTodo function',()=>{
    var todoText="hey my first todo";
    var todo=TestUtils.renderIntoDocument(<TodoApp/>);

    todo.setState({todos:[]});
    todo.handleAddTodo(todoText);

    expect(todo.state.todos[0].text).toBe(todoText);
  });
  
});
