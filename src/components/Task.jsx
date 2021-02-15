import React from 'react';
import { connect } from 'react-redux';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CheckBox from '@material-ui/core/CheckBox';
import ListItemText from '@material-ui/core/ListItemText';
import { checkItem, uncheckItem } from '../redux/actions';

const Task = ({ t, id, checkItem, uncheckItem }) => {
  const handleItemClick = (evt) => {
    if (evt.target.checked) {
      checkItem(t);
    }
    else {
      uncheckItem(t);
    }
  }
  return (
    <ListItem dense>
      <ListItemIcon key={`list-${id}`}>
        <CheckBox
          edge="start"
          disableRipple
          checked={t.checked}
          inputProps={{ 'aria-labelledby': `checkbox-list-label-${id}` }}
          onChange={handleItemClick}
        />
      </ListItemIcon>
      <ListItemText id={`checkbox-list-label-${id}`} primary={t.text} secondary={t.date} />
    </ListItem>
  );
}

const mapStateToProps = (state) => {
  return {
    checked: state.checked,
    unchecked: state.unchecked,
    shown: state.shown,
  };
}

const mapDispatchToProps = {
  checkItem,
  uncheckItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);