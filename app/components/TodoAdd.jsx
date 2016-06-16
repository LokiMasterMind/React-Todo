var React=require('react');

var TodoAdd=React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var todoText= this.refs.todoText.value;

    if(todoText.length > 0){
      this.refs.todoText.value="";
      this.props.submitForm(todoText);
    }else{
      this.refs.todoText.focus();
    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What you need to do?"></input>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports=TodoAdd;
