//TODO: Import Reducers by Entity
import appReducer from './reducers/app.reducer';
import authReducer from './reducers/auth.reducer';
import prodsReducer from './reducers/prods.reducer';
import receReducer from './reducers/rece.reducer'
import userReducer from './reducers/user.reducer';

function mainReducer (state={}, action={}) {
  const {app, auth, prods,rece,user} = state;
  return {
    app: appReducer (app, action),
    auth: authReducer(auth, action),
    prods: prodsReducer (prods, action),
    rece: receReducer(rece,action),
    user: userReducer(user,action)
  }
}

export default mainReducer;
