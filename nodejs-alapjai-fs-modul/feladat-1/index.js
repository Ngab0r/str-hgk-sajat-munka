const createFileOrFolder = require('./utils')

createFileOrFolder('./controller', 'site.controller.js')
createFileOrFolder('./routers', 'site.router.js')
createFileOrFolder('./views', 'index.html')
createFileOrFolder('./', 'app.js')
