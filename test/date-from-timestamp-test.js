'use strict'

const tap = require('tap')
const dateFromTimestamp = require('../index')

tap.equal('05.07.2016', dateFromTimestamp('1467673344772'), 'It returns expected result')
