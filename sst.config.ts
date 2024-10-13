/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "aws-bun",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      aws: {
        region:
          input.stage === "production"
            ? "eu-central-1"
            : input.stage === "staging"
            ? "eu-central-1"
            : "us-east-1",
        role:
          input.stage === "production"
            ? "arn:aws:iam::992382456405:role/AdministratorAccess-eu-central-1"
            : input.stage === "staging"
            ? "arn:aws:iam::841199603305:role/AdministratorAccess-eu-central-1"
            : "arn:aws:iam::730335356413:role/AdministratorAccess-us-east-1",
      },
    };
  },
  async run() {
    const vpc = new sst.aws.Vpc("MyVpc", {});
  },
});
