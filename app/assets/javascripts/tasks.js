document.addEventListener('turbolinks:load', function() {
  document.querySelectorALL('td').forEach(function(td) {
    td.addEventListener('mouseover', function(e) {
      e.currentTarget.style.backgroundColor = '#eff';
    });

    td.addEventListener('mouseoout', function(e) {
      e.currentTarget.style.backgroundColor = '';
    });
  });
});
