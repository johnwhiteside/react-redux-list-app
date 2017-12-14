import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';

class Item extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleClick(e){
    e.stopPropagation();
    this.props.onClick(this.props.item);
  }

  handleDeleteClick(e){
    e.stopPropagation();
    this.props.handleDeleteClick(this.props.item);
  }

  render(){
    const { item } = this.props;

    return (
      <ListItem
        onClick={this.handleClick}
        rightIcon={<FontIcon onClick={this.handleDeleteClick} className="fa fa-times"/>}>
        {item.isCompleted ? <strike>{item.title}</strike> : item.title}
      </ListItem>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
};

Item.defaultProps = {
  onClick: () => {},
  handleDeleteClick: () => {},
};

export default Item;