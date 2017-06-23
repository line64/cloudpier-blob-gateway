import cuid from 'cuid';

export default function (bearer, body, file) {

  let {
    tenant
  } = bearer;

  let {
    handle
  } = body;

  tenant = tenant || 'notenant';
  handle = handle || cuid();

  return `${tenant}/${handle}`;

}
