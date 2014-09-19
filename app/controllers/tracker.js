var trackerApp = angular.module('trackerApp', ['TrackerModel', 'ngTouch']);


// Index: http://localhost/views/tracker/index.html

trackerApp.controller('IndexCtrl', function ($scope, TrackerRestangular) {


    /************************************
    *   Define Event Methods for binding
    *************************************/
  // TRACKER open
    $scope.tracker_open = function (id, type) { //// <<<<==== added "type" param so you know which model to use

        webView = new steroids.views.WebView("/views/tracker/show.html?id="+id + '&type=tracker'); // <<<=== pass type to show page
        steroids.layers.push(webView);
    };

    // QUICKTRACKER open
    $scope.quicktracker_open = function (id, type) { //// <<<<==== added "type" param so you know which model to use

        webView = new steroids.views.WebView("/views/tracker/show.html?id=" + id + '&type=quicktracker'); // <<<=== pass type to show page
        steroids.layers.push(webView);
    };


    /*********************************
    *  Use factory to read data from .json files and bind the results to a scope array variable.
    *  This uses only ONE model factory to read from both tracker.json and quicktracker.json data files.
    **********************************/
    
    // this uses your tracker factory to retrieve tracker.json data
    TrackerRestangular.all('tracker').getList().then(function (trackers) {

        // save to scope trackers array
        $scope.trackers = trackers;
      });

    // this uses your tracker factory to retrieve quicktracker.json data
    TrackerRestangular.all('quicktracker').getList().then(function (trackers) {

        // save to scope quicktrackers array
          $scope.quicktrackers = trackers;
      });

    /******************************/

  // Native navigation
  steroids.view.navigationBar.show("Tracker index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/tracker/show.html?id=<id>

trackerApp.controller('ShowCtrl', function ($scope, $filter, TrackerRestangular) {

    var model = steroids.view.params['type']; // <<<======= get model type from query string

  // Fetch all objects from the local JSON (see app/models/tracker.js)
  TrackerRestangular.all(model).getList().then( function(trackers) { //// <<<<======= use "model" to get data, value should match name of .json file to reference
    // Then select the one based on the view's id query parameter
    $scope.tracker = $filter('filter')(trackers, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Tracker: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
