'use strict'

const fs = require('fs')
const path = require('path')
const test = require('ava')
const deepKeys = require('deep-keys')

const languageFilesPath = path.join(__dirname, '../back-end/i18n/languages')
const files = fs.readdirSync(languageFilesPath).filter(name => name.match(/[a-z]{2}-[a-z]{2}\.js/))

test('Check language files', t => {
  const langs = []

  files.forEach((filename, index) => {
    const lang = require(path.join(languageFilesPath, filename))
    langs.push(lang)

    if (index > 0) {
      t.deepEqual(deepKeys(langs[0]), deepKeys(langs[index]))
    }
  })
})
