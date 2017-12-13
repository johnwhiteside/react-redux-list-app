import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import ListItem from 'components/ListItem';
import { getActiveItems } from 'module/selectors';
import {
  removeFromList,
  completeItem,
  setItemActive
} from 'module/actions';

const mapStateToProps = state => ({
  items: getActiveItems(state),
});

const dispatchToProps = (dispatch) => ({
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

class List extends React.PureComponent {

  handleDeleteClick(item){
    const { remove} = this.props;
    remove(item.id)
  }

  handleItemClick(item){
    const { setActive, complete } = this.props;
    item.isCompleted ? setActive(item.id) : complete(item.id);
  }

  renderList(){
    const { items } = this.props;
    let $list = [];
    items.map((item, index) => {
      $list = [...$list, <ListItem onClick={this.handleItemClick} key={`item-${index}`} item={item} />];
    });
    return $list;
  }

  render(){
    return (
      <Paper>
        {this.renderList()}
      </Paper>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  remove: PropTypes.func,
  complete: PropTypes.func,
  setActive: PropTypes.func,
};

List.defaultProps = {
  remove: () => {},
  complete: () => {},
  setActive: () => {},
};

export default connect(mapStateToProps, dispatchToProps)(List);
