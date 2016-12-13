import cuid from 'cuid';

export default function (bearer, body, file) {

  let {
    tenant
  } = bearer;

  let {
    handle
  } = body;

  tenant = tenant || 'unknown';
  handle = handle || cuid();

  return `${tenant}/${handle}`;

}
