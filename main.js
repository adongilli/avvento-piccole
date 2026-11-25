document.addEventListener("DOMContentLoaded", () => {
    const template = document.getElementById('card-template');
    const container = document.getElementById('container');
    function getYouTubeId(url) {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
    return match ? match[1] : null;
}
     const days = [
        {
            day: 1,
            type: "story",
            image: "01-storia.png",
            text: "Il nostro viaggio di attesa del Natale inizia con...la storia di un Balletto Magico",
            link: "",
            download: "01-storia.pdf",
            audio: ""
        },
        {
            day: 2,
            type: "video",
            image: "",
            text: "Questo video ti farà vedere come inizia questa MAGICA storia…",
            link: "https://www.youtube.com/watch?v=lfCSlE2tQco&list=RDlfCSlE2tQco&start_radio=1",
            download: "",
            audio: ""
        },
        {
            day: 3,
            type: "coloring",
            image: "03-colora.png",
            text: "Ecco il nostro amico Schiaccianoci",
            link: "",
            download: "03-colora.pdf",
            audio: ""
        },
        {
            day: 4,
            type: "music",
            image: "",
            text: "Per te una bellissima musica …marciamo tutti insieme per scacciare il Re dei Topi",
            link: "",
            download: "",
            audio: "04-Tchaikovsky- The Nutcracker, Op. 71 - Marche.mp3"
        },
        {
            day: 5,
            type: "puzzle",
            image: "",
            text: "Aguzza la vista…giochiamo!",
            link: "",
            download: "",
            audio: ""
        },
        {
            day: 6,
            type: "recipe",
            image: "06-ricetta.png",
            text: "Per una dolce attesa…ci vuole una dolce ricetta!",
            link: "",
            download: "06-ricetta-stampini.pdf",
            audio: ""
        },
        {
            day: 7,
            type: "coloring",
            image: "07-colorare.png",
            text: "…Si colora e si decora!",
            link: "",
            download: "07-colorare.pdf",
            audio: ""
        },
        {
            day: 8,
            type: "memory",
            image: "",
            text: "Gioca con la mamma e il papà….chi avrà più memoria vincerà!",
            link: "",
            download: "08-memory.pdf",
            audio: ""
        },
        {
            day: 9,
            type: "video",
            image: "",
            text: "Mettetevi comodi…arriva la neve!",
            link: "https://www.youtube.com/watch?v=fLKhWl3tEkk&list=RDfLKhWl3tEkk&start_radio=1",
            download: "",
            audio: ""
        },
        {
            day: 10,
            type: "craft",
            image: "10-bacchetta.png",
            text: "…Pronti per fare magie?!",
            link: "",
            download: "10-bacchetta.pdf",
            audio: ""
        },
        {
            day: 11,
            type: "music",
            image: "",
            text: "C’è una musica per voi….la riconoscete?",
            link: "",
            download: "",
            audio: "17- Tchaikovsky- The Nutcracker, Op. 71 - Danse De La Fée Dragée.mp3"
        },
        {
            day: 12,
            type: "craft",
            image: "12-fiocchi.png",
            text: "…Si colora e si decora!",
            link: "",
            download: "12-fiocchi.pdf",
            audio: ""
        },
        {
            day: 13,
            type: "recipe",
            image: "13-ricetta.png",
            text: "Ecco una dolce ricetta che arriva direttamente dal Paese dei Dolci",
            link: "",
            download: "13-ricetta2.pdf",
            audio: ""
        },
        {
            day: 14,
            type: "maze",
            image: "",
            text: "Giochiamo!",
            link: "",
            download: "14-labirinti.pdf",
            audio: ""
        },
        {
            day: 15,
            type: "video",
            image: "",
            text: "Ecco Clara con le sue amiche…tu chi vuoi essere?",
            link: "https://www.youtube.com/watch?v=V32zWkB1MiY&list=RDV32zWkB1MiY&start_radio=1",
            download: "",
            audio: ""
        },
        {
            day: 16,
            type: "craft",
            image: "16-maschera.png",
            text: "…Travestiamoci!",
            link: "",
            download: "16-maschera.pdf",
            audio: ""
        },
        {
            day: 17,
            type: "music",
            image: "",
            text: "…Indossa la maschera…e balla!",
            link: "",
            download: "",
            audio: "17- Tchaikovsky- The Nutcracker, Op. 71 - Danse De La Fée Dragée.mp3"
        },
        {
            day: 18,
            type: "game",
            image: "",
            text: "Aguzza la vista…giochiamo!",
            link: "",
            download: "18-mix.pdf",
            audio: ""
        },
        {
            day: 19,
            type: "craft",
            image: "19-biglietto.png",
            text: "Un piccolo pensiero da dare a chi vuoi bene",
            link: "",
            download: "19-biglietto.pdf",
            audio: ""
        },
        {
            day: 20,
            type: "music",
            image: "",
            text: "Anche oggi si balla!",
            link: "",
            download: "",
            audio: "20-Tchaikovsky- The Nutcracker, Op. 71 - Danse Russe (Trépak).mp3"
        },
        {
            day: 21,
            type: "game",
            image: "",
            text: "Giochiamo con i nostri nuovi amici",
            link: "",
            download: "21-ordine.pdf",
            audio: ""
        },
        {
            day: 22,
            type: "coloring",
            image: "22-vestiti.png",
            text: "Aiuta i ballerini a prepararsi…sono in ritardo per lo spettacolo….",
            link: "",
            download: "22-vestiti.pdf",
            audio: ""
        },
        {
            day: 23,
            type: "video",
            image: "",
            text: "…Pronte a ballare con i fiori nel regno dei dolci?!",
            link: "https://www.youtube.com/watch?v=Giz63rP8xeM&list=RDGiz63rP8xeM&start_radio=1",
            download: "",
            audio: ""
        },
        {
            day: 24,
            type: "theatre",
            image: "24-teatro.png",
            text: "Ultimo giorno d’attesa…prepara il tuo spettacolo!",
            link: "",
            download: "24-teatro.pdf",
            audio: ""
        },
        {
            day: 25,
            type: "video",
            image: "",
            text: "BUON NATALE! e buona visione del balletto con tutta la famiglia",
            link: "https://www.youtube.com/watch?v=ya4DasxL47g&list=RDya4DasxL47g&start_radio=1",
            download: "",
            audio: ""
        }
    ]
    
    const quiz = {
        title: "Che ballerina sei a Natale?",
        questions: [
            {
                q: "",
                ans: [
                    {text: ""},
                    {text: ""},
                    {text: ""}
                ]
            }
        ],
        results: {
            a: {text: ""},
            b: {text: ""},
            c: {text: ""}
        }
    };
    
    for(let i = 1; i <= 25; i++){
         const d = days[i - 1];
        const clone = template.content.cloneNode(true);
        const dayBox = clone.querySelector('.day-box');
        const numberSpan = clone.querySelector('.card-number');
        const back = clone.querySelector('.card-back');
        dayBox.setAttribute('data-day', i);
        numberSpan.textContent = i;
        dayBox.addEventListener('click', () => {
            dayBox.classList.toggle('is-flipped');
        });
        container.appendChild(clone);
        const content = document.createElement("div");
        content.className = "cont";
        content.innerHTML=`<h2 class="text">${d.text}</h2>`;
        back.appendChild(content);
        if(d.image!=""){
            const img = document.createElement("img");
            img.src = d.image;
            img.className = "image"
            content.appendChild(img);
        }
        if(d.download!=""){
            const icon = document.createElement("img");
            icon.src = "icon-download.png";
            icon.className = "logo-download";
            const a = document.createElement("a");
            a.href = d.pdf;
            a.download = d.text + ".pdf";  
            a.addEventListener('click', (e) => e.stopPropagation());
            back.appendChild(a);
            a.appendChild(icon);
        };
        if (d.audio != "") {
            const player = new Audio(d.audio);
            player.preload = "none";

            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "audio-btn";
            btn.innerHTML = '<img src="icona-audio.png" alt="audio">';  

            btn.addEventListener("click", () => {
                if (player.paused) {
                    player.play();
                } else {
                    player.pause();
                }
                btn.addEventListener('click', (e) => e.stopPropagation());
            });
            back.appendChild(btn);
        }
        if (d.link != "") {
            const videoId = getYouTubeId(d.link);

            if (videoId) {
                const wrapper = document.createElement("div");
                wrapper.className = "video-wrapper";

                const iframe = document.createElement("iframe");
                iframe.src = "https://www.youtube.com/embed/" + videoId;
                iframe.title = "Video del giorno";
                iframe.loading = "lazy";
                iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                iframe.allowFullscreen = true;

                wrapper.appendChild(iframe);
                content.appendChild(wrapper);
            }
        }
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    //const openedDaysFromBackend = [?];
    const dayBoxes = document.querySelectorAll('.day-box');

    dayBoxes.forEach(box =>{ 

        const dayNum = parseInt(box.getAttribute('data-day'));

        const boxDate = new Date(today.getFullYear(), 10, dayNum);
        boxDate.setHours(0, 0, 0, 0);

        if(boxDate.getTime() === today.getTime()){
            box.classList.add('today');
            box.classList.add('selected')
        }
        else if(boxDate > today){
            box.classList.add('locked')
        }
        else{
            /*if(openedDaysFromBackend.includes(dayNum)){
                box.classList.add('open');
            }
            else{
                box.classList.add('closed');
            }*/
           box.classList.add('closed');
        }
    });
});


