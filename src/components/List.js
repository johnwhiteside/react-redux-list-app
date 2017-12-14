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

const dispatchToProps = dispatch => ({
  remove: (id) => dispatch(removeFromList(id)),
  complete: (id) => dispatch(completeItem(id)),
  setActive: (id) => dispatch(setItemActive(id)),
});

class List extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick({ id }){
    const { remove} = this.props;
    remove(id);
  }

  handleItemClick({ isCompleted, id }){
    const { setActive, complete } = this.props;
    isCompleted ? setActive(id) : complete(id);
  }

  renderList(){
    const { items } = this.props;
    const listItemProps = {
      handleDeleteClick: this.handleDeleteClick,
      onClick: this.handleItemClick,
    };
    return items.map((item, index) => <ListItem {...listItemProps} key={`item-${index}`} item={item} />);
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
