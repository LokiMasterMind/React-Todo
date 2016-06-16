var React=require('react');
var ReactDOM=require('react-dom');
var TestUtils=require('react-addons-test-utils');
var expect = require('expect');
var $=require('jquery');


var TodoAdd=require('TodoAdd');

describe('TodoAdd', () => {
  it('should exist', () => {
    expect(TodoAdd).toExist(1);
  });

  it('should called submitForm props with valid data', ()=>{
    var todoText="check mail";
    var spy=expect.createSpy();
    var addTodo=TestUtils.renderIntoDocument(<TodoAdd submitForm={spy}/>);
    var $el=$(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not have been called submitForm props with invalid data', ()=>{
    var todoText="";
    var spy=expect.createSpy();
    var addTodo=TestUtils.renderIntoDocument(<TodoAdd submitForm={spy}/>);
    var $el=$(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value=todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled(addTodo);
  });
});
