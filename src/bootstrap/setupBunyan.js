import bunyan from 'bunyan';

export default function (state) {

  const {
    config: {
      LOG_LEVEL,
      LOG_STREAM
    }
  } = state;

  const bunyanLog = bunyan.createLogger({
  	name: 'cloudpier-blob-gateway',
  	level: LOG_LEVEL|| 'info',
  	stream: LOG_STREAM,
  	serializers : bunyan.stdSerializers
  });

  return {
    ...state,
    bunyanLog
  };

}
