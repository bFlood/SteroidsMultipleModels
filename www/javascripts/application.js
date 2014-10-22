

document.addEventListener('deviceready', function () {
    try {

        var test = steroids.views.WebView('/test.html');
        test.preload();
    } catch (e) {
        alert('Preload failed - ' + e.message);
    }// 
});

function pushTest() {

    steroids.layers.push(test);
}



// Display the native navigation bar with the title "Hello World!"
steroids.view.navigationBar.show("Hello World!");

// Set the WebView background color to white (effective on iOS only)
steroids.view.setBackgroundColor("#FFFFFF");
