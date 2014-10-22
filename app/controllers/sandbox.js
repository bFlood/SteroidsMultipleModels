var sandboxApp = angular.module('sandboxApp', ['SandboxModel', 'ngTouch']);


// Index: http://localhost/views/sandbox/index.html

sandboxApp.controller('IndexCtrl', function ($scope, SandboxRestangular) {

    document.addEventListener('deviceready', function () {
        try {

            var show = new steroids.views.WebView("/views/sandbox/show.html?id=" + 1);
            show.preload();

        } catch (e) {
            alert('Error preloading ' + e.message);
        }
    });

  // Helper function for opening new webviews
  $scope.open = function(id) {
   // webView = new steroids.views.WebView("/views/sandbox/show.html?id="+1);
      // steroids.layers.push(webView);

      steroids.layers.push(show);
  };

  // Fetch all objects from the local JSON (see app/models/sandbox.js)
  SandboxRestangular.all('sandbox').getList().then( function(sandboxs) {
    $scope.sandboxs = sandboxs;
  });

  // Native navigation
  steroids.view.navigationBar.show("Sandbox index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/sandbox/show.html?id=<id>

sandboxApp.controller('ShowCtrl', function ($scope, $filter, SandboxRestangular) {

  // Fetch all objects from the local JSON (see app/models/sandbox.js)
  SandboxRestangular.all('sandbox').getList().then( function(sandboxs) {
    // Then select the one based on the view's id query parameter
    $scope.sandbox = $filter('filter')(sandboxs, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Sandbox: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
