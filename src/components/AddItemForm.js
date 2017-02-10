import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const AddItemForm = ({ add }) => {

  const getValue = (e) => {
    return e.target.item.value;
  }

  const handleSubmit = (e) => {
    let value = getValue(e);
    e.preventDefault();
    e.target.item.value = '';
    add(value);
  }

  return (
    <form onSubmit={handleSubmit}>
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
};

export default AddItemForm;
