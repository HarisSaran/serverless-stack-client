const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "	haris-notes-app-upload",
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://kf6opb6831.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_bAmwtgYqN",
      APP_CLIENT_ID: "61tk5i5rvvr6a98h4dnqmdugrc",
      IDENTITY_POOL_ID: "ed1c32a6-93c5-4d47-9ee5-be38db7baf36",
    },
  };
  
  export default config;