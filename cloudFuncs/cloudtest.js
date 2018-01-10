/**
 * Created by yangyang on 2018/1/8.
 */

function helloCloud(request) {
  var user = request.currentUser
  console.log(user)
  return 'hello lvyii engine'
}

const cloudTest = {
  helloCloud: helloCloud,
}

module.exports = cloudTest