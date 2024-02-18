let dataPortfolio = [
    {
        'thumb': 'work1.jpg',
        'name': 'Comovi Green',
        'status':'link',
        'link':'https://drive.google.com/drive/folders/1so2eGTh-KTw3rv-7XmfkHkWVGNgbppmI?usp=sharing'
    },
    {
        'thumb': 'work15.jpg',
        'name': 'Himti Unas 2020-2022',
        'status':'link',
        'link':'https://drive.google.com/drive/folders/1ZbtKpC0V8gbpDQg1jscQn0qPgzT2lgq2?usp=drive_link'
    },
    {
        'thumb': 'work2.jpg',
        'name': 'Head Office Cinema XXI',
        'status':'link',
        'link':'https://drive.google.com/drive/folders/10SsrzY3k7UlGWeDLyGnOM2O6jiuMzURS?usp=sharing'
    },
    {
        'thumb': 'work3.jpg',
        'name': 'Wilx Store',
        'status':'link',
        'link':'https://drive.google.com/drive/folders/1iB8vdBtw2XIaSeA6o1uCruymuwKiV_mM?usp=drive_link'
    },
    {
        'thumb': 'work4.jpg',
        'name': 'Honda Microsite',
        'status':'link',
        'link':'https://drive.google.com/drive/folders/1StTJfSMXqSfQCZbgGVKLAhf_abNOQ4SV?usp=drive_link'
    },
    {
        'thumb': 'work5.jpg',
        'name': 'Antv Koplo Superstar',
        'status':'link',
        'link':'https://www.intipseleb.com/koplo-superstar'
    },
    {
        'thumb': 'work6.jpg',
        'name': 'One Pride MMA',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/onepride22/'
    },
    {
        'thumb': 'work7.jpg',
        'name': 'VIAHUB',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/viahub/'
    },
    {
        'thumb': 'work8.jpg',
        'name': 'Subdomain Vivacoid',
        'status':'link',
        'link':'https://gadget.viva.co.id/'
    },
    {
        'thumb': 'work9.jpg',
        'name': 'Bakrie Company Profile',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/bakrie/'
    },
    {
        'thumb': 'work10.jpg',
        'name': 'Hut Adira Festival 2023',
        'status':'link',
        'link':'https://www.viva.co.id/adirafestival2023'
    },
    {
        'thumb': 'work11.jpg',
        'name': 'Sample Microsite Caleg Vivacoid',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/caleg/demokrat/'
    },
    {
        'thumb': 'work12.jpg',
        'name': 'Kabar Pemilu TVOne',
        'status':'link',
        'link':'https://www.tvonenews.com/kabar-pemilu'
    },
    {
        'thumb': 'work13.jpg',
        'name': 'Damai Indonesia',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/damai-indonesia/'
    },
    {
        'thumb': 'work14.jpg',
        'name': 'Hut TVOne 16',
        'status':'link',
        'link':'https://www.tvonenews.com/hut-tvone'
    },
];


if(dataPortfolio && dataPortfolio.length){
    dataPortfolio.reverse().map(item => {
        $('#portfolioList').append(`
            <div class="portfolio__img morePortfolio" style="display: none;">
                <img class="lazyload" data-original="assets/img/portfolio/${item.thumb}" alt="${item.name}">
                
                <div class="portfolio__link">
                    <a href="${item.link}" class="portfolio__link-name">View details</a>
                </div>
            </div>
        `)
    })
}





$( document ).ready(function () {
    if($(window).width() >= 1024) {
        $(".morePortfolio").slice(0, 6).show();
        console.log('1024');
    }
    if($(window).width() <= 1023) {
        $(".morePortfolio").slice(0, 3).show();
        console.log('1023');
    }
    $("#loadMorePortfolio").on('click', function (e) {
        e.preventDefault();
        $(".morePortfolio:hidden").slice(0, 3).slideDown();
        if ($(".morePortfolio:hidden").length == 0) {
            $("#loadMorePortfolio").fadeOut('slow');
        }
    });
});