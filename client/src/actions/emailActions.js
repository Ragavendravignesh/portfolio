import axios from 'axios'

import {
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAIL,
} from '../constants/emailConstants'

export const sendEmail = (options) => async (dispatch) => {
  dispatch({ type: SEND_EMAIL_REQUEST })

  try {
    await axios.post('/api/mail', options)

    dispatch({ type: SEND_EMAIL_SUCCESS })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.response

    dispatch({
      type: SEND_EMAIL_FAIL,
      payload: message,
    })
  }
}
