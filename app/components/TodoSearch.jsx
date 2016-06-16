var React=require('react');

var TodoSearch=React.createClass({
  handleSearch:function(){
    var showCompletedStatus =this.refs.showCompleted.checked;
    var searchText =this.refs.searchText.value;

    this.props.onSearch(showCompletedStatus,searchText);
  },
  render:function(){
    return(
      <div>
        <div>
          <input type="text" ref="searchText" onChange={this.handleSearch}></input>
        </div>
        <div>
          <label>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}></input>
              Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports=TodoSearch;
