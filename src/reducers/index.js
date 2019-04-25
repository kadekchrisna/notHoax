import { combineReducers } from 'redux';

import account from './AccountReducers'
import post from './PostReduces'
import category from './CategoryReducers'

export default combineReducers({account, post, category})
