import React from 'react';
import { List as ListComponent, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import FontIcon from 'material-ui/FontIcon';

const List = ({ items, remove, complete, setActive }) => {

  const renderListItem = (item, index) => {
    let $title = item.title;
    if (item.isCompleted) {
      $title = (
        <strike>{item.title}</strike>
      );
    }
    return (
      <ListItem
        onClick={() => item.isCompleted ? setActive(item.id) : complete(item.id)}
        key={`item-${index}`}
        rightIcon={<FontIcon onClick={() => remove(item.id)} className="fa fa-times"/>}>
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
