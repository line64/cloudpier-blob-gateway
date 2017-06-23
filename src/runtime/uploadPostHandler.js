
export default function(state, req, res, next) {

  let { bunyanLog } = state;

  bunyanLog.info('starting blob upload request', { body: req.body, bearer: req.user, blob: req.file });

  let receipt = {
    key: req.file.key,
    publicUrl: req.file.location,
    mimeType: req.file.mimetype,
    success: true
  };

  bunyanLog.info('finished blob upload request', receipt);

  res.json(receipt);

  next();

}
