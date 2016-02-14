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
        // TODO: poner la foto como URL o que suba (?)
        //profilePhoto: {
        //
        //}
    }
};

