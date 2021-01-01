const path = require('path');

const base = path.resolve(__dirname,'..');

//  entry point when requiring related modules
const entry_point = 'entry';

// base directory
const api = `${base}/api`;
const public = `${base}/public`;

// directory names
const dir = {
    config:'config',
    controller:'controllers',
    route:'routes',
    view:'views',
    middleware:'middleware',
    validation:'validation/methods',
    helper:'helper'
}

// exports
module.exports = {
    config:`${base}/${dir.config}/${entry_point}`,
    controllers:`${api}/${dir.controller}/${entry_point}`,
    routes:`${api}/${dir.route}/${entry_point}`,
    views:`${public}/${dir.view}`,
    middleware:`${api}/${dir.middleware}/${entry_point}`,
    validation:`${api}/${dir.middleware}/${dir.validation}/${entry_point}`,
    helper:`${api}/${dir.helper}/${entry_point}`
};
