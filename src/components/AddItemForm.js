import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddItemForm extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

AddItemForm.propTypes = {
  add: PropTypes.func,
}

AddItemForm.defaultProps = {
  add: () => {},
}

export default AddItemForm;
