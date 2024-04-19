var svgs = document.querySelectorAll('svg[data-title]');
var tooltip = document.getElementById('tooltip');

svgs.forEach(function(svg) {
    svg.addEventListener('mouseover', function(e) {
        tooltip.style.display = 'block';
        tooltip.style.left = e.pageX + 'px';
        tooltip.style.top = e.pageY + 'px';
        tooltip.textContent = svg.getAttribute('data-title');
    });

    svg.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
});