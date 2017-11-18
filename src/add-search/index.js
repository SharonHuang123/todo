import React from 'react';
import AddSearchWrapper from './views';
import Provider from './Provider.js';
import store from './Store.js';

const AddSearch = () => {
  return (
    <Provider store={store}>
      <AddSearchWrapper />
    </Provider>
  )
}

export default AddSearch;