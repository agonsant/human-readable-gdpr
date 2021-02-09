module.exports = function(data) {
  return `
  <style>
    .license-container{ text-align: center; max-width: 320px; position: absolute; top: 5px; right: 5px; }
    .license-text { font-size: 12px;  margin: unset;}
    .license-link { color:white;}
  </style>
<header>
  <h1>&lt;brief-me-gdpr></h1>
  <h2>A Web Component for a human readable GDPR compliance.</h2>
  <div class="license-container">
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      <img alt="Creative Commons License CC By 4.0" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
    </a>
    <p class="license-text">Except where otherwise noted, content on this site is licensed under a <a class="license-link" rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International license</a>.</p>
  </div>
</header>`;
};
