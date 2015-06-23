var Hapi = require('hapi');
var datas = require("./mockData.js");

var server = new Hapi.Server();
server.connection({ port: 8888 });

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            // reply("hello world");
            return reply.file("./index.html");
        }
    },
    {
        method: 'GET',
        path: '/itemDetail/{itemId}',
        handler: function (request, reply) {
            // reply("hello world");
            return reply.file("./index.html");
        }
    },
    {
        method: 'GET',
        path: '/build/{file}',
        handler: function(request, reply) {
            var fileName = request.params.file;
            return reply.file("./build/" + fileName);
        }
    },
    {
        method: 'POST',
        path: '/latestItems',
        handler: function (request, reply) {
            var items = datas.latestItems;
            reply({
                datas: items
            }).type("application/json").code(200);
        }
    },
    {
        method: 'POST',
        path: '/images',
        handler: function (request, reply) {
            var items = datas.images;
            reply({
                datas: items
            }).type("application/json").code(200);
        }
    }
]);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});