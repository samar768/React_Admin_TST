import { combineReducers } from 'redux';
import { MenuOpenReducer } from './MenuOpenReducer';
import { quoteReducer } from '../insuranceQuote/quoteReducer';

// Define rootReducer correctly
const rootReducer = combineReducers({
  menuState: MenuOpenReducer,
  insuranceQuote: quoteReducer,
  ClientDetails: quoteReducer,
});

// Export the rootReducer as the default export
export default rootReducer;
