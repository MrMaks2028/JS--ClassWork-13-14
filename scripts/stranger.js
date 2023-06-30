const colors = [
    'red',
    '#00FF00',
    'rgb(0, 0, 255)',
    'aquamarine',
    'deeppink'
];
var currentColor = 0;

main.addEventListener('click', e => {
    if(e.target.id == 'btn-reset')
        return;

    let halfWidth = stranger.offsetWidth / 2;
    let halfHeight = stranger.offsetHeight / 2;
    //console.log(`Ширина странника: ${halfWidth}\nВысота странника: ${halfHeight}`)
    stranger.style.left = e.pageX - halfWidth + 'px';
    stranger.style.top = e.pageY - halfHeight + 'px';

    currentColor++;
    if(currentColor >= colors.length)
        currentColor = 0;

    stranger.style['background-color'] = colors[currentColor];
})

main.addEventListener('mousemove', e => {
    if(e.target.closest('#btn-reset'))
        stalker.style.transform = 'scale(3, 3)';
    else
        stalker.style.transform = 'none';

    let halfWidth = stalker.offsetWidth / 2;
    let halfHeight = stalker.offsetHeight / 2;
    stalker.style.left = e.pageX - halfWidth + 'px';
    stalker.style.top = e.pageY - halfHeight + 'px';
});

document.getElementById('btn-reset').addEventListener('click', () => {
    stranger.style.left = '50px';
    stranger.style.top = '50px';

    currentColor = 0;

    stranger.style.backgroundColor = colors[0];
})