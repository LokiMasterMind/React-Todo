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

});
