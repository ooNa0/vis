const path = require('path');

module.exports = {
  //chainWebpack: config => {
    //config.resolve.alias.set('~', path.resolve(__dirname, './'));
        //config.resolve.alias.set('os', false);//require.resolve("stream-browserify")
        //config.resolve.alias.set('stream', false);//require.resolve("stream-browserify")
        //config.resolve.alias.set('child_process', false);//require.resolve("stream-browserify")
        //config.resolve.alias.set('fs', false);//require.resolve("stream-browserify")
        //config.resolve.alias.set('path', false);//require.resolve("stream-browserify")
  //},
  parallel: require('os').cpus().length > 1,
  transpileDependencies: [
    'vuetify'
  ]
}