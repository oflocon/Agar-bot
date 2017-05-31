/**
 * Created by hydr93 on 13/03/16.
 */
var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync('./server/node_modules/Reinforcejs/Reinforce-lib/rl.js','utf8');
eval(filedata);

/* The quadtree.js file defines a class 'RL' which is all we want to export */

exports.RL = RL;