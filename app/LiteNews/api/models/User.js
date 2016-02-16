/**
 * User.js
 *
 * @description :: User info to use the app.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        username: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        email: {
            type: 'string',
            email: true,
            unique: true,
            required: true
        },
        name: {
            type: 'string',
            required: true
        },
        lastname: {
            type: 'string'
        },
        country: {
            required: true
        },
        categories: {
            collection: 'category',
            via: 'users',
            dominant: true,
            required: true
        },
        birthDate: {
            type: 'date',
            required: true
        },
        gender: {
            type: 'string',
            enum: ['male', 'female']
        },
        featuredNews: {
            collection: 'news',
            via: 'userFeatured',
            dominant: true
        },
        profilePhoto: {
            type: 'string',
            defaultsTo: 'http://socooking.com/wp-content/uploads/2015/12/asian-quinoa-salad-144998514784gkn-250x250.png'
        }
    }
};

