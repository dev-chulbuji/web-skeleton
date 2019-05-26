const requireModule = require.context('.', true, /\.ts$/)
const modules = {}

console.log(requireModule)

requireModule.keys().forEach(fileName => {
  console.log(fileName)
  if (fileName === './index.ts') return

  // Replace ./ and .ts
  const path = fileName.replace(/(\.\/|\.ts)/g, '')
  const [moduleName, imported] = path.split('/')

  if (!modules[moduleName]) {
    modules[moduleName] = {
      namespaced: true
    }
  }

  modules[moduleName][imported] = requireModule(fileName).default
})

console.log(modules)

export default modules
