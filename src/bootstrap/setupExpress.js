import express from 'express';
import { uploadPostHandler } from '../runtime';

export default function(state) {

  const {
    multerMiddleware,
    jwtMiddleware,
    corsMiddleware,
  } = state;

  const expressServer = new express();

  expressServer.options('*', corsMiddleware);

  expressServer.post('/upload',
    corsMiddleware,
    jwtMiddleware,
    multerMiddleware.single('blob'),
    (req, res, next) => uploadPostHandler(state, req, res, next));

  return {
    ...state,
    expressServer
  };

}
