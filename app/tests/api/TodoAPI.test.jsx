
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

describe('filterTodo',()=>{
  var todos=[{
    id:uuid(),
    text:'some text here',
    completed:true
  },{
    id:uuid(),
    text:'other text here',
    completed:false
  },{
    id:uuid(),
    text:'some text here',
    completed:true
  }]
  it('should return all item if show completed check',()=>{
    var filterTodo=TodoAPI.filterTodo(todos,true,'');
    expect(filterTodo.length).toBe(3);
  });
  it('should return some item if show completed not check',()=>{
    var filterTodo=TodoAPI.filterTodo(todos,false,'');
    expect(filterTodo.length).toBe(1);
  });
  it('should sort by completed status',()=>{
    var filterTodo=TodoAPI.filterTodo(todos,true,'');
    expect(filterTodo[0].completed).toBe(false);
  });
  it('should filter by some text',()=>{
    var filterTodo=TodoAPI.filterTodo(todos,true,'some');
    expect(filterTodo.length).toBe(2);
  });
  it('should all if searchText is empty',()=>{
    var filterTodo=TodoAPI.filterTodo(todos,true,'');
    expect(filterTodo.length).toBe(3);
  });
});
});
