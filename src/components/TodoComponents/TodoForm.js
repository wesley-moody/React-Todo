import React from 'react';
import { withFormik, Form, Field } from 'formik';

const todoForm = (props, { values, resetForm }) => {
  console.log('props', props);
  return (
    <div className='form'>
      <Form>
        <Field 
          name='taskInput'
          placeholder='Add Task'
          type='text'
          className='form-input-task'
          value={values.taskInput}
        />
        <button 
        type='submit' 
        onClick={() => {}}
        className='form-submit-btn'>
          Add Task
        </button>
      </Form>
    </div>
  );
};

const FormikTodoForm = withFormik({
  mapPropsToValues({ onSubmit }) {
    return {
      submit: onSubmit,
      taskInput: ''
    };
  },
  handleSubmit({ taskInput, submit }) {
    if (taskInput) {
      submit({ task: taskInput, id: Date.now(), completed: false });
    }
  }
})(todoForm);

export default FormikTodoForm