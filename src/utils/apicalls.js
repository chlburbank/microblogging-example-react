import API from './api';

export {
    login
};

function login(username, password) {
    return API.post('/users/signin', {
        username,
        password
    }).then(result => result.data)
    .catch(function(error) {

    });
}