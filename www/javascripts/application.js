

var test = null;
var encodedView = '';

document.addEventListener('deviceready', function () {
    try {

        test = new steroids.views.WebView({ location: '/test.html', id: 'test' });
        test.preload({}, {
            onSuccess: function () {
                encodedView = JSON.stringify(test);
            }
        });
    } catch (e) {
        alert('Preload failed - ' + e.message);
    }// 
});

function pushTest() {

    alert('loading view ' + encodedView);
    var decodedView = JSON.parse(encodedView);
    steroids.layers.push({ view: decodedView, keepLoading: false });
}



// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("Hello World!");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FFFFFF");
