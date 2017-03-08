import React from 'react';
import { ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const List = ({ items, remove, complete, setActive }) => {

  const renderListItem = (item, index) => {
    let $title = item.title;
    if (item.isCompleted) {
      $title = (
        <strike>{item.title}</strike>
      );
    }

    const handleDeleteClick = (e) => {
      e.stopPropagation();
      remove(item.id)
    }

    return (
      <ListItem
        onClick={() => item.isCompleted ? setActive(item.id) : complete(item.id)}
        key={`item-${index}`}
        rightIcon={<FontIcon onClick={handleDeleteClick} className="fa fa-times"/>}>
        {$title}
      </ListItem>
    );
  }

  const renderList = () => {
    let $list = [];
    items.map((item, index) => {
      $list = [...$list, renderListItem(item, index)];
    });
    return $list;
  }

  return (
    <Paper>
      {renderList()}
    </Paper>
  );
};

export default List;
