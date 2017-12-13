import React from 'react';
import { connect } from 'react-redux';
import { addToList } from 'module/actions';
import List from 'components/List';
import AddItemForm from 'components/AddItemForm';
import Divider from 'material-ui/Divider';
import { getActiveItems } from 'module/selectors';

const mapStateToProps = state => ({
  items: getActiveItems(state),
});

const dispatchToProps = (dispatch) => ({
  add(item){
    dispatch(addToList(item));
  },
});

@connect(mapStateToProps, dispatchToProps)
export default class ListContainer extends React.Component {

  render(){
    const { add } = this.props;

    return (
      <div>
        <AddItemForm add={add} />
        <Divider />
        <List />
      </div>
    );
  }
}
