const ll = function (message?: any, ...optionalParams: any[]) {
  if (env.isLocal || env.isDevelopment) {
    console.log(`[${env.mode}]`, message, ...optionalParams);
  }
};

export default ll;
