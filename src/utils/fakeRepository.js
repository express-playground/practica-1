const fs = require('fs')

const saveUsersToFakeRepository = usersFakeRepository => {
  fs.writeFile('./src/users.json', JSON.stringify(usersFakeRepository), err => {
    if (err) {
      console.error(err)
    } else {
      console.log('done')
    }
  })
}

module.exports = {
  saveUsersToFakeRepository,
}
