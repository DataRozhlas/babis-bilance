$(document).ready(function(){
  $('.slider1').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  infinite: true,
  dots: true,
  accessibility: false,
  pauseOnDotsHover: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});
  $('.slider2').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  infinite: true,
  dots: true,
  accessibility: false,
  pauseOnDotsHover: true,
  autoplaySpeed: 4500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }]
});
});

Highcharts.chart('container', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Kdo s kým nejčastěji hlasuje v poslanecké sněmovně?'
    },
    subtitle: {
        text: 'Čím jsou si blíž, tím častěji hlasují shodně. Najetím myši zobrazíte jméno poslance'
    },
    credits: {
    	text: 'Zdroj: Michal Škop, KohoVolit.eu',
      href: 'http://kohovolit.eu/'
    },
    annotations: [{
    	labels: [{
    		point: {
    			x: -0.3627583604,
    			y: 0.0947804838,
    			yAxis: 0,
    			xAxis: 0
    		},
    		text: 'Sobotka'
    	}, {
    		point: {
    			x: -0.5007245115,
    			y: 0.0557160284,
    			yAxis: 0,
    			xAxis: 0
    		},
    		text: 'Klaus'
    	}, {
    		point: {
    			x: -0.5383989603,
    			y:0.1869975186,
    			yAxis: 0,
    			xAxis: 0
    		},
    		text: 'Jurečka'
    	}, {
    		point: {
    			x: 0.1539005288,
    			y: 0.0390623844,
    			yAxis: 0,
    			xAxis: 0
    		},
    		text: 'Dolejš'
    	}, {
    		point: {
    			x: -0.4503163465,
    			y:-0.3195728343,
    			yAxis: 0,
    			xAxis: 0
    		},
    		text: 'Richterová'
    	}]
    }],
    xAxis: {
    		max: 1,
        min: -1,
        gridLineWidth: 1,
        title: {
            enabled: false        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        tickAmount: 5},
        
    yAxis: {
	   	max: 1,
        min: -1,
        tickAmount: 5,
        title: {
        enabled: false
        }
    },
    legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        },
    tooltip: {
    	formatter: function() {
    		return this.key + ', ' + this.series.name;
    	}
    	},
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            }
        }
    },
    series: [{
        name: 'ANO',
        color: 'rgba(38, 16, 96, .5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data:[{"x":0.621595457,"y":-0.2186112473,"name":"Martin Stropnický"},
{"x":0.7092842173,"y":-0.155385431,"name":"Josef Hájek"},
{"x":0.8054806625,"y":-0.118572885,"name":"Stanislav Berkovec"},
{"x":0.7615419144,"y":-0.1281727301,"name":"Andrej Babiš"},
{"x":0.7872114765,"y":-0.0841977791,"name":"Karel Rais"},
{"x":0.7236122188,"y":-0.1617409433,"name":"Rostislav Vyzula"},
{"x":0.7205032833,"y":-0.0857139731,"name":"Radek Vondráček"},
{"x":0.7617877336,"y":-0.2602511182,"name":"Jan Volný"},
{"x":0.7243769547,"y":-0.0944759601,"name":"Helena Válková"},
{"x":0.8044378288,"y":-0.0765428701,"name":"Pavel Plzák"},
{"x":0.7963039275,"y":-0.1096210582,"name":"Ladislav Okleštěk"},
{"x":0.8114060432,"y":-0.1272617668,"name":"Margita Balaštíková"},
{"x":0.7865772199,"y":-0.1557967701,"name":"Richard Brabec"},
{"x":0.7296482919,"y":-0.2630078944,"name":"Milan Brázdil"},
{"x":0.7764306609,"y":-0.091230547,"name":"Jaroslav Faltýnek"},
{"x":0.8028508138,"y":-0.1024841205,"name":"Miloslav Janulík"},
{"x":0.8282967356,"y":-0.1188029097,"name":"David Kasal"},
{"x":0.7013383868,"y":-0.1199116084,"name":"Martin Kolovratník"},
{"x":0.8123108158,"y":-0.1151600434,"name":"Roman Kubíček"},
{"x":0.795636606,"y":-0.1066880461,"name":"Radka Maxová"},
{"x":0.7904894298,"y":-0.1247507039,"name":"Jana Pastuchová"},
{"x":0.7243522871,"y":-0.1626382068,"name":"Karel Tureček"},
{"x":0.7696158713,"y":-0.0888032164,"name":"Josef Kott"},
{"x":0.7860377525,"y":-0.1374055918,"name":"Věra Adámková"},
{"x":0.7689198525,"y":-0.2606064915,"name":"Karla Šlechtová"},
{"x":0.770420772,"y":-0.1014562291,"name":"Dan Ťok"},
{"x":0.7567501127,"y":-0.143873702,"name":"Robert Pelikán"},
{"x":0.8080584729,"y":-0.0937585247,"name":"Miloslava Rutová"},
{"x":0.8091628856,"y":-0.050679963,"name":"František Petrtýl"},
{"x":0.7857561757,"y":-0.069946856,"name":"Andrea Babišová"},
{"x":0.7955566679,"y":-0.0675611369,"name":"Klára Dostálová"},
{"x":0.8009039585,"y":-0.1209155865,"name":"Lenka Dražilová"},
{"x":0.7889385593,"y":-0.1274412564,"name":"Andrea Brzobohatá"},
{"x":0.8190740927,"y":-0.0784974792,"name":"Josef Bělica"},
{"x":0.8319519992,"y":-0.1296537778,"name":"Jiří Bláha"},
{"x":0.7703802151,"y":-0.1923912427,"name":"Jaroslav Bžoch"},
{"x":0.8316530774,"y":-0.0988782063,"name":"Kamal Farhan"},
{"x":0.8167240788,"y":-0.0967474411,"name":"Milan Feranec"},
{"x":0.8115266854,"y":-0.1075369308,"name":"Stanislav Fridrich"},
{"x":0.7065439411,"y":-0.2198013421,"name":"Milan Hnilička"},
{"x":0.820257745,"y":-0.1214464698,"name":"Eva Fialová"},
{"x":0.7365364961,"y":-0.1447742242,"name":"Ivan Jáč"},
{"x":0.7124737977,"y":-0.1457161553,"name":"Aleš Juchelka"},
{"x":0.7995447752,"y":-0.1524375622,"name":"Barbora Kořanová"},
{"x":0.8236395509,"y":-0.1094297157,"name":"Taťána Malá"},
{"x":0.7993898491,"y":-0.1015100324,"name":"Jana Vildumetzová"},
{"x":0.8155690265,"y":-0.0770042657,"name":"Věra Procházková"},
{"x":0.8092098125,"y":-0.1349728808,"name":"Zuzana Ožanová"},
{"x":0.810162773,"y":-0.1064747217,"name":"Monika Oborná"},
{"x":0.7448684088,"y":-0.146412581,"name":"Marcela Melková"},
{"x":0.7879804409,"y":-0.1123249874,"name":"Radek Zlesák"},
{"x":0.8274617055,"y":-0.1121007222,"name":"David Štolpa"},
{"x":0.7231669729,"y":-0.1177504996,"name":"Patrik Nacher"},
{"x":0.8199692724,"y":-0.1116435818,"name":"Petr Vrána"},
{"x":0.7752253777,"y":-0.1424783083,"name":"Adam Vojtěch"},
{"x":0.7881852475,"y":-0.1061458137,"name":"Ivo Vondrák"},
{"x":0.7279531061,"y":-0.1303707991,"name":"Pavel Juříček"},
{"x":0.7891511432,"y":-0.0433475586,"name":"Adam Kalous"},
{"x":0.8058138949,"y":-0.1220855416,"name":"Jan Richter"},
{"x":0.7958854333,"y":-0.0623647899,"name":"Pavel Staněk"},
{"x":0.7992083358,"y":-0.1194661173,"name":"Julius Špičák"},
{"x":0.8125143001,"y":-0.1357703493,"name":"Tomáš Kohoutek"},
{"x":0.8353124875,"y":-0.1042781333,"name":"Robert Králíček"},
{"x":0.8045342152,"y":-0.0863079483,"name":"Jan Kubík"},
{"x":0.8272722577,"y":-0.0670317404,"name":"Jaroslav Kytýr"},
{"x":0.7839133614,"y":-0.1571276242,"name":"Jiří Strýček"},
{"x":0.7829650284,"y":-0.1130399152,"name":"Jan Schiller"},
{"x":0.8180815851,"y":-0.0936814295,"name":"Petr Sadovský"},
{"x":0.7889769473,"y":-0.1181787992,"name":"Jan Řehounek"},
{"x":0.8084220695,"y":-0.0863886826,"name":"Pavel Růžička"},
{"x":0.8137991232,"y":-0.1092135077,"name":"Michal Ratiborský"},
{"x":0.7608386535,"y":-0.1401076755,"name":"Pavel Pustějovský"},
{"x":0.7111093187,"y":-0.1443844964,"name":"David Pražák"},
{"x":0.808627468,"y":-0.1218632495,"name":"Marek Novák"},
{"x":0.8155511522,"y":-0.0825580948,"name":"Jiří Mašek"},
{"x":0.705094365,"y":-0.2448468929,"name":"Přemysl Mališ"},
{"x":0.7964723457,"y":-0.1223667626,"name":"Milan Pour"},
{"x":0.8138178882,"y":-0.0811376798,"name":"Eva Matyášová"}]
    }, 
    
    {
        name: 'ODS',
        color: 'rgba(0, 68, 148, .5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data: [{"x":-0.7988112313,"y":0.2160261658,"name":"Marek Benda"},
{"x":-0.9939220236,"y":0.0612531649,"name":"Miroslava Němcová"},
{"x":-0.8881828542,"y":0.2990137298,"name":"Pavel Žáček"},
{"x":-0.9360958316,"y":0.1217141342,"name":"Jan Bauer"},
{"x":-0.9117416944,"y":0.1165617373,"name":"Ivan Adamec"},
{"x":-0.9385417938,"y":0.1081251647,"name":"Jan Zahradník"},
{"x":-0.9055752602,"y":0.1263815727,"name":"Jana Černochová"},
{"x":-0.9211781521,"y":0.0780210454,"name":"Jaroslav Martinů"},
{"x":-0.9190732471,"y":0.1296702969,"name":"Zbyněk Stanjura"},
{"x":-0.8702624137,"y":0.2985465836,"name":"Bohuslav Svoboda"},
{"x":-0.9167112654,"y":0.0502591418,"name":"Veronika Vrecionová"},
{"x":-0.934380342,"y":0.2336663475,"name":"Petr Fiala"},
{"x":-0.7497238355,"y":0.2130065372,"name":"Pavel Blažek"},
{"x":-0.8665158981,"y":0.2575623189,"name":"Jan Skopeček"},
{"x":-0.9439938426,"y":0.077479873,"name":"Martin Baxa"},
{"x":-0.8692707669,"y":-0.146927838,"name":"Petr Beitl"},
{"x":-0.9058633133,"y":0.156804104,"name":"Stanislav Blaha"},
{"x":-0.9506334236,"y":0.1365838243,"name":"Jakub Janda"},
{"x":-0.8480432479,"y":0.1438439723,"name":"Zuzana Majerová Zahradníková"},
{"x":-0.9096796612,"y":0.1300777182,"name":"Ilona Mauritzová"},
{"x":-0.91469325,"y":0.0966479652,"name":"Vojtěch Munzar"},
{"x":-0.9504673258,"y":0.1111223672,"name":"Jiří Ventruba"},
{"x":-0.5007245115,"y":0.0557160284,"name":"Václav Klaus"},
{"x":-0.9173931318,"y":0.3254054936,"name":"Karel Krejza"},
{"x":-0.9087887814,"y":0.2581889774,"name":"Martin Kupka"}]
    },
  {
        name: 'Piráti',
        marker: {symbol: 'circle', lineWidth: 0.5},
        color: 'rgba(0, 0, 0, .5)',
        data: [{"x":-0.6064603311,"y":-0.4127868692,"name":"Dana Balcarová"},
{"x":-0.5941662168,"y":-0.4243535393,"name":"Lukáš Bartoň"},
{"x":-0.5549450111,"y":-0.4168516494,"name":"Ivan Bartoš"},
{"x":-0.6154426681,"y":-0.4138420716,"name":"Lukáš Černohorský"},
{"x":-0.6033611031,"y":-0.4193395498,"name":"František Elfmark"},
{"x":-0.5788175148,"y":-0.4620603788,"name":"Mikuláš Ferjenčík"},
{"x":-0.621361272,"y":-0.4362583298,"name":"Radek Holomčík"},
{"x":-0.6262841931,"y":-0.399882989,"name":"Martin Jiránek"},
{"x":-0.6316548449,"y":-0.4122721334,"name":"Lenka Kozlová"},
{"x":-0.4503163465,"y":-0.3195728343,"name":"Olga Richterová"},
{"x":-0.5149473349,"y":-0.4527956959,"name":"Jakub Michálek"},
{"x":-0.6851731065,"y":-0.370634886,"name":"Petr Třešňák"},
{"x":-0.5723808196,"y":-0.4539028603,"name":"Mikuláš Peksa"},
{"x":-0.6351807178,"y":-0.4520003574,"name":"Tomáš Vymazal"},
{"x":-0.6138934998,"y":-0.4826958507,"name":"František Kopřiva"},
{"x":-0.605472249,"y":-0.4041421962,"name":"Lukáš Kolářík"},
{"x":-0.6234616424,"y":-0.417727862,"name":"Ondřej Profant"},
{"x":-0.5655291829,"y":-0.4883717036,"name":"Jan Pošvář"},
{"x":-0.6233936293,"y":-0.3656809037,"name":"Ondřej Polanský"},
{"x":-0.6331572624,"y":-0.3527143958,"name":"Vojtěch Pikal"},
{"x":-0.6051049654,"y":-0.4268055853,"name":"Tomáš Martínek"},
{"x":-0.6093227601,"y":-0.4627734876,"name":"Jan Lipavský"}]
    },
    {
        name: 'SPD',
        color: 'rgba(44, 134, 196, .5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data: [{"x":0.2250511006,"y":0.7852961855,"name":"Radim Fiala"},
{"x":0.2170987581,"y":0.8081578007,"name":"Tomio Okamura"},
{"x":0.2118453063,"y":0.846031072,"name":"Jaroslav Holík"},
{"x":0.2188654397,"y":0.8200413881,"name":"Marian Bojko"},
{"x":0.2490800207,"y":0.8393688435,"name":"Jaroslav Dvořák"},
{"x":0.1983256505,"y":0.8465435321,"name":"Jan Hrnčíř"},
{"x":0.247662116,"y":0.9235320371,"name":"Tereza Hyťhová"},
{"x":0.2002179555,"y":0.8382027953,"name":"Monika Jarošová"},
{"x":0.2235709799,"y":0.8407676256,"name":"Pavel Jelínek"},
{"x":0.2198484148,"y":0.8485171163,"name":"Karla Maříková"},
{"x":0.2395880591,"y":0.8190047889,"name":"Ivana Nevludová"},
{"x":0.2178647187,"y":0.8186483221,"name":"Lucie Šafránková"},
{"x":0.2453733768,"y":0.8204634724,"name":"Lubomír Volný"},
{"x":0.2161443082,"y":0.8397414071,"name":"Radovan Vích"},
{"x":0.1786111587,"y":0.804595812,"name":"Jana Levová"},
{"x":0.2665530203,"y":0.9036268507,"name":"Jiří Kobza"},
{"x":0.0842231529,"y":0.8182836911,"name":"Jiří Kohoutek"},
{"x":0.2243433376,"y":0.8083345459,"name":"Radek Koten"},
{"x":0.1927148942,"y":0.8179006435,"name":"Lubomír Španěl"},
{"x":0.2187217683,"y":0.8285858926,"name":"Radek Rozvoral"},
{"x":0.2283969314,"y":0.8168801848,"name":"Miloslav Rozner"},
{"x":0.2333145865,"y":0.8364358781,"name":"Zdeněk Podal"}]
    },{
        name: 'ČSSD',
        marker: {symbol: 'circle', lineWidth: 0.5},
        color: 'rgba(242, 148, 0, .5)',
        data: [{"x":-0.3627583604,"y":0.0947804838,"name":"Bohuslav Sobotka"},
{"x":0.1545420045,"y":-0.1780075265,"name":"Lubomír Zaorálek"},
{"x":0.0022593562,"y":-0.3192718607,"name":"Jan Hamáček"},
{"x":-0.1166825716,"y":-0.3251946676,"name":"Alena Gajdůšková"},
{"x":0.2920103901,"y":-0.1973913582,"name":"Jaroslav Foldyna"},
{"x":0.0417272656,"y":-0.3390577366,"name":"Jan Chvojka"},
{"x":-0.023254213,"y":-0.3232157131,"name":"Jiří Běhounek"},
{"x":0.1144802062,"y":-0.076579432,"name":"Jan Birke"},
{"x":0.2527987216,"y":-0.1021362,"name":"Milan Chovanec"},
{"x":-0.0490084384,"y":-0.2555123043,"name":"Kateřina Valachová"},
{"x":-0.0283563789,"y":-0.3738858097,"name":"Petr Dolínek"},
{"x":-0.1309440573,"y":-0.3313077019,"name":"Tomáš Hanzel"},
{"x":-0.0325196569,"y":-0.3581650635,"name":"Ondřej Veselý"},
{"x":0.0203044341,"y":-0.293233585,"name":"Antonín Staněk"},
{"x":-0.0396999912,"y":-0.3014067139,"name":"Roman Onderka"}]
    },
    
    {
        name: 'KSČM',
        color: 'rgba(216,38,28,.5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data: [{"x":0.3958492246,"y":-0.0263292964,"name":"Vojtěch Filip"},
{"x":0.481384362,"y":0.0741397145,"name":"Miroslav Grebeníček"},
{"x":0.468018822,"y":0.1648705072,"name":"Pavel Kováčik"},
{"x":0.4136650038,"y":0.1307236507,"name":"Stanislav Grospič"},
{"x":0.1539005288,"y":0.0390623844,"name":"Jiří Dolejš"},
{"x":0.4671988697,"y":0.0691122833,"name":"Miloslava Vostrá"},
{"x":0.4974905468,"y":0.1122637807,"name":"Alexander Černý"},
{"x":0.3935936382,"y":0.1637346672,"name":"Vladimír Koníček"},
{"x":0.4408097602,"y":0.1690165013,"name":"Květa Matušovská"},
{"x":0.4486110654,"y":0.1622232901,"name":"Hana Aulická Jírovcová"},
{"x":0.4951997968,"y":0.1443847215,"name":"Jiří Valenta"},
{"x":0.4139574636,"y":0.1585313235,"name":"Zdeněk Ondráček"},
{"x":0.5094011642,"y":0.1647336828,"name":"Ivo Pojezný"},
{"x":0.4882333035,"y":0.1353903453,"name":"Leo Luzar"},
{"x":0.5063951756,"y":0.1200054976,"name":"Daniel Pawlas"}]
    },
    {
        name: 'KDU-ČSL',
        color: 'rgba(249, 218, 35, .5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data: [{"x":-0.5600140727,"y":-0.3294663035,"name":"Stanislav Juránek"},
{"x":-0.5260388813,"y":-0.1737286687,"name":"Pavel Bělobrádek"},
{"x":-0.4306367638,"y":-0.3587819513,"name":"Jan Bartošek"},
{"x":-0.5353658557,"y":-0.2047646362,"name":"Ondřej Benešík"},
{"x":-0.5383989603,"y":0.1869975186,"name":"Marian Jurečka"},
{"x":-0.5999190132,"y":-0.2046442087,"name":"Vít Kaňkovský"},
{"x":-0.5203793119,"y":-0.1652061677,"name":"Jiří Mihola"},
{"x":-0.5056645413,"y":-0.3128085106,"name":"Pavla Golasowská"},
{"x":-0.7029790387,"y":-0.1156404624,"name":"Jan Čižinský"},
{"x":-0.6160403479,"y":-0.1209516077,"name":"Marek Výborný"}]
    },
    {
        name: 'TOP 09',
        color: 'rgba(153, 51, 153, .5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data: [{"x":-0.8461715847,"y":0.1161339138,"name":"Miroslav Kalousek"},
{"x":-0.8281488297,"y":0.1007330812,"name":"Karel Schwarzenberg"},
{"x":-0.8038031047,"y":0.0382727454,"name":"Helena Langšádlová"},
{"x":-0.8918929494,"y":0.1177109241,"name":"František Vácha"},
{"x":-0.9514955642,"y":-0.057566886,"name":"Markéta Pekarová Adamová"},
{"x":-0.8782228937,"y":-0.02815875,"name":"Dominik Feri"},
{"x":-0.900908737,"y":-0.0253003906,"name":"Vlastimil Válek"}]
    },
   {
        name: 'STAN',
        color: 'rgba(182, 201, 50, .5)',
        marker: {symbol: 'circle', lineWidth: 0.5},
        data: [{"x":-0.8500789257,"y":0.0200485891,"name":"Jan Farský"},
{"x":-0.8670276521,"y":0.091951804,"name":"Petr Gazdík"},
{"x":-0.9039692829,"y":0.0988030872,"name":"Věra Kovářová"},
{"x":-0.8681451526,"y":0.0575526746,"name":"Jana Krutáková"},
{"x":-0.8732435865,"y":0.005340623,"name":"Vít Rakušan"},
{"x":-0.7729660872,"y":0.1303829317,"name":"Petr Pávek"}]
    }
   ]
});