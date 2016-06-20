var React=require('react');
var moment = require('moment');
var Todo=React.createClass({
  render:function(){
    var {id, text, completed,createAt,completedAt}=this.props;
    var message="";
    if(completed){
      message='Completed '+ moment.unix(completedAt).format('MMM Do YYYY @ h:mm a');  
    }else{
      message='Created '+ moment.unix(createAt).format('MMM Do YYYY @ h:mm a');
    }
    return(
      <div>
          <input type="checkbox"  onChange={()=>{
              this.props.onToggle(id);
            }} checked={completed}/>
            {text}
            <p>{message}</p>
      </div>
    );
  }
});

module.exports=Todo;
