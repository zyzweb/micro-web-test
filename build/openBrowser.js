const exec = require("child_process").execSync;
const spawn = require("child_process").spawn

const cmdData = {
  wind32: 'start',
  linux: 'xdg-open',
  darwin: 'open'
}

exec(`${cmdData[process.platform]} http://localhost:8080`);
