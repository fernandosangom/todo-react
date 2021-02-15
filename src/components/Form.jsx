import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { addItem, setText, setDate } from '../redux/actions'

const Form = ({ text, date, addItem, setText, setDate }) => {

  const handleAddItem = () => {
    addItem();
  }

  const handleSetText = (evt) => {
    setText({value: evt.target.value, error: false});
  }

  const handleSetDate = (evt) => {
    setDate({value: evt.target.value, error: false});
  }
  
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            id="task"
            label="Task"
            name='text'
            value={text.value}
            onChange={handleSetText}
            error={text.error}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            fullWidth
            id="dueDate"
            label="Due date"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
            name='date'
            onChange={handleSetDate}
            value={date.value}
            error={date.error}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" id="add" color="primary" fullWidth onClick={handleAddItem}>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.text,
    date: state.date,
  }
}

const mapDispatchToProps = {
  addItem,
  setText,
  setDate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);