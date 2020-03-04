const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    autoplay: false,
    lrctype: 3,
    audio: [{
        name: 'No Promises',
        artist: 'Cheat Codes,Demi Lovato',
        url: 'https://cdn.jsdelivr.net/gh/BeanPaste233/Pictures@1.4/No Promises/No Promises.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/BeanPaste233/Pictures@1.4/No Promises/cover.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/BeanPaste233/Pictures@1.4/No Promises/lrc.lrc'
    }],
});