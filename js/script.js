var data = [{"vlada":"V. Klaus","img":"klaus","nastup":"06.06.1992","jmenovani":"02.07.1992","duvera":"14.07.1992","konec_bez_duvery":""},
{"vlada":"V. Klaus","img":"klaus","nastup":"01.06.1996","jmenovani":"04.07.1996","duvera":"25.07.1996","konec_bez_duvery":""},
{"vlada":"J. Tošovský","img":"tosovsky","nastup":"02.01.1998","jmenovani":"02.01.1998","duvera":"28.01.1998","konec_bez_duvery":""},
{"vlada":"M. Zeman","img":"zeman","nastup":"20.06.1998","jmenovani":"22.07.1998","duvera":"19.08.1998","konec_bez_duvery":""},
{"vlada":"V. Špidla","img":"spidla","nastup":"15.06.2002","jmenovani":"15.07.2002","duvera":"07.08.2002","konec_bez_duvery":""},
{"vlada":"S. Gross","img":"gross","nastup":"02.08.2004","jmenovani":"04.08.2004","duvera":"24.08.2004","konec_bez_duvery":""},
{"vlada":"J. Paroubek","img":"paroubek","nastup":"25.04.2005","jmenovani":"25.04.2005","duvera":"13.05.2005","konec_bez_duvery":""},
{"vlada":"M. Topolánek","img":"topolanek","nastup":"02.06.2006","jmenovani":"04.09.2006","duvera":"","konec_bez_duvery":"09.01.2007"},
{"vlada":"M. Topolánek","img":"topolanek","nastup":"09.01.2007","jmenovani":"09.01.2007","duvera":"19.01.2007","konec_bez_duvery":""},
{"vlada":"J. Fischer","img":"fischer","nastup":"24.03.2009","jmenovani":"08.05.2009","duvera":"07.06.2009","konec_bez_duvery":""},
{"vlada":"P. Nečas","img":"necas","nastup":"29.05.2010","jmenovani":"13.07.2010","duvera":"10.08.2010","konec_bez_duvery":""},
{"vlada":"J. Rusnok","img":"rusnok","nastup":"17.06.2013","jmenovani":"10.07.2013","duvera":"","konec_bez_duvery":"29.01.2014"},
{"vlada":"B. Sobotka","img":"sobotka","nastup":"26.10.2013","jmenovani":"29.01.2014","duvera":"18.02.2014","konec_bez_duvery":""},
{"vlada":"A. Babiš","img":"babis","nastup":"21.10.2017","jmenovani":"13.12.2017","duvera":"","konec_bez_duvery":""}]
function dParse(v) {
    v = v.split('.')
    return new Date(parseInt(v[2]), parseInt(v[1]) - 1, parseInt(v[0]))
};
var cats = [],
    doJmenovani = [],
    doDuvery = []
data.reverse()
data.forEach(function(d) {
    cats.push(d.vlada)
    // od voleb ci nastupu do jmenovani
    var start = dParse(d.nastup)
    var appoint = dParse(d.jmenovani)
    doJmenovani.push(Math.round((appoint - start)/(1000*60*60*24)))
    var duvera = dParse(d.duvera)
    if (duvera == 'Invalid Date') {
        duvera = dParse(d.konec_bez_duvery)
    };
    if (duvera == 'Invalid Date') {
        duvera = new Date() - 1000*60*60*13
    };
    doDuvery.push(Math.round((duvera - appoint)/(1000*60*60*24)))
});
Highcharts.chart('chart', {
    chart: {
        type: 'bar',
        height: 600
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Vlády ČR od nástupu do získání důvěry'
    },
    subtitle: {
        text: 'Stávající vláda A. Babiše vládne bez důvěry již ' 
        + Math.round((new Date() - 1000*60*60*13 - new Date(2017, 11, 13))/(1000*60*60*24))
        + ' dní'
    },
    xAxis: {
        categories: cats
    },
    yAxis: {
        min: 0,
        title: {
            text: 'dní'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: false,
        name: 'vláda bez důvěry',
        color: '#de2d26',
        data: doDuvery
    }, {
        dataLabels: {
            enabled: true
        },
        enableMouseTracking: false,
        color: '#636363',
        name: 'do jmenování',
        data: doJmenovani
    }]
})