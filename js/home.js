var server = http.createServer(function (request, response) {
    router.css(request, response);
    router.home(request, response);
    router.user(request, response);
  });
  server.listen(3000);