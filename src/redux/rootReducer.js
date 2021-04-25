import { combineReducers } from "redux";

// DI REDUCER
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

// 하나의 객체로 키값 구별 컴바인

const rootReducer = combineReducers({
  views: viewsReducer,
  subscribers: subscribersReducer,
  comments: commentsReducer,
});

export default rootReducer;
