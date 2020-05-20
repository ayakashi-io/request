var semver = require("semver");
process.exit(semver.lt(process.version, "10.16.0"));