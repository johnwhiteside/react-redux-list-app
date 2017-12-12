import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddItemForm extends React.PureComponent {
  getValue(e){
    return e.target.item.value;
  }

  handleSubmit(e){
    const { add } = this.props;
    let value = this.getValue(e);
    e.preventDefault();
    e.target.item.value = '';
    add(value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          name="item"
          primary={true}
          hintText="Add To List" />
        <RaisedButton
          label="Submit"
          primary={true}
          type="submit"/>
      </form>
    );
  }
}

export default AddItemForm;
