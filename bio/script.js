document.getElementById('light-theme').addEventListener('click', function() {
    document.body.classList.remove('dark');
    document.querySelector('.bio-container').classList.remove('dark');
    document.querySelectorAll('.link').forEach(link => link.classList.remove('dark'));
});

document.getElementById('dark-theme').addEventListener('click', function() {
    document.body.classList.add('dark');
    document.querySelector('.bio-container').classList.add('dark');
    document.querySelectorAll('.link').forEach(link => link.classList.add('dark'));
});