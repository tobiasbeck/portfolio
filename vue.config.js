const auth = require('basic-auth');
const path = require('path');
// var morgan = require('morgan')

function randomPassword(length) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890';
  let pass = '';
  for (let x = 0; x < length; x += 1) {
    const i = Math.floor(Math.random() * chars.length);
    pass += chars.charAt(i);
  }
  return pass;
}

const guestPassword = randomPassword(30);
const users = [
  {
    username: process.env.DEVENV_OWNER,
    password: process.env.DEVENV_PASSWORD,
  },
  {
    username: 'guest',
    password: guestPassword,

  },
];

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' && process.env.DEVENV_HOST !== undefined ? '/apps/vue/' : '/',
  devServer: {
    https: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    public: process.env.NODE_ENV === 'development' && process.env.DEVENV_HOST !== undefined ? `${process.env.DEVENV_HOST}/apps/vue` : '/',
    sockPath: process.env.NODE_ENV === 'development' && process.env.DEVENV_HOST !== undefined ? '/apps/vue/sockjs-node' : '/sockjs-node',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000,
    },
    setup(app) {
      console.log('');
      console.log('-------------------------------------------------');
      console.log('Login user:     ', process.env.DEVENV_OWNER);
      console.log('      password: ', process.env.DEVENV_PASSWORD);
      console.log('-------------------------------------------------');
      console.log('Guest login:     ');
      console.log('      user:     ', 'guest');
      console.log('      password: ', guestPassword);
      console.log('-------------------------------------------------');
      console.log('');
      // app.use(morgan('combined'))
      app.all('*', (req, res, next) => {
        if (process.env.DEVENV_OWNER && process.env.DEVENV_PASSWORD) {
          const credentials = auth(req);
          const user = (credentials) ? users.find(val => val.username === credentials.name) : undefined;
          if (
            !credentials
            || !user
            || credentials.pass !== user.password
          ) {
            res.statusCode = 401;
            res.setHeader('WWW-Authenticate',
              'Basic realm="Prototype Access"');
            res.end('Access denied');
          } else {
            next();
          }
        } else {
          next();
        }
      });
    },
  },
  chainWebpack: (config) => {
   
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};

