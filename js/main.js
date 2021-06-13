
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
        <a class="btn btn-danger" href="live">Live</a>
      </li>
      <li class="nav-item">
        <a class="btn btn-light" href="convention">Convention</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./"> Home </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Organization
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="officers">Officers</a>
          <a class="dropdown-item" href="elected-bod">Elected BOD</a>
          <a class="dropdown-item" href="appointed-bod">Appointed BOD</a>
          <a class="dropdown-item" href="past-presidents">Past Presidents</a>
          <a class="dropdown-item" href="virc">VIRC</a>
          <a class="dropdown-item" href="bor">Board of Regents</a>
          <a class="dropdown-item" href="resources">Resources</a>
          <a class="dropdown-item" href="next-gen">Next Gen</a>
          <a class="dropdown-item" href="events">Events</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Chapters
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="alabama">Alabama</a>
          <a class="dropdown-item" href="california-north">California North</a>
          <a class="dropdown-item" href="california-central">California Central</a>
          <a class="dropdown-item" href="california-south">California South</a>
          <a class="dropdown-item" href="connecticut">Connecticut</a>
          <a class="dropdown-item" href="chicago">Chicago</a>
          <a class="dropdown-item" href="dallas">Dallas</a>
          <a class="dropdown-item" href="dc-va">DC & Virginia</a>
          <a class="dropdown-item" href="detroit">Detroit</a>
          <a class="dropdown-item" href="florida">Florida</a>
          <a class="dropdown-item" href="georgia">Georgia</a>
          <a class="dropdown-item" href="houston">Houston</a>
          <a class="dropdown-item" href="kc">Kansas City</a>
          <a class="dropdown-item" href="md">Maryland</a>
          <a class="dropdown-item" href="ne">New England</a>
          <a class="dropdown-item" href="ny-nj">New York &  New Jersey</a>
          <a class="dropdown-item" href="nc">North Carolina</a>
          <a class="dropdown-item" href="ohio">Ohio</a>
          <a class="dropdown-item" href="penn-east">Pennsylvania East</a>
          <a class="dropdown-item" href="pittsburgh">Pittsburgh</a>
          <a class="dropdown-item" href="tennessee">Tenneessee</a>
          <a class="dropdown-item" href="toronto">Toronto</a>
          <a class="dropdown-item" href="west-virginia">West Virginia</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Learn
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Sharanas</a>
          <a class="dropdown-item" href="publications">Publications</a>
          <a class="dropdown-item" href="newsletters">Newsletters</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact"> Contact </a>
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
