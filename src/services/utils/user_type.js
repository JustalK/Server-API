'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const dbs = require('@src/dbs/' + filename)
const utils_config = require('@src/services/utils/config')

/**
* Manage the utils function for the config
**/
module.exports = {
  /**
  * Return the user_type by the name
  * @params {String} name The name of the user type searched
  * @return {user_type} The user type found
  **/
  get_user_type_by_name: name => {
    if (!name) {
      throw new Error('The name cannot be null.')
    }
    const uppercase_name = name.toUpperCase()
    return dbs.get_one({ name: uppercase_name })
  },
  /**
  * Get the default user type
  **/
  get_default_user_type: async () => {
    const config = await utils_config.get_config()
    const default_user_type = config.default_user_type
    return module.exports.get_user_type_by_name(default_user_type)
  }
}
