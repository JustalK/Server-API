/**
* Module for managing the dbs for recover token
* @module dbs/recover_token
*/
'use strict'

const path = require('path')
const filename = path.basename(__filename, '.js')
const model = require('@src/models/' + filename)

module.exports = {
  /**
  * Call mongodb for adding a token to the database
  * @param {Object} recover_token The token to add to the database
  * @return {Object} The token added with the id
  **/
  insert: recover_token => {
    return model.create(recover_token)
  },
  /**
  * Call mongodb for testing if a token by the name of the user exists
  * @param {String} user_id The _id of the user to search
  * @return {boolean} True if a document exist or else False
  **/
  test_recover_token_by_user: user_id => {
    return model.exists({ user: user_id, used: false, deleted: false })
  }
}
