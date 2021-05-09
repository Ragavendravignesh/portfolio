import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { projectDetailsReducer } from './reducers/projectReducer'
import { blogDetailsReducer } from './reducers/blogReducer'
import { emailSendReducer } from './reducers/emailReducer'

const reducers = combineReducers({
  projectDetails: projectDetailsReducer,
  blogDetails: blogDetailsReducer,
  emailSend: emailSendReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
