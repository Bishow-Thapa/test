const jwtMiddleware = (storeAPI) => (next) => (action) => {
  // Check if the action has a 'meta' object with a 'request' property (which is used by RTK Query)

  // console.log("(action.type: ", action.type);

  // if (action.meta?.baseQueryMeta) {
  //   const token = storeAPI.getState().auth.token; // Get the JWT token from Redux state
  //   console.log("jwtMiddleware inside");
  //   // If a token exists, add Authorization header
  //   if (token) {
  //     action.meta.baseQueryMeta.headers = {
  //       ...action.meta.baseQueryMeta.headers,
  //       Authorization: `Bearer ${token}`,
  //     };
  //   }
  // }

  return next(action); // Continue dispatching the action
};

export default jwtMiddleware;
