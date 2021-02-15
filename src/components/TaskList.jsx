import React from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Task from './Task';
import '../styles/Tasks.css';
import { filterItems } from '../redux/actions';

const TaskList = ({ shown, action, filterItems }) => {
  const handleActionChange = (evt) => {
    filterItems(evt.target.value);
  }

  return (
    <Grid container spacing={2} className="tasks-container">
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Show</FormLabel>
          <RadioGroup aria-label="show" name="show" row defaultValue='All' onChange={handleActionChange}>
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Checked" control={<Radio />} label="Checked" />
            <FormControlLabel value="Unchecked" control={<Radio />} label="Unchecked" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <List className='tasks-list'>
        {shown.map((task, id) => <Task t={task} id={id} key={id}></Task>)}
      </List>
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    shown: state.shown,
    action: state.action,
  };
}

const mapDispatchToProps = {
  filterItems
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);