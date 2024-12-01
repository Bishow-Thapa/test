const jwtMiddleware = (storeAPI) => (next) => (action) => {
  // Check if the action has a 'meta' object with a 'request' property (which is used by RTK Query)

  // if (action.meta?.baseQueryMeta) {
  //   const token = storeAPI.getState().auth.token; // Get the JWT token from Redux state
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
