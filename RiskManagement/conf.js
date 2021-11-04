exports.config = {
  profile: "integration",
  baseUrl: "https://2f05827ftrial-dev-riskmanagement-approuter.cfapps.eu10.hana.ondemand.com/app/risks/webapp/index.html#Shell-home",
  specs: ["*.spec.js"],
  auth: {
    // provide credentials as params when running the test:
    // uiveri5 --params.user=<user> --params.pass=<pass>
    "sapcloud-form": {
      user: "${params.user}",
      pass: "${params.pass}"
    }
  }
};
