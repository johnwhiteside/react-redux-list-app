import React from 'react';
import { connect } from 'react-redux';
import {
  addToList,
  removeFromList,
  completeItem,
  setItemActive
} from 'module/actions';
import List from 'components/List';
import AddItemForm from 'components/AddItemForm';
import Divider from 'material-ui/Divider';
import { getActiveItems } from 'module/selectors';

const mapStateToProps = state => ({
  items: getActiveItems(state),
})

const dispatchToProps = (dispatch) => ({
  add(item){
    dispatch(addToList(item));
  },
  remove(index){
    dispatch(removeFromList(index));
  },
  complete(index){
    dispatch(completeItem(index));
  },
  setActive(index){
    dispatch(setItemActive(index));
  }
});

@connect(mapStateToProps, dispatchToProps)
export default class ListContainer extends React.Component {

  render(){
    let { add, remove, items, complete, setActive } = this.props;
    let listProps = {
      items,
      remove,
      complete,
      setActive
    };
    
    return (
      <div>
        <AddItemForm add={add} />
        <Divider />
        <List {...listProps} />
      </div>
    );
  }
}
