console.log("working");
const BUY_CAKE = "BUY_CAKE"; //Action

function buyCake() {
  //Action creator
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
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
