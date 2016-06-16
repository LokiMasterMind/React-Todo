var React=require('react');
var ReactDOM=require('react-dom');
var TestUtils=require('react-addons-test-utils');
var expect = require('expect');
var $=require('jquery');


var TodoSearch=require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist(1);
  });

 it("should called onSearch  with valid searchText",() =>{
   var spy=expect.createSpy();
   var searchText="Dog";
   var todoSearch=TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
   var $el=$(ReactDOM.findDOMNode(todoSearch));

   todoSearch.refs.searchText.value=searchText;
   TestUtils.Simulate.change(todoSearch.refs.searchText);
   expect(spy).toHaveBeenCalledWith(false,searchText);
 });

 it("should called onSearch  with valid showCompleted check",() =>{
   var spy=expect.createSpy();
   var showCompleted=true;
   var todoSearch=TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
   var $el=$(ReactDOM.findDOMNode(todoSearch));

   todoSearch.refs.showCompleted.checked=showCompleted;
   TestUtils.Simulate.change(todoSearch.refs.showCompleted);
   expect(spy).toHaveBeenCalledWith(showCompleted,"");
 });
});
