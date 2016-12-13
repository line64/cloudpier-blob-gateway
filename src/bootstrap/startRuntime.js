
export default function(state) {

  const {
    config: {
      PORT
    },
    bunyanLog,
    expressServer
  } = state;

  expressServer.listen(PORT);

  bunyanLog.info('express server listening', { PORT });

  return {
    ...state
  };

}
