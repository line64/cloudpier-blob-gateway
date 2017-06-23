import cors from 'cors';

export default function (state) {

  const corsMiddleware = cors();

  return {
    ...state,
    corsMiddleware
  };

}
