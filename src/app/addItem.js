var React = require('react');
var createReactClass = require('create-react-class');

var AddItem = module.exports = createReactClass({
   render: function () {
       return(
         <form id="add-todo" onSubmit={this.handleSubmit}>
             <input type="text" required ref="newItem" />
             <input type="submit" value="Hit me"/>
         </form>
       );
   },

   // Custom functions
    handleSubmit: function (e) {
       e.preventDefault();
       this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;