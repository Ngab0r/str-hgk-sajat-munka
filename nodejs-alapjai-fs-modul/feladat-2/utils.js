const { createReadStream, createWriteStream, unlink } = require('fs')
const { createGzip } = require('zlib')

const readableStream = (fileName) => createReadStream(fileName, {
    encoding: 'utf-8',
    hughWaterMark: 11
})

const writableStream = (fileName) => createWriteStream(`${fileName}.bak`)
const createCompressedFile = (fileName) => createWriteStream(`${fileName}.gz`)

const deleteFile = (fileName) => {
    unlink(fileName, (err) => { if (err) throw err })
}

const compressFile = (fileName) => {
    readableStream(fileName)
    createCompressedFile(fileName)
    readableStream(fileName).pipe(writableStream).end(() => {
        readableStream(`${fileName}.bak`).pipe(createGzip()).pipe(createCompressedFile)
            .end(() => {
                deleteFile(fileName)
                deleteFile(`${fileName}.bak`)
            })
    })
}

module.exports = Object.freeze({ compressFile })
