
export default function(req, res, next) {

  res.json({
    key: req.file.key,
    publicUrl: req.file.location,
    success: true
  });

}
