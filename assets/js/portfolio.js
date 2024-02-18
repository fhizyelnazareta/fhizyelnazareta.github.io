let dataPortfolio = [
    {
        'thumb': 'work1.png',
        'name': 'Comovi Green',
        'status':'none',
        'link':'javascript:void(0)'
    },
    {
        'thumb': 'work15.png',
        'name': 'Himti Unas 2020-2022',
        'status':'link',
        'link':'https://drive.google.com/drive/folders/1ZbtKpC0V8gbpDQg1jscQn0qPgzT2lgq2?usp=drive_link'
    },
    {
        'thumb': 'work2.png',
        'name': 'Head Office Cinema XXI',
        'status':'none',
        'link':'javascript:void(0)'
    },
    {
        'thumb': 'work3.png',
        'name': 'Wilx Store',
        'status':'none',
        'link':'javascript:void(0)'
    },
    {
        'thumb': 'work4.png',
        'name': 'Honda Microsite',
        'status':'none',
        'link':'javascript:void(0)'
    },
    {
        'thumb': 'work5.png',
        'name': 'Antv Koplo Superstar',
        'status':'link',
        'link':'https://www.intipseleb.com/koplo-superstar'
    },
    {
        'thumb': 'work6.png',
        'name': 'One Pride MMA',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/onepride22/'
    },
    {
        'thumb': 'work7.png',
        'name': 'VIAHUB',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/viahub/'
    },
    {
        'thumb': 'work8.png',
        'name': 'Subdomain Vivacoid',
        'status':'link',
        'link':'https://gadget.viva.co.id/'
    },
    {
        'thumb': 'work9.png',
        'name': 'Bakrie Company Profile',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/bakrie/'
    },
    {
        'thumb': 'work10.png',
        'name': 'Hut Adira Festival 2023',
        'status':'link',
        'link':'https://www.viva.co.id/adirafestival2023'
    },
    {
        'thumb': 'work11.png',
        'name': 'Sample Microsite Caleg Vivacoid',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/caleg/demokrat/'
    },
    {
        'thumb': 'work12.png',
        'name': 'Kabar Pemilu TVOne',
        'status':'link',
        'link':'https://www.tvonenews.com/kabar-pemilu'
    },
    {
        'thumb': 'work13.png',
        'name': 'Damai Indonesia',
        'status':'link',
        'link':'https://thevivanetworks.com/prototype/damai-indonesia/'
    },
    {
        'thumb': 'work14.png',
        'name': 'Hut TVOne 16',
        'status':'link',
        'link':'https://www.tvonenews.com/hut-tvone'
    },
];


if(dataPortfolio && dataPortfolio.length){
    dataPortfolio.map(item => {
        $('#portfolioList').append(`
            <div class="portfolio__img morePortfolio" style="display: none;">
                <img src="assets/img/portfolio/${item.thumb}" alt="${item.name}">
                
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