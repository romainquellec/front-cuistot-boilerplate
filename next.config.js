require('dotenv').config();
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://assets.cuistotducoin.com' : '',
    target: "serverless"
};
