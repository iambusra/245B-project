const experimentStimuli = {
  "içmek / to drink": {
    "class": "Consumption",
    "amb": {
      "dialogue": "A: Esra 'yı yine aktarda gördüm. Kim bilir neler alıyor yine... Bu ara çok fena taktı bu alternatif tıp işine.\nB: Bir çay içmek istiyormuş, geçen gün bana öyle dedi.",
      "spr": [
        "A:",
        "Esra",
        "bir",
        "çay",
        "içmek",
        "istiyor",
        "yani!"
      ],
      "question": "Esra aktardan alışveriş yapıyor.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Esra ne içeceğine karar verdi mi? Sana kahve getiriyorum, ben su içeceğim, onun ne istediğini bilmiyorum.\nB: Teşekkürler! Ocaktaki çayın kokusu çok hoşuna gitmiş, Esra'ya onu getirebilirsin.",
      "spr": [
        "A:",
        "Esra",
        "çayı",
        "içmek",
        "istiyor",
        "yani!"
      ],
      "question": "Esra'nın içmek istediği belli bir çay var.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Ben bu akşam buluştuğumuzda şöyle buz gibi bir kahve içmek istiyorum. Sen ne istersin? Esra karar vermiş mi ne içeceğine?\nB: Ben henüz karar vermedim ama Esra gideceğimiz mekanda çay her ne varsa onu içermiş.",
      "spr": [
        "A:",
        "Demek",
        "Esra",
        "çay",
        "içmek",
        "istiyor."
      ],
      "question": "Esra akşam içeceği çayı şimdiden seçmiş.",
      "expected_response": "F"
    }
  },
  "yemek / to eat": {
    "class": "Consumption",
    "amb": {
      "dialogue": "A: Sibel diyete başladı biliyorsun. Öğle arasında ne yiyecek çok merak ediyorum.\nB: Diyetisyeni çok sağlam bir diyet programı yazmış, Sibel de programda ne varsa sadece onu yemek istiyor. Öğlen için menüde salata var.",
      "spr": [
        "A:",
        "Desene",
        "Sibel",
        "bir",
        "salata",
        "yemek",
        "istiyor",
        "."
      ],
      "question": "Sibel öğle yemeğinde diyet programında olmayan bir şey yemek istiyor.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Senin bize dün akşam yaptığın o salatayı bir türlü unutamıyorum! Muhteşemdi.\nB: Teşekkür ederim! Sibel kaçırdı diye üzülüyordum ama siz gittikten sonra uğrayıp salatan aldı biraz. Bugün öğlen yemek istiyormuş!",
      "spr": [
        "A:",
        "Sibel",
        "salatayı",
        "yemek",
        "istiyor",
        "yani!"
      ],
      "question": "Sibel dün akşamdan kalan salatayı yarın öğlen yiyecek.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Sibel diyete başladı biliyorsun. Öğle arasında ne yiyecek çok merak ediyorum.\nB: Diyetisyeni çok sağlam bir diyet programı yazmış, öğlen yemeği için yemekhanede hangi salata çıkarsa onu yemesini söylemiş. Sibel de diyetisyeninin sözünden çıkmıyor!",
      "spr": [
        "A:",
        "Desene",
        "Sibel",
        "salata",
        "yemek",
        "istiyor!"
      ],
      "question": "Sibel öğle yemeğinde hangi salata çıkarsa onu yiyecek.",
      "expected_response": "T"
    }
  },
  "yutmak / to swallow": {
    "class": "Consumption",
    "amb": {
      "dialogue": "A: Elif'in son günlerde migreni çok şiddetlendi. Ağrısını nasıl dindirecek bilmiyorum.\nB: Geçen gün gittiği doktor ona uyumadan önce güçlü bir hap yutmasını önerdi. Bu sabah eczaneye gidecekti almak için.",
      "spr": [
        "A:",
        "Elif",
        "bir",
        "hap",
        "yutmak",
        "istiyor",
        "yani!"
      ],
      "question": "Elif, migreniyle baş edebilmek için doktora gitti.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Bu hapı biliyor musun? Ben ilk defa deneyeceğim, doktor çok güçlü olduğunu söyledi.\nB: Evet evet, biliyorum! Elif'in de şikayetleri seninkilerle aynı, o da bu hapı kullanmayı düşünüyordu.",
      "spr": [
        "A:",
        "Demek",
        "Elif",
        "hapı",
        "yutmak",
        "istiyor!"
      ],
      "question": "Elif şikayetleri için bahsi geçen hapı yutmak istiyor.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Haberin var mı, Elif takviye gıdaya kafayı fena takmış durumda. Evini takviye hapları ile doldurmuş.\nB: Olmaz mı! Artık aklına geldikçe eline geçen ilk güçlü hapı yutacakmış takviye diye. Böyle yapınca çok sağlıklı olacağını düşünüyor.",
      "spr": [
        "A:",
        "Desene",
        "Elif",
        "hap",
        "yutmak",
        "istiyor",
        "hep!"
      ],
      "question": "Elif daha sağlıklı bir hayat için bir daha asla hap yutmayacak.",
      "expected_response": "F"
    }
  },
  "çiğnemek / to chew": {
    "class": "Consumption",
    "amb": {
      "dialogue": "A: Ali'nin yaz tatilinde Japonya'ya gideceğini duydum! İç kulak problemini nasıl halledecek uçuşta acaba...\nB: Doktoru uçuş boyunca sakız çiğnemesini önermiş, yolda midesini bulandırmayacak bir naneli sakız alacaktı.",
      "spr": [
        "A:",
        "Demek",
        "Ali",
        "bir",
        "sakız",
        "çiğnemek",
        "istiyor!"
      ],
      "question": "Ali kulakları tıkanmasın diye uçakta muz yiyecek.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Ali bir süredir çok değişik ders çalışma metodları uyguluyor. En son koca bir paket sakız almış fizik çalışmak için ama aradaki bağlantıyı anlayamadım.\nB: Evet, bana da anlattı bunu. Ders çalışırken sakızı çiğneyecekmiş, böylece stres yapmayacakmış.",
      "spr": [
        "A:",
        "Ali",
        "sakızı",
        "çiğnemek",
        "istiyor",
        "demek!"
      ],
      "question": "Ali fizik sınavına girerken sakız çiğneyecek.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Duydun mu, bizim Ali'yle sevgilisi fena bozuşmuşlar. Kız Ali'nin sigara içmesinden rahatsız oluyormuş.\nB: Duydum, duymaz mıyım! Ama barıştılar, Ali artık her sigara içtikten sonra bulduğu ilk naneli sakızı ağzına atacak, sigara kokusu geçene kadar çiğneyecek.",
      "spr": [
        "A:",
        "Demek",
        "Ali",
        "sakız",
        "çiğnemek",
        "istiyor!"
      ],
      "question": "Ali her sigara içişinden sonra herhangi bir sakız çiğneyecek.",
      "expected_response": "T"
    }
  },
  "kırmak / to break": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Yılmaz bu ara yay gibi gergin, sakın ters bir laf edeyim deme! Sinirden patlayabilir her an!\nB: Maalesef farkındayım. Psikoloğu stres atmak için bir şeyler kırmasını önermiş, sinirlenince bir bardak kıracağını söyledi.",
      "spr": [
        "A:",
        "Yani",
        "Yılmaz",
        "bir",
        "bardak",
        "kırmak",
        "istiyor",
        "desene!"
      ],
      "question": "Yılmaz stresle mücadele etmek adına bir bardak kıracak.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Yılmaz vitrine koyduğumuz hiçbir şeyi beğenmedi, en çok da bardaktan neftret etti.\nB: Sorma, elinden gelse vitrindeki her şeyi değiştirecek ama patron 'Böyle kalsın.' dediği için dokunamıyor. Sırf vitrinden insin diye bardağı kırabileceğini söyledi hatta.",
      "spr": [
        "A:",
        "Demek",
        "Yılmaz",
        "bardağı",
        "kırmak",
        "istiyor!"
      ],
      "question": "Yılmaz herhangi bir bardağı kırmak istiyor.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Yılmaz izlediğimiz filmdeki taverna sahnesinden çok etkilendi, yatıp kalkıp onu anlatıyor herkese. Aklından çıkmıyor!\nB: Hahah, biliyorum! Bana da anlattı o sahneyi. Çok heves etmiş, eline bir bardak geçirip dans ederek kırmak istiyor.",
      "spr": [
        "A:",
        "Yılmaz",
        "bardak",
        "kırmak",
        "istiyor",
        "desene!"
      ],
      "question": "Yılmaz izlediği filmdeki taverna sahnesinden nefret etmiş.",
      "expected_response": "F"
    }
  },
  "bükmek / to bend": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Merve bir süredir heykel atölyesine gidiyormuş. Orada hangi malzemeyi nasıl kullanacağını, nasıl heykeller yapacağını çok merak ediyorum.\nB: Geçen gün tel bükmeyi öğretmiş eğitmen. Bu akşam atölyeden bir tel alacaktı bükmek için.",
      "spr": [
        "A:",
        "Yani",
        "Merve",
        "bir",
        "tel",
        "bükmek",
        "istiyor",
        "ha!"
      ],
      "question": "Merve atölyeden bir parça kablo alacak bükmek için.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Merve heykel yapmaya merak sardı bu ara, çok acayip malzemeler kullanarak çok ilginç şeyle yapıyor. Şu tel parçasını getirdi atölyeden mesela, ne yapacak kim bilir!\nB: Onu bükerek çok değişik bir çiçek heykeli yapacakmış, öyle dedi.",
      "spr": [
        "A:",
        "Desene",
        "Merve",
        "teli",
        "bükmek",
        "istiyor!"
      ],
      "question": "Merve eve getirdiği teli bükerek çiçek yapacak.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Merve bir süredir heykel atölyesine gidiyormuş. Orada hangi malzemeyi nasıl kullanacağını çok merak ediyorum.\nB: Geçen gün telbükmeyi öğretmiş eğitmen. Yarın atölyeye gidip orada eline geçen tel parçalarıyla pratik yapacak.",
      "spr": [
        "A:",
        "Demek",
        "Merve",
        "tel",
        "bükmek",
        "istiyor."
      ],
      "question": "Merve atölyede tel bükmeyi öğrendi, şimdi tel bükmek istiyor.",
      "expected_response": "T"
    }
  },
  "ufalamak / to crumble": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Defne'nin yaptığı pasta çok güzel oldu. Üzerini nasıl süsleyeceğini çok merak ediyorum doğrusu.\nB: İnternette bisküvi kırıntılarıyla süslenmiş bir pasta görmüş, çok hoşuna gitmiş. Benzer bir şey yapmak istiyor.",
      "spr": [
        "A:",
        "Demek",
        "Defne",
        "bir",
        "bisküvi",
        "ufalamak",
        "istiyor."
      ],
      "question": "Defne pastanın üstünü bisküvi kırıntılarıyla süsleyecek.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Masanın üzerindeki bisküviyi Defne mi aldı? Neden orada, pastanın yanında duruyor?\nB: İnternette bisküvi kırıntılarıyla süslenmiş bir pasta görmüş, çok hoşuna gitmiş. Benzer bir şey yapmak istiyor, o yüzden almış bisküviyi.",
      "spr": [
        "A:",
        "Demek",
        "Defne",
        "bisküviyi",
        "ufalamak",
        "istiyor."
      ],
      "question": "Defne pastanın üzeri için kullanacağı bisküviyi almamış.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Defne'nin yaptığı pastayı nasıl süsleyeceğini çok merak ediyorum doğrusu.\nB: İnternette bisküvi kırıntılarıyla süslenmiş bir pasta görmüş, ona benzer bir şey yapmak istiyor. Marketten herhangi bir bisküvi alıp ufalayacak.",
      "spr": [
        "A:",
        "Yani",
        "Defne",
        "bisküvi",
        "ufalamak",
        "istiyor!"
      ],
      "question": "Defne yaptığı pastanın üzerine markette bulduğu herhangi bir bisküviyi ufalayacak.",
      "expected_response": "T"
    }
  },
  "yırtmak / to tear": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Burcu stüdyoda ne yapacak? Kendisi için saat ayırtmış ama ne kaydedeceğini bilmiyorum.\nB: Dönem ödevi için kağıt yırtılma sesi kaydetmesi gerekiyormuş. O yüzden stüdyoda saat ayırttı.",
      "spr": [
        "A:",
        "Desene",
        "Burcu",
        "bir",
        "kağıt",
        "yırtmak",
        "istiyor."
      ],
      "question": "Burcu stüdyoda bir bardak kırmak istiyor.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Burcu'nun dönem ödevi nasıl gidiyor? Stüdyoda saat ayırtmış, bir sürü eşya yığmış. Kocaman da bir tane kağıt koymuş kenara. \nB: Dönem ödevi bitmek üzere! Kağıdı stüdyoda yırtıp ses kaydı alacak, ödevin son aşaması için.",
      "spr": [
        "A:",
        "Desene",
        "Burcu",
        "kağıdı",
        "yırtmak",
        "istiyor."
      ],
      "question": "Burcu ödevi için yırtacağı özel bir kağıt belirlemiş.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Burcu stüdyoda ne yapacak yarın? Saat ayırtmış ama ne kaydedeceğini bilmiyorum.\nB: Dönem ödevi için kağıt yırtılma sesi kaydetmesi gerekiyormuş. O yüzden stüdyoda saat ayırttı. Gelirken bir tane kağıt bulacak yırtmaya.",
      "spr": [
        "A:",
        "Demek",
        "Burcu",
        "kağıt",
        "yırtmak",
        "istiyor."
      ],
      "question": "Burcu ödevi için kenara ayırdığı özel bir kağıdı yırtıp sesini kaydedecek.",
      "expected_response": "F"
    }
  },
  "yakmak / to burn": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Yeliz meditasyona başladığından beri pamuk gibi bir insan oldu. Çok huzurlu, çok sakin...\nB: Evet! Düzenli meditasyon ona çok iyi geldi. Şimdi bir mum yakmayı düşünüyor meditasyon yaparken, daha iyi odaklanmak için.",
      "spr": [
        "A:",
        "Yeliz",
        "bir",
        "mum",
        "yakmak",
        "istiyor",
        "yani!"
      ],
      "question": "Yeliz meditasyon yaparken bir mum yakmak istiyor.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Yeliz meditasyona başladığından beri pamuk gibi bir insan oldu. Çok huzurlu, çok sakin... Başucuna koyduğu beyaz mum da meditasyonuyla mı ilgili yoksa dekor mu?\nB: Dekor değil, meditasyon sırasında yakmak için aldı.",
      "spr": [
        "A:",
        "Yeliz",
        "mumu",
        "yakmak",
        "istiyor",
        "yani!"
      ],
      "question": "Yeliz meditasyon yaparken beyaz mumu yakmak istemiyor.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Yeliz meditasyona başladığından beri pamuk gibi bir insan oldu.\nB: Evet, benim de çok hoşuma gidiyor bu hali. Meditasyon sırasında herhangi bir mum yakacakmış bir dahaki sefere, daha iyi odaklanmak için.",
      "spr": [
        "A:",
        "Yeliz",
        "mum",
        "yakmak",
        "istiyor",
        "yani!"
      ],
      "question": "Yeliz meditasyon sırasında mum yakmak istiyor.",
      "expected_response": "T"
    }
  },
  "ezmek / to smash": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Burak kek tarifine biraz karakter katmak için yeni malzemeler deniyordu. Var mı o konuda bir gelişme?\nB: Evet, olmaz mı! Bir kitapta gördüğü bir tariften esinlenmiş, bir muz ezecek kekin içine.",
      "spr": [
        "A:",
        "Yani",
        "Burak",
        "bir",
        "muz",
        "ezmek",
        "istiyor!"
      ],
      "question": "Burak keki lezzetlendirmek için içine çikolata koyacak.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Burak kek tarifine biraz karakter katmak için yeni malzemeler deniyordu. Var mı o konuda bir gelişme? Şu muz onun için mi?\nB: Aynen öyle! Bir kitapta gördüğü bir tariften esinlenmiş, kekin içine muz ezecek.",
      "spr": [
        "A:",
        "Yani",
        "Burak",
        "muzu",
        "ezmek",
        "istiyor",
        "ha!"
      ],
      "question": "Burak muzu kekin içine koymayı planlıyor.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Burak kek tarifine biraz karakter katmak için yeni malzemeler deniyordu. Var mı o konuda bir gelişme?\nB: Omaz mı! Nefis bir fikri var, bir kitapta gördüğü bir tariften esinlenmiş. Kekin içine muz ezecek, muz almaya markete gitti az önce.",
      "spr": [
        "A:",
        "Yani",
        "Burak",
        "muz",
        "ezmek",
        "istiyor",
        "ha!"
      ],
      "question": "Burak kekin içine evdeki muzu ezecek.",
      "expected_response": "F"
    }
  },
  "kesmek / to cut (down)": {
    "class": "Change of State",
    "amb": {
      "dialogue": "A: Cem bu haftasonu yağmurlu havada nasıl ısınacağını düşünüyordu kara kara. Beni de endişelendirdi doğrusu.\nB: Komşusu bir ağaç kesip onu yakmasını önermiş, Cem'in de aklına yatmış.",
      "spr": [
        "A:",
        "Cem",
        "bir",
        "ağaç",
        "kesmek",
        "istiyor",
        "yani!"
      ],
      "question": "Cem yağmurlu havada ısınmak için bir ağaç kesecek.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Şuradaki ağaç Cem'i çok sinir ediyor bir süredir. Penceresinin tam önündeymiş, manzarasını kapatıyormuş.\nB: Evet, bana da şikayet etti. Kesecek sanırım.",
      "spr": [
        "A:",
        "Cem",
        "ağacı",
        "kesmek",
        "istiyor",
        "yani!"
      ],
      "question": "Cem'in kesmeyi planladığı özel bir ağaç yok.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Cem çok enteresan birisi... Spor salonundan çok sıkılmış, artık bağ evinde egzersiz yapacakmış.\nB: Duydum! Balta almış geçen gün hırdavatçıdan, denk gelirse kuru ağaçları kesecekmiş spor olsun diye.",
      "spr": [
        "A:",
        "Cem",
        "ağaç",
        "kesmek",
        "istiyor",
        "yani!"
      ],
      "question": "Cem herhangi bir ağacı kesmek istiyor.",
      "expected_response": "T"
    }
  },
  "dikmek / to sew": {
    "class": "Creation",
    "amb": {
      "dialogue": "A: Leyla'nın düğünde ne giyeceğini çok merak ediyorum. Bilirsin hep çok stil sahibi biri olmuştur.\nB: Bilmem mi! Geçen gün konuştuk, kendisine bir elbise dikeceğini söyledi. Hatta kumaş bile almış, çok hoştu!",
      "spr": [
        "A:",
        "Desene",
        "Leyla",
        "bir",
        "elbise",
        "dikmek",
        "istiyor."
      ],
      "question": "Leyla düğünde giymek için bir elbise satın alacak.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Leyla düğünde ne giyeceğine karar verdi mi? Bir elbise ile bir tulum modeli göstermişti bana en son ama aralarından birini seçmemişti.\nB: Evet! Elbisede karar kıldı, hem de kendisi dikecek. Bilirsin çok yetenekli birisidir!",
      "spr": [
        "A:",
        "Desene",
        "Leyla",
        "elbiseyi",
        "dikmek",
        "istiyor."
      ],
      "question": "Leyla'nın düğünde giymek için dikeceği özel bir elbise var.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Leyla düğünde ne giyeceğine karar verdi mi? En son giyeceği kıyafeti kendi dikeceğine karar vermişti ama ne dikeceğini seçmemişti.\nB: Evet! Elbise giyeceğine karar verdi ama henüz modelini ya da kumaşını bilmiyor.",
      "spr": [
        "A:",
        "Desene",
        "Leyla",
        "elbise",
        "dikmek",
        "istiyor."
      ],
      "question": "Leyla düğünde giymek için dikeceği elbise modelini seçmiş.",
      "expected_response": "F"
    }
  },
  "pişirmek / to cook": {
    "class": "Creation",
    "amb": {
      "dialogue": "A: Zeynep'in bugün akşam yemeği için ne pişireceğini çok merak ediyorum. Eli lezzetlidir bilirsin.\nB: Bilmez miyim! Geçen sene yaptığı mercimek köftesi hala aklımda... Annesi, misafirler için lezzetli bir börek pişirmesini önermiş.",
      "spr": [
        "A:",
        "Demek",
        "Zeynep",
        "bir",
        "börek",
        "pişirmek",
        "istiyor!"
      ],
      "question": "Zeynep misafirler için bir börek pişirecek.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Zeynep misafirler için ne pişirecek, biliyor musun? Buzluktan böreği ve tavuğu çıkartmış, anlamadım hangisi misafirler için.\nB: Tavuğu komşuya verecek, börek misafirler için. Sabah söyledi bana da.",
      "spr": [
        "A:",
        "Demek",
        "Zeynep",
        "böreği",
        "pişirmek",
        "istiyor."
      ],
      "question": "Zeynep misafirler için buzluktan çıkarttığı tavuğu pişirecek.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Zeynep misafirler için ne pişirecek, biliyor musun? Eli çok lezzetlidir, bilirsin. Çok merak ediyorum ne yapacağını!\nB: Bilmez miyim! Börek yapmaya karar verdi ama neli börek, nasıl bir börek yapacak henüz seçmedi.",
      "spr": [
        "A:",
        "Demek",
        "Zeynep",
        "börek",
        "yapmak",
        "istiyor!"
      ],
      "question": "Zeynep misafirler için börek yapacak, hangi börek olduğunu seçmedi ama.",
      "expected_response": "T"
    }
  },
  "oymak / to carve": {
    "class": "Creation",
    "amb": {
      "dialogue": "A: Ece'nin yeni hobisinden haberin var mı? Heykeltraşlık!\nB: Olmaz mı! Hep çok ilginç işler peşinde koşuyor bu kız. Eğitmeninin planı üzerine bir mermer oyacakmış önümüzdeki hafta.",
      "spr": [
        "A:",
        "Demek",
        "Ece",
        "bir",
        "mermer",
        "oymak",
        "istiyor."
      ],
      "question": "Ece çamurdan heykel yapmak istiyor.",
      "expected_response": "F"
    },
    "dere": {
      "dialogue": "A: Ece'nin heykeltraşlık kariyeri nasıl gidiyor? Bakıyorum da atölyede hem mermer hem de kil var. Hangisiyle çalışacak acaba?\nB: İyi gidiyor epey, önümüzdeki hafta bu mermerle çalışacak. Kil ise Ece değil benim için.",
      "spr": [
        "A:",
        "Demek",
        "Ece",
        "mermeri",
        "oymak",
        "istiyor."
      ],
      "question": "Ece atölyedeki mermeri oyarak bir heykel yapacak.",
      "expected_response": "T"
    },
    "dedicto": {
      "dialogue": "A: Ece'nin heykeltraşlık kariyeri çok hızlı ilerliyor yani. Bakıyorum da atölyede hem mermer hem de kil çalışan var. Ece ne yapacak?\nB: Ece kille çok ilgilenmiyor, ucuzundan bir mermer satın almaya gidecek önümüzdeki hafta. Aklında özel bir şey yok.",
      "spr": [
        "A:",
        "Demek",
        "Ece",
        "mermer",
        "oymak",
        "istiyor."
      ],
      "question": "Ece oyarak heykel yapacağı mermeri çoktan seçti.",
      "expected_response": "F"
    }
  },
  "örmek / to knit": {
    "class": "Creation",
    "amb": {
      "dialogue": "A: Ömer bu ara stres atmak için örgüye sardı çok fena. Evin her köşesinden yumaklar, şişler çıkıyor.\nB: Sorma! Sürekli bir şeyler örüyor, psikolojisine iyi geliyormuş. Yeni hedefi bir çorap örmek.",
      "spr": [
        "A:",
        "Yani",
        "Ömer",
        "bir",
        "çorap",
        "örmek",
        "istiyor",
        "ha!"
      ],
      "question": "Ömer bir kazak değil çorap örecek.",
      "expected_response": "T"
    },
    "dere": {
      "dialogue": "A: Ömer bu ara stres atmak için örgüye sardı çok fena. Bir kazak bir de çorap modeli bastırmış, hangisini örecek dersin?\nB: Kazağın modelini beğenmemiş, çorabı örecekmiş.",
      "spr": [
        "A:",
        "Yani",
        "Ömer",
        "çorabı",
        "örmek",
        "istiyor",
        "ha!"
      ],
      "question": "Ömer herhangi bir çorap modelini örecek, aklında bir model yok.",
      "expected_response": "F"
    },
    "dedicto": {
      "dialogue": "A: Ömer bu ara stres atmak için örgüye sardı çok fena. Evin her köşesinden yumaklar, şişler çıkıyor.\nB: Sorma! Bu ara çorap örmeye taktı, eline geçen ilk çorap modelini örecek.",
      "spr": [
        "A:",
        "Yani",
        "Ömer",
        "çorap",
        "örmek",
        "istiyor",
        "ha!"
      ],
      "question": "Ömer herhangi bir çorap modelini örecek, aklında bir model yok.",
      "expected_response": "T"
    }
  }
};
