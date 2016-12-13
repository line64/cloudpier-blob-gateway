import setupBunyan from './setupBunyan';
import setupS3 from './setupS3';
import setupMulter from './setupMulter';
import setupJWT from './setupJWT';
import setupExpress from './setupExpress';
import startRuntime from './startRuntime';

export default function (config) {

  let state = { config };

  state = setupBunyan(state);
  state = setupS3(state);
  state = setupMulter(state);
  state = setupJWT(state);
  state = setupExpress(state);
  state = startRuntime(state);

}
