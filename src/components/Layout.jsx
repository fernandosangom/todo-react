import React from 'react';
import Form from './Form'
import TaskList from './TaskList'
import Container from '@material-ui/core/Container'

const Layout = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <div className='App'>
        <Form />
        <TaskList/>
      </div>
    </Container>
  )
};

export default Layout;