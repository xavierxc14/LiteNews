/**
 * Category.js
 *
 * @description :: News categories are alocated in this model.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        // Add a reference to User
        users: {
            collection: 'user',
            via: 'categories'
        },
        news: {
            collection: 'news',
            via: 'category'
        }
    }
};
