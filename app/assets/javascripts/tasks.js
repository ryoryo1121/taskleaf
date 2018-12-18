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

document.addEventListener('turbolinks:load', function() {
  document.querySelectorALL('.delete').forEach(function(a) {
    td.addEventListener('ajax:success', function() {
      var td = a.parentNode;
      var tr = td.parentNode;
      tr.style.desplay = 'none';
    });
  });
});
