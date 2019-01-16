import Types from './../Types'

export const setDefaultSpec = (defaultSpeciality) => {
    return {
      type: Types.SET_Def_SPEC,
      payload: defaultSpeciality
    }
  }

  // export const setDefaultSpec = defaultSpeciality => ({
  //     type: Types.SET_Def_SPEC,
  //     payload: defaultSpeciality
  // })