var frameModule = require('ui/frame');
var observableModule = require('data/observable');

var user = new observableModule.fromObject({
    email: 'user@domain.com',
    password: 'password'
})

var page;
var email;

exports.loaded = function(args) {
    page = args.object;
}

exports.signIn = function() {
    email = page.getViewById("email");
    console.log(email.text);
}

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate('views/register/register');
}