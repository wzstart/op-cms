const chokidar = require('chokidar')
const path = require('path')
const spawn = require('cross-spawn')
let process = null

function start () {
  process && process.kill()
  process = spawn('vue-cli-service', ['serve', '--env=local'], {
    cwd: path.join(__dirname, '../'),
    stdio: 'inherit',
    detached: false
  })
  process.stdout && process.stdout.on('data', (data) => {
    console.log(Buffer.from(data).toString())
  })
  process.on('error', (err) => {
    console.log(err)
  })
}
// watch files
chokidar.watch('.', {
  cwd: path.join(__dirname, '../src')
})
  .on('add', () => {
    start()
  })
  .on('unlink', () => {
    start()
  })
