/**
 * New.js
 *
 * @description :: News goes here, title, author, content, all related to news in the app.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true
        },
        content: {
            type: 'string',
            required: true
        },
        author: {
            type: 'string',
            required: true
        },
        date: {
            type: 'datetime',
            required: true,
            defaultsTo: new Date()
        },
        category: {
            model: 'category'
        },
        userFeatured: {
            collection: 'user',
            via: 'featuredNews'
        }
    }
};

