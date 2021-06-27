const { access, mkdir, writeFile } = require('fs').promises

const createFileOrFolder = (path = '', fileName) => {
    access(path)
        .catch(() => mkdir(path).catch((err) => console.log(err)))
        .then(() => { if (fileName) writeFile(path.concat('/').concat(fileName), '') })
        .then(console.log)
        .catch((err) => console.log('\x1b[31m', err))
}

module.exports = createFileOrFolder
