/**
 * Created by yangyang on 2018/1/8.
 */
var LY = require('lvyii-engine')
const cloudTest = require('./cloudFuncs/cloudtest')

LY.Cloud.define('testHelloCloud', cloudTest.helloCloud)