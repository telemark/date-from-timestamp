'use strict'

const tap = require('tap')
const dateFromTimestamp = require('../index')

tap.equal('05.07.2016', dateFromTimestamp('1467712800000'), 'It returns expected result')
