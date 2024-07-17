window.ddjskey = 'DATADOME_CLIENT_SIDE_KEY';

var script = document.createElement('script');

// URL used to download the JS Tag (Change default for 1rst party tag).
script.src = 'https://js.datadome.co/tags.js';
script.async = true;
script.type = 'text/javascript';

document.head.prepend(script);
