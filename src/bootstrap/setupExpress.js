import express from 'express';
import { uploadPostHandler } from '../runtime';

export default function(state) {

  const {
    multerMiddleware,
    jwtMiddleware
  } = state;

  const expressServer = new express();

  expressServer.post('/upload',
    jwtMiddleware,
    multerMiddleware.single('blob'),
    uploadPostHandler);

  return {
    ...state,
    expressServer
  };

}
