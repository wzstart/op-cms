const glob = require('glob')
const path = require('path')
const argv = require('yargs').argv
const webpack = require('webpack')
const name = process.env.npm_package_name || require('./package.json').name
let pubPath = '/'
if (argv.publicPath) {
  pubPath = path.join(argv.publicPath, name).split(path.sep).join('/')
}

const globList = glob.sync(path.resolve(__dirname, './src/views/**/*.vue'), { nodir: true })
const routerList = globList.map(val => {
  return path.normalize(val).replace(path.normalize(path.resolve(__dirname, './src/views/')), '').replace('.vue', '').split(path.sep).join('/')
})
module.exports = {
  baseUrl: argv.fullPath || pubPath,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'BUILD_ENV': JSON.stringify(argv.env || process.env.BUILD_ENV || 'prod'),
        'ROUTER_LIST': JSON.stringify(routerList)
      })
    ]
  }
}
