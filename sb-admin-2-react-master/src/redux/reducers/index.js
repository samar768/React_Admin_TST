import { combineReducers } from 'redux';
import { MenuOpenReducer } from './MenuOpenReducer';
import { quoteReducer } from '../insuranceQuote/quoteReducer';
import { userProfilReducer } from '../insuranceQuote/userProfilReducer';


// Define rootReducer correctly
const rootReducer = combineReducers({
  menuState: MenuOpenReducer,
  insuranceQuote: quoteReducer,
  profileDetails: userProfilReducer,
});

// Export the rootReducer as the default export
export default rootReducer;
