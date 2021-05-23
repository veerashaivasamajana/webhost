function addCss(fileName) {
   var link = $("<link />",{
     rel: "stylesheet",
     type: "text/css",
     href: fileName
   })
   $('head').append(link);
}

addCss("https://veerashaivasamajana.github.io/webhost/css/main.css");
