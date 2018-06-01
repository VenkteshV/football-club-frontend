import * as actions from '../constants/actions';

const config = (state = {}, action) => {
  switch (action.type) {
  case actions.CONFIG_LOADED:
    return Object.assign({}, state, {
      config: action.config,
      searchText: action.searchText || '',
      searchResult: action.searchResult || [],
    });
  default:
    return state;
  }
};

export default config;
