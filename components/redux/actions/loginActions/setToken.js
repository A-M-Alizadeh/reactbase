import Types from './../Types'

export const setToken = (jwtToken) => {
    return {
      type: Types.SET_TOKEN,
      payload: jwtToken
    }
  }