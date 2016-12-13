import jwt from 'express-jwt';

export default function (state) {

  let {
    config: {
      JWT_SECRET
    }
  } = state;

  const jwtMiddleware = jwt({
    secret: JWT_SECRET
  });

  return {
    ...state,
    jwtMiddleware
  };

}
