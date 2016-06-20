
var expect = require('expect');
var uuid = require('uuid');
var TodoAPI=require('TodoAPI');
describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist(1);
  });

describe('getSet',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  })
  it('should set valid todo data',()=>{
    var todos=[{
      id:uuid(),
      text:"test todo",
      completed:false
    }];

    TodoAPI.setTodo(todos);

    var actualTodos=JSON.parse(localStorage.getItem('todos'));

    expect(actualTodos).toEqual(todos);
  });

  it('should not set invalid todo data',()=>{
    var todos={
      id:uuid(),
      text:"test todo",
      completed:false
    };

    TodoAPI.setTodo(todos);

    expect(localStorage.getItem('todos')).toEqual(null);
  });

});

describe('getSet',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  })
  it('should get valid todo data',()=>{
    var todos=[{
      id:uuid(),
      text:"test todo",
      completed:false
    }];
    localStorage.setItem('todos',JSON.stringify(todos));

    var ExpectedTodos=TodoAPI.getTodo();

    expect(todos).toEqual(ExpectedTodos);
  });
});
});
