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
        via: {
            type: 'string',
            required: true
        },
        author: {
            type: 'string',
            required: true
        },
        authorsPhoto: {
            type: 'string',
            defaultsTo: 'http://socooking.com/wp-content/uploads/2015/12/asian-quinoa-salad-144998514784gkn-250x250.png'
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

