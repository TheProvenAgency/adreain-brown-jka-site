document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.navtoggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      links.style.display = links.classList.contains('open') ? 'flex' : '';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.right = '24px';
      links.style.background = '#0f1a13';
      links.style.border = '1px solid #213329';
      links.style.borderRadius = '12px';
      links.style.padding = '16px 20px';
    });
  }
  var form = document.querySelector('form[data-apply]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = 'Application Received — We\'ll Text You Shortly'; btn.disabled = true; }
    });
  }
});
