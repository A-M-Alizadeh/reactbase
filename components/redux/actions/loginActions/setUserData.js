import Types from './../Types'

export const setUserData = (userData) => {
    return {
      type: Types.SET_USER_DATA,
      payload: userData
    }
  }