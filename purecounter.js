document.addEventListener('DOMContentLoaded', function() {
    var counters = document.querySelectorAll('.purecounter');
    counters.forEach(function(counter) {
      new PureCounter(counter, {
        duration: counter.getAttribute('data-purecounter-duration') * 1000,
        start: counter.getAttribute('data-purecounter-start'),
        end: counter.getAttribute('data-purecounter-end')
      }).start();
    });
  });