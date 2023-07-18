const redux = require("redux");
const { createStore, combineReducers } = redux;

const BUY_CAKE = "BUY_CAKE"; //Action
const BUY_ICECREAM = "BUY_ICECREAM"; //Action

function buyCake() {
  //Action creator
  return {
    type: BUY_CAKE,
    info: "Buying a cake",
  };
}

function buyIcecream() {
  //Action creator
  return {
    type: BUY_ICECREAM,
    info: "Buying an icecream",
  };
}

// const initialState = {
//   numOfCakes: 10,
// };

const initialCakeState = {
  numOfCakes: 10,
};
const initialIcecreamState = {
  numOfIcecreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};
const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreams: state.numOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unsubscribe();
