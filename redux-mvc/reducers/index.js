import React from 'react'

import {ADD,EDIT,DELETE} from '../actions/index'

export default (state = [] ,action) => {
  console.log(action)
  switch(action.type){
      case ADD :
        return [action.item,...state];
       default:
        return state;
  }  
};