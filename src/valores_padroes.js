// RUIM
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.';
  console.log(breweryName)
}
createMicrobrewery()

// BOM
function createSomething(name = 'something') {
  console.log(name)
}
createSomething('dan')

