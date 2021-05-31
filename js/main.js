
fontawesomecss = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
`
bootstrapcss = `

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

`

customcss = `
<link rel="stylesheet" href="https://veerashaivasamajana.github.io/webhost/css/main.css">
`

nav = `
<nav class="navbar navbar-dark bg-primary navbar-expand-lg sticky-top">
  <a class="navbar-brand" href="./"><img src="https://veerashaivasamajana.github.io/webhost/images/logo.png" width="40" height="40" class="d-inline-block align-top" alt=""></a>
  <a class="nav-link" href="https://www.facebook.com/vsna.allchapters"> <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i> </a>
  <a class="nav-link" href="https://www.youtube.com/channel/UC5ivDhhj0pVBYBPoZhTfy4A"> <i class="fa fa-youtube-play fa-2x" aria-hidden="true"></i> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="./"> Home </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Organization
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="elected-bod">Elected BOD</a>
          <a class="dropdown-item" href="resources">Resources</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
`


$('head').append(fontawesomecss);
$('head').append(bootstrapcss);
$('head').append(customcss);
window.onload = function() {
  $('body').prepend(nav)
}
