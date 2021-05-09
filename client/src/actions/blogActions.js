import axios from 'axios'

import {
  BLOG_LIST_REQUEST,
  BLOG_LIST_SUCCESS,
  BLOG_LIST_FAIL,
} from '../constants/blogConstants'

export const getBlogDetails = () => async (dispatch) => {
    dispatch({ type: BLOG_LIST_REQUEST })

    try {
        const {data} = await axios.get('/api/blogs')

        dispatch({ type: BLOG_LIST_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.response

        dispatch({
            type: BLOG_LIST_FAIL,
            payload: message
        })
    }
}
