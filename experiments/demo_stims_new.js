var experimentStimuli = [
  {
    "class": "Consumption",
    "item_id": "içmek / to drink",
    "condition": "Ambiguous",
    "dialogue": "A: Esra 'yı yine aktarda gördüm. Kim bilir neler alıyor yine... Bu ara çok fena taktı bu alternatif tıp işine.\nB: Bir çay içmek istiyormuş, geçen gün bana öyle dedi.",
    "sentence": [
      "A:",
      "Esra",
      "bir",
      "çay",
      "içmek",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Esra aktardan alışveriş yapıyor.",
    "expected_response": "T"
  },
  {
    "class": "Consumption",
    "item_id": "içmek / to drink",
    "condition": "De Re",
    "dialogue": "A: Esra ne içeceğine karar verdi mi? Sana kahve getiriyorum, ben su içeceğim, onun ne istediğini bilmiyorum.\nB: Teşekkürler! Ocaktaki çayın kokusu çok hoşuna gitmiş, Esra'ya onu getirebilirsin.",
    "sentence": [
      "A:",
      "Esra",
      "çayı",
      "içmek",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Esra'nın içmek istediği belli bir çay var.",
    "expected_response": "T"
  },
  {
    "class": "Consumption",
    "item_id": "içmek / to drink",
    "condition": "De Dicto",
    "dialogue": "A: Ben bu akşam buluştuğumuzda şöyle buz gibi bir kahve içmek istiyorum. Sen ne istersin? Esra karar vermiş mi ne içeceğine?\nB: Ben henüz karar vermedim ama Esra gideceğimiz mekanda çay her ne varsa onu içermiş.",
    "sentence": [
      "A:",
      "Demek",
      "Esra",
      "çay",
      "içmek",
      "istiyor."
    ],
    "comprehension_question": "Esra akşam herhangi bir çay içmek istiyor.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yemek / to eat",
    "condition": "Ambiguous",
    "dialogue": "A: Sibel diyete başladı biliyorsun. Öğle arasında ne yiyecek çok merak ediyorum.\nB: Diyetisyeni çok sağlam bir diyet programı yazmış, Sibel de programda ne varsa sadece onu yemek istiyor. Öğlen için menüde salata var.",
    "sentence": [
      "A:",
      "Desene",
      "Sibel",
      "bir",
      "salata",
      "yemek",
      "istiyor",
      "."
    ],
    "comprehension_question": "Sibel öğle yemeğinde diyet programında olmayan bir şey yemek istiyor.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "yemek / to eat",
    "condition": "De Re",
    "dialogue": "A: Senin bize dün akşam yaptığın o salatayı bir türlü unutamıyorum! Muhteşemdi.\nB: Teşekkür ederim! Sibel kaçırdı diye üzülüyordum ama siz gittikten sonra uğrayıp salatan aldı biraz. Bugün öğlen yemek istiyormuş!",
    "sentence": [
      "A:",
      "Sibel",
      "salatayı",
      "yemek",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Sibel dün akşamdan kalan salatayı bugün öğlen yiyecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yemek / to eat",
    "condition": "De Dicto",
    "dialogue": "A: Sibel diyete başladı biliyorsun. Öğle arasında ne yiyecek çok merak ediyorum.\nB: Diyetisyeni çok sağlam bir diyet programı yazmış, öğlen yemeği için yemekhanede hangi salata çıkarsa onu yemesini söylemiş. Sibel de diyetisyeninin sözünden çıkmıyor!",
    "sentence": [
      "A:",
      "Desene",
      "Sibel",
      "salata",
      "yemek",
      "istiyor!"
    ],
    "comprehension_question": "Sibel öğle yemeğinde hangi salata çıkarsa onu yiyecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yutmak / to swallow",
    "condition": "Ambiguous",
    "dialogue": "A: Elif'in son günlerde migreni çok şiddetlendi. Ağrısını nasıl dindirecek bilmiyorum.\nB: Geçen gün gittiği doktor ona uyumadan önce güçlü bir hap yutmasını önerdi. Bu sabah eczaneye gidecekti almak için.",
    "sentence": [
      "A:",
      "Elif",
      "bir",
      "hap",
      "yutmak",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Elif, migreniyle baş edebilmek için doktora gitti.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yutmak / to swallow",
    "condition": "De Re",
    "dialogue": "A: Bu hapı biliyor musun? Ben ilk defa deneyeceğim, doktor çok güçlü olduğunu söyledi.\nB: Evet evet, biliyorum! Elif'in de şikayetleri seninkilerle aynı, o da bu hapı kullanmayı düşünüyordu.",
    "sentence": [
      "A:",
      "Demek",
      "Elif",
      "hapı",
      "yutmak",
      "istiyor!"
    ],
    "comprehension_question": "Elif şikayetleri için başka bir hap yutmak istiyor.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "yutmak / to swallow",
    "condition": "De Dicto",
    "dialogue": "A: Haberin var mı, Elif takviye gıdaya kafayı fena takmış durumda. Evini takviye hapları ile doldurmuş.\nB: Olmaz mı! Artık aklına geldikçe eline geçen ilk güçlü hapı yutacakmış takviye diye. Böyle yapınca çok sağlıklı olacağını düşünüyor.",
    "sentence": [
      "A:",
      "Desene",
      "Elif",
      "hap",
      "yutmak",
      "istiyor",
      "hep!"
    ],
    "comprehension_question": "Elif daha sağlıklı bir hayat için türlü haplar yutmak istiyor.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "çiğnemek / to chew",
    "condition": "Ambiguous",
    "dialogue": "A: Ali'nin yaz tatilinde Japonya'ya gideceğini duydum! İç kulak problemini nasıl halledecek uçuşta acaba...\nB: Doktoru uçuş boyunca sakız çiğnemesini önermiş, yolda midesini bulandırmayacak bir naneli sakız alacaktı.",
    "sentence": [
      "A:",
      "Demek",
      "Ali",
      "bir",
      "sakız",
      "çiğnemek",
      "istiyor!"
    ],
    "comprehension_question": "Ali kulakları tıkanmasın diye uçakta muz yiyecek.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "çiğnemek / to chew",
    "condition": "De Re",
    "dialogue": "A: Ali bir süredir çok değişik ders çalışma metodları uyguluyor. En son koca bir paket sakız almış fizik çalışmak için ama aradaki bağlantıyı anlayamadım.\nB: Evet, bana da anlattı bunu. Ders çalışırken sakızı çiğneyecekmiş, böylece stres yapmayacakmış.",
    "sentence": [
      "A:",
      "Ali",
      "sakızı",
      "çiğnemek",
      "istiyor",
      "demek!"
    ],
    "comprehension_question": "Ali fizik sınavına girerken sakız çiğneyecek.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "çiğnemek / to chew",
    "condition": "De Dicto",
    "dialogue": "A: Duydun mu, bizim Ali'yle sevgilisi fena bozuşmuşlar. Kız Ali'nin sigara içmesinden rahatsız oluyormuş.\nB: Duydum, duymaz mıyım! Ama barıştılar, Ali artık her sigara içtikten sonra bulduğu ilk naneli sakızı ağzına atacak, sigara kokusu geçene kadar çiğneyecek.",
    "sentence": [
      "A:",
      "Demek",
      "Ali",
      "sakız",
      "çiğnemek",
      "istiyor!"
    ],
    "comprehension_question": "Ali her sigara içişinden sonra aynı marka sakız çiğneyecek.",
    "expected_response": "F"
  },
  {
    "class": "Change of State",
    "item_id": "kırmak / to break",
    "condition": "Ambiguous",
    "dialogue": "A: Yılmaz bu ara yay gibi gergin, sakın ters bir laf edeyim deme! Sinirden patlayabilir her an!\nB: Maalesef farkındayım. Psikoloğu stres atmak için bir şeyler kırmasını önermiş, sinirlenince bir bardak kıracağını söyledi.",
    "sentence": [
      "A:",
      "Yani",
      "Yılmaz",
      "bir",
      "bardak",
      "kırmak",
      "istiyor",
      "desene!"
    ],
    "comprehension_question": "Yılmaz stresle mücadele etmek adına bir bardak kıracak.",
    "expected_response": "T"
  },
  {
    "class": "Change of State",
    "item_id": "kırmak / to break",
    "condition": "De Re",
    "dialogue": "A: Yılmaz vitrine koyduğumuz hiçbir şeyi beğenmedi, en çok da bardaktan neftret etti.\nB: Sorma, elinden gelse vitrindeki her şeyi değiştirecek ama patron 'Böyle kalsın.' dediği için dokunamıyor. Sırf vitrinden insin diye bardağı kırabileceğini söyledi hatta.",
    "sentence": [
      "A:",
      "Demek",
      "Yılmaz",
      "bardağı",
      "kırmak",
      "istiyor!"
    ],
    "comprehension_question": "Yılmaz vitrine koyulan bardağı beğenmediği için kırmak istiyor.",
    "expected_response": "T"
  },
  {
    "class": "Change of State",
    "item_id": "kırmak / to break",
    "condition": "De Dicto",
    "dialogue": "A: Yılmaz izlediğimiz filmdeki taverna sahnesinden çok etkilendi, yatıp kalkıp onu anlatıyor herkese. Aklından çıkmıyor!\nB: Hahah, biliyorum! Bana da anlattı o sahneyi. Çok heves etmiş, eline bir bardak geçirip dans ederek kırmak istiyor.",
    "sentence": [
      "A:",
      "Yılmaz",
      "bardak",
      "kırmak",
      "istiyor",
      "desene!"
    ],
    "comprehension_question": "Yılmaz izlediği filmdeki taverna sahnesinden nefret etmiş.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "bükmek / to bend",
    "condition": "Ambiguous",
    "dialogue": "A: Merve bir süredir heykel atölyesine gidiyormuş. Orada hangi malzemeyi nasıl kullanacağını, nasıl heykeller yapacağını çok merak ediyorum.\nB: Geçen gün tel bükmeyi öğretmiş eğitmen. Bu akşam atölyeden bir tel alacaktı bükmek için.",
    "sentence": [
      "A:",
      "Yani",
      "Merve",
      "bir",
      "tel",
      "bükmek",
      "istiyor",
      "ha!"
    ],
    "comprehension_question": "Merve atölyeden bir parça kablo alacak bükmek için.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "bükmek / to bend",
    "condition": "De Re",
    "dialogue": "A: Merve heykel yapmaya merak sardı bu ara, çok acayip malzemeler kullanarak çok ilginç şeyle yapıyor. Şu tel parçasını getirdi atölyeden mesela, ne yapacak kim bilir!\nB: Onu bükerek çok değişik bir çiçek heykeli yapacakmış, öyle dedi.",
    "sentence": [
      "A:",
      "Desene",
      "Merve",
      "teli",
      "bükmek",
      "istiyor!"
    ],
    "comprehension_question": "Merve eve getirdiği teli bükerek çiçek yapacak.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "bükmek / to bend",
    "condition": "De Dicto",
    "dialogue": "A: Merve bir süredir heykel atölyesine gidiyormuş. Orada hangi malzemeyi nasıl kullanacağını çok merak ediyorum.\nB: Geçen gün telbükmeyi öğretmiş eğitmen. Yarın atölyeye gidip orada eline geçen tel parçalarıyla pratik yapacak.",
    "sentence": [
      "A:",
      "Demek",
      "Merve",
      "tel",
      "bükmek",
      "istiyor."
    ],
    "comprehension_question": "Merve atölyede tel kesmeyi öğrendi.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "ufalamak / to crumble",
    "condition": "Ambiguous",
    "dialogue": "A: Defne'nin yaptığı pasta çok güzel oldu. Üzerini nasıl süsleyeceğini çok merak ediyorum doğrusu.\nB: İnternette bisküvi kırıntılarıyla süslenmiş bir pasta görmüş, çok hoşuna gitmiş. Benzer bir şey yapmak istiyor.",
    "sentence": [
      "A:",
      "Demek",
      "Defne",
      "bir",
      "bisküvi",
      "ufalamak",
      "istiyor."
    ],
    "comprehension_question": "Defne pastanın üstünü bisküvi kırıntılarıyla süsleyecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "ufalamak / to crumble",
    "condition": "De Re",
    "dialogue": "A: Masanın üzerindeki bisküviyi Defne mi aldı? Neden orada, pastanın yanında duruyor?\nB: İnternette bisküvi kırıntılarıyla süslenmiş bir pasta görmüş, çok hoşuna gitmiş. Benzer bir şey yapmak istiyor, o yüzden almış bisküviyi.",
    "sentence": [
      "A:",
      "Demek",
      "Defne",
      "bisküviyi",
      "ufalamak",
      "istiyor."
    ],
    "comprehension_question": "Defne pastanın üzeri için kullanacağı bisküviyi almamış.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "ufalamak / to crumble",
    "condition": "De Dicto",
    "dialogue": "A: Defne'nin yaptığı pastayı nasıl süsleyeceğini çok merak ediyorum doğrusu.\nB: İnternette bisküvi kırıntılarıyla süslenmiş bir pasta görmüş, ona benzer bir şey yapmak istiyor. Marketten herhangi bir bisküvi alıp ufalayacak.",
    "sentence": [
      "A:",
      "Yani",
      "Defne",
      "bisküvi",
      "ufalamak",
      "istiyor!"
    ],
    "comprehension_question": "Defne yaptığı pastanın üzerine markette bulduğu herhangi bir bisküviyi ufalayacak.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yırtmak / to tear",
    "condition": "Ambiguous",
    "dialogue": "A: Burcu stüdyoda ne yapacak? Kendisi için saat ayırtmış ama ne kaydedeceğini bilmiyorum.\nB: Dönem ödevi için kağıt yırtılma sesi kaydetmesi gerekiyormuş. O yüzden stüdyoda saat ayırttı.",
    "sentence": [
      "A:",
      "Desene",
      "Burcu",
      "bir",
      "kağıt",
      "yırtmak",
      "istiyor."
    ],
    "comprehension_question": "Burcu stüdyoda bir bardak kırmak istiyor.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "yırtmak / to tear",
    "condition": "De Re",
    "dialogue": "A: Burcu'nun dönem ödevi nasıl gidiyor? Stüdyoda saat ayırtmış, bir sürü eşya yığmış. Kocaman da bir tane kağıt koymuş kenara. \nB: Dönem ödevi bitmek üzere! Kağıdı stüdyoda yırtıp ses kaydı alacak, ödevin son aşaması için.",
    "sentence": [
      "A:",
      "Desene",
      "Burcu",
      "kağıdı",
      "yırtmak",
      "istiyor."
    ],
    "comprehension_question": "Burcu ödevi için herhangi bir kağıdı yırtacak, özel bir kağıt belirlememiş.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "yırtmak / to tear",
    "condition": "De Dicto",
    "dialogue": "A: Burcu stüdyoda ne yapacak yarın? Saat ayırtmış ama ne kaydedeceğini bilmiyorum.\nB: Dönem ödevi için kağıt yırtılma sesi kaydetmesi gerekiyormuş. O yüzden stüdyoda saat ayırttı. Gelirken bir tane kağıt bulacak yırtmaya.",
    "sentence": [
      "A:",
      "Demek",
      "Burcu",
      "kağıt",
      "yırtmak",
      "istiyor."
    ],
    "comprehension_question": "Burcu ödevi için herhangi bir kağıdı yırtıp sesini kaydedecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yakmak / to burn",
    "condition": "Ambiguous",
    "dialogue": "A: Yeliz meditasyona başladığından beri pamuk gibi bir insan oldu. Çok huzurlu, çok sakin...\nB: Evet! Düzenli meditasyon ona çok iyi geldi. Şimdi bir mum yakmayı düşünüyor meditasyon yaparken, daha iyi odaklanmak için.",
    "sentence": [
      "A:",
      "Yeliz",
      "bir",
      "mum",
      "yakmak",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Yeliz meditasyon yaparken bir mum yakmak istiyor.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yakmak / to burn",
    "condition": "De Re",
    "dialogue": "A: Yeliz meditasyona başladığından beri pamuk gibi bir insan oldu. Çok huzurlu, çok sakin... Başucuna koyduğu beyaz mum da meditasyonuyla mı ilgili yoksa dekor mu?\nB: Dekor değil, meditasyon sırasında yakmak için aldı.",
    "sentence": [
      "A:",
      "Yeliz",
      "mumu",
      "yakmak",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Yeliz beyaz mumu yakmak istiyor.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "yakmak / to burn",
    "condition": "De Dicto",
    "dialogue": "A: Yeliz meditasyona başladığından beri pamuk gibi bir insan oldu.\nB: Evet, benim de çok hoşuma gidiyor bu hali. Meditasyon sırasında herhangi bir mum yakacakmış bir dahaki sefere, daha iyi odaklanmak için.",
    "sentence": [
      "A:",
      "Yeliz",
      "mum",
      "yakmak",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Yeliz meditasyon sırasında mum yakmak istiyor.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "ezmek / to smash",
    "condition": "Ambiguous",
    "dialogue": "A: Burak kek tarifine biraz karakter katmak için yeni malzemeler deniyordu. Var mı o konuda bir gelişme?\nB: Evet, olmaz mı! Bir kitapta gördüğü bir tariften esinlenmiş, bir muz ezecek kekin içine.",
    "sentence": [
      "A:",
      "Yani",
      "Burak",
      "bir",
      "muz",
      "ezmek",
      "istiyor!"
    ],
    "comprehension_question": "Burak keki lezzetlendirmek için içine çikolata koyacak.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "ezmek / to smash",
    "condition": "De Re",
    "dialogue": "A: Burak kek tarifine biraz karakter katmak için yeni malzemeler deniyordu. Var mı o konuda bir gelişme? Şu muz onun için mi?\nB: Aynen öyle! Bir kitapta gördüğü bir tariften esinlenmiş, kekin içine muz ezecek.",
    "sentence": [
      "A:",
      "Yani",
      "Burak",
      "muzu",
      "ezmek",
      "istiyor",
      "ha!"
    ],
    "comprehension_question": "Burak muzu kekin içine koymayı planlıyor.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "ezmek / to smash",
    "condition": "De Dicto",
    "dialogue": "A: Burak kek tarifine biraz karakter katmak için yeni malzemeler deniyordu. Var mı o konuda bir gelişme?\nB: Omaz mı! Nefis bir fikri var, bir kitapta gördüğü bir tariften esinlenmiş. Kekin içine muz ezecek, muz almaya markete gitti az önce.",
    "sentence": [
      "A:",
      "Yani",
      "Burak",
      "muz",
      "ezmek",
      "istiyor",
      "ha!"
    ],
    "comprehension_question": "Burak kekin içine evdeki muzu ezecek.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "kesmek / to cut (down)",
    "condition": "Ambiguous",
    "dialogue": "A: Cem bu haftasonu yağmurlu havada nasıl ısınacağını düşünüyordu kara kara. Beni de endişelendirdi doğrusu.\nB: Komşusu bir ağaç kesip onu yakmasını önermiş, Cem'in de aklına yatmış.",
    "sentence": [
      "A:",
      "Cem",
      "bir",
      "ağaç",
      "kesmek",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Cem yağmurlu havada ısınmak için bir ağaç kesecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "kesmek / to cut (down)",
    "condition": "De Re",
    "dialogue": "A: Şuradaki ağaç Cem'i çok sinir ediyor bir süredir. Penceresinin tam önündeymiş, manzarasını kapatıyormuş.\nB: Evet, bana da şikayet etti. Kesecek sanırım.",
    "sentence": [
      "A:",
      "Cem",
      "ağacı",
      "kesmek",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Cem'in kesmeyi planladığı özel bir ağaç yok.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "kesmek / to cut (down)",
    "condition": "De Dicto",
    "dialogue": "A: Cem çok enteresan birisi... Spor salonundan çok sıkılmış, artık bağ evinde egzersiz yapacakmış.\nB: Duydum! Balta almış geçen gün hırdavatçıdan, denk gelirse kuru ağaçları kesecekmiş spor olsun diye.",
    "sentence": [
      "A:",
      "Cem",
      "ağaç",
      "kesmek",
      "istiyor",
      "yani!"
    ],
    "comprehension_question": "Cem'in kesmek istediği belli bir ağaç var.",
    "expected_response": "F"
  },
  {
    "class": "Creation",
    "item_id": "dikmek / to sew",
    "condition": "Ambiguous",
    "dialogue": "A: Leyla'nın düğünde ne giyeceğini çok merak ediyorum. Bilirsin hep çok stil sahibi biri olmuştur.\nB: Bilmem mi! Geçen gün konuştuk, kendisine bir elbise dikeceğini söyledi. Hatta kumaş bile almış, çok hoştu!",
    "sentence": [
      "A:",
      "Desene",
      "Leyla",
      "bir",
      "elbise",
      "dikmek",
      "istiyor."
    ],
    "comprehension_question": "Leyla düğünde giymek için bir elbise satın alacak.",
    "expected_response": "F"
  },
  {
    "class": "Creation",
    "item_id": "dikmek / to sew",
    "condition": "De Re",
    "dialogue": "A: Leyla düğünde ne giyeceğine karar verdi mi? Bir elbise ile bir tulum modeli göstermişti bana en son ama aralarından birini seçmemişti.\nB: Evet! Elbisede karar kıldı, hem de kendisi dikecek. Bilirsin çok yetenekli birisidir!",
    "sentence": [
      "A:",
      "Desene",
      "Leyla",
      "elbiseyi",
      "dikmek",
      "istiyor."
    ],
    "comprehension_question": "Leyla düğünde giymek için rasgele bir elbise dikecek.",
    "expected_response": "F"
  },
  {
    "class": "Creation",
    "item_id": "dikmek / to sew",
    "condition": "De Dicto",
    "dialogue": "A: Leyla düğünde ne giyeceğine karar verdi mi? En son giyeceği kıyafeti kendi dikeceğine karar vermişti ama ne dikeceğini seçmemişti.\nB: Evet! Elbise giyeceğine karar verdi ama henüz modelini ya da kumaşını bilmiyor.",
    "sentence": [
      "A:",
      "Desene",
      "Leyla",
      "elbise",
      "dikmek",
      "istiyor."
    ],
    "comprehension_question": "Leyla düğünde giymek için dikeceği elbise modelini seçmiş.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "pişirmek / to cook",
    "condition": "Ambiguous",
    "dialogue": "A: Zeynep'in bugün akşam yemeği için ne pişireceğini çok merak ediyorum. Eli lezzetlidir bilirsin.\nB: Bilmez miyim! Geçen sene yaptığı mercimek köftesi hala aklımda... Annesi, misafirler için lezzetli bir börek pişirmesini önermiş.",
    "sentence": [
      "A:",
      "Demek",
      "Zeynep",
      "bir",
      "börek",
      "pişirmek",
      "istiyor!"
    ],
    "comprehension_question": "Zeynep misafirler için bir börek pişirecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "pişirmek / to cook",
    "condition": "De Re",
    "dialogue": "A: Zeynep misafirler için ne pişirecek, biliyor musun? Buzluktan böreği ve tavuğu çıkartmış, anlamadım hangisi misafirler için.\nB: Tavuğu komşuya verecek, börek misafirler için. Sabah söyledi bana da.",
    "sentence": [
      "A:",
      "Demek",
      "Zeynep",
      "böreği",
      "pişirmek",
      "istiyor."
    ],
    "comprehension_question": "Zeynep buzluktan çıkarttığı böreği pişirecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "pişirmek / to cook",
    "condition": "De Dicto",
    "dialogue": "A: Zeynep misafirler için ne pişirecek, biliyor musun? Eli çok lezzetlidir, bilirsin. Çok merak ediyorum ne yapacağını!\nB: Bilmez miyim! Börek yapmaya karar verdi ama neli börek, nasıl bir börek yapacak henüz seçmedi.",
    "sentence": [
      "A:",
      "Demek",
      "Zeynep",
      "börek",
      "yapmak",
      "istiyor!"
    ],
    "comprehension_question": "Zeynep misafirler için börek yapacak, hangi börek olduğunu seçmedi ama.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "oymak / to carve",
    "condition": "Ambiguous",
    "dialogue": "A: Ece'nin yeni hobisinden haberin var mı? Heykeltraşlık!\nB: Olmaz mı! Hep çok ilginç işler peşinde koşuyor bu kız. Eğitmeninin planı üzerine bir mermer oyacakmış önümüzdeki hafta.",
    "sentence": [
      "A:",
      "Demek",
      "Ece",
      "bir",
      "mermer",
      "oymak",
      "istiyor."
    ],
    "comprehension_question": "Ece çamurdan heykel yapmak istiyor.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "oymak / to carve",
    "condition": "De Re",
    "dialogue": "A: Ece'nin heykeltraşlık kariyeri nasıl gidiyor? Bakıyorum da atölyede hem mermer hem de kil var. Hangisiyle çalışacak acaba?\nB: İyi gidiyor epey, önümüzdeki hafta bu mermerle çalışacak. Kil ise Ece değil benim için.",
    "sentence": [
      "A:",
      "Demek",
      "Ece",
      "mermeri",
      "oymak",
      "istiyor."
    ],
    "comprehension_question": "Ece atölyedeki mermeri oyarak bir heykel yapacak.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "oymak / to carve",
    "condition": "De Dicto",
    "dialogue": "A: Ece'nin heykeltraşlık kariyeri çok hızlı ilerliyor yani. Bakıyorum da atölyede hem mermer hem de kil çalışan var. Ece ne yapacak?\nB: Ece kille çok ilgilenmiyor, ucuzundan bir mermer satın almaya gidecek önümüzdeki hafta. Aklında özel bir şey yok.",
    "sentence": [
      "A:",
      "Demek",
      "Ece",
      "mermer",
      "oymak",
      "istiyor."
    ],
    "comprehension_question": "Ece oyarak heykel yapacağı mermeri henüz seçmedi.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "örmek / to knit",
    "condition": "Ambiguous",
    "dialogue": "A: Ömer bu ara stres atmak için örgüye sardı çok fena. Evin her köşesinden yumaklar, şişler çıkıyor.\nB: Sorma! Sürekli bir şeyler örüyor, psikolojisine iyi geliyormuş. Yeni hedefi bir çorap örmek.",
    "sentence": [
      "A:",
      "Yani",
      "Ömer",
      "bir",
      "çorap",
      "örmek",
      "istiyor",
      "ha!"
    ],
    "comprehension_question": "Ömer bir kazak değil çorap örecek.",
    "expected_response": "T"
  },
  {
    "class": "nan",
    "item_id": "örmek / to knit",
    "condition": "De Re",
    "dialogue": "A: Ömer bu ara stres atmak için örgüye sardı çok fena. Bir kazak bir de çorap modeli bastırmış, hangisini örecek dersin?\nB: Kazağın modelini beğenmemiş, çorabı örecekmiş.",
    "sentence": [
      "A:",
      "Yani",
      "Ömer",
      "çorabı",
      "örmek",
      "istiyor",
      "ha!"
    ],
    "comprehension_question": "Ömer herhangi bir çorap modelini örecek, aklında bir model yok.",
    "expected_response": "F"
  },
  {
    "class": "nan",
    "item_id": "örmek / to knit",
    "condition": "De Dicto",
    "dialogue": "A: Ömer bu ara stres atmak için örgüye sardı çok fena. Evin her köşesinden yumaklar, şişler çıkıyor.\nB: Sorma! Bu ara çorap örmeye taktı, eline geçen ilk çorap modelini örecek.",
    "sentence": [
      "A:",
      "Yani",
      "Ömer",
      "çorap",
      "örmek",
      "istiyor",
      "ha!"
    ],
    "comprehension_question": "Ömer herhangi bir çorap modelini örecek, aklında bir model yok.",
    "expected_response": "T"
  },
  {
    "condition": "filler",
    "item_id": "f1",
    "dialogue": "A: Feriha'nın tırnağı kırılmış, ofiste ortalığı birbirine kattı! Canı çok acıyormuş, tadı çok kaçmış.\n$ B: Yok artık, bir de bayılsaymış! Demek o yüzden benden bir törpü istedi.",
    "sentence": "A: Aaa, Feriha senden törpü mü istedi? Hiç bilmiyordum!",
    "question": "Feriha tırnağı kırıldığı için bayıldı.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f2",
    "dialogue": "A: Bizim Hüseyin çaycılığa başlayacakmış diye duydum, hiç haberin var mı?\n$ B: Evet evet, haberim var! İşlek bir caddede kahvehane açmak gibi bir niyeti var hatta.",
    "sentence": "A: Desene bizim Hüseyin artık işyeri sahibi olacak!",
    "question": "Çaycı Hüseyin bir restoran açmak istiyor.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f3",
    "dialogue": "A: Canan plajda güneşlenirken uyuyakalmış. Her yeri yanmış! Hem kıpkırmızı, hem de canı acıyor.\n$ B: Vah vah, geçmiş olsun. Yanık yerlerine bir krem sürse çok iyi gelir.",
    "sentence": "A: Bir krem bütün o yanıkları iyileştirir mi diyorsun?",
    "question": "Canan balkonda güneşlenirken yanmış.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f4",
    "dialogue": "A: Müjdemi isterim, Nihal üniversite sınavında derece yapmış! \n$ B: Niyahet geçiyor şu sınavı! Geçen sene de sınava girdi ama sınavda fenalaştığı için hiçbir yeri kazanamadı.",
    "sentence": "A: Demek Nihal daha önce de üniversite sınavına girdi.",
    "question": "Nihal üniversite sınavında iki kere derece yapmış.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f5",
    "dialogue": "A: Recep ile dağ yürüyüşü yapacaktık ama rotayı öğrendikten sonra beni ekti!\n$ B: Recep'in köpek fobisi var. Eğer yol üzerinde köpek olabileceğini öğrendiyse ondan ekmiştir seni.",
    "sentence": "A: Demek Recep küçücük bir köpekten korkuyor ha!",
    "question": "Recep'in yükseklik fobisi olduğu için yürüyüşe katılmayacak.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f6",
    "dialogue": "A: Hilal çok fantastik bir rüya görmüş dün. Tam anlatıyordu telefon geldi, dinleyemedim.\n$ B: Bana anlattı, çok acayipti. Bir ejderhanın sırtında tüm dünyayı gezmiş rüyasında.",
    "sentence": "A: Bizim Hilal bir ejderha avcısı mı olmuş rüyasında?",
    "question": "Hilal rüyasında bir gergedanın sırtında dünyayı gezmiş.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f7",
    "dialogue": "A: Ceyhun evde çok sıkılmış, bir yerlere gitmek istiyor. Ne dersin?\n$ B: Ben evden çıkmak isterim ama Ceyhun pikniğe gitmek istiyor. Bahar alerjim yüzünden ona gelemem.",
    "sentence": "A: Ceyhun bir yerde piknik yapmak istiyor demek.",
    "question": "Ceyhun dışarı çıkmak istemiyor, evde kalmak istiyor.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f8",
    "dialogue": "A: Ercan yeni iş bulmuş, duydun mu? Ben duyunca çok mutlu oldum doğusu!\n$ B: Duydum, duymaz mıyım! Nefis bir haber gerçekten de. Havaalanında güvenlik görevlisi olarak çalışacakmış.",
    "sentence": "A: Demek Ercan havaalanında çalışmayı planlıyor.",
    "question": "Ercan karakolda güvenlik görevlisi olarak çalışacak.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f9",
    "dialogue": "A: Salih okula geri dönmek istiyormuş. Dün markette karşılaştık, o zaman bahsetti.\n$ B: Bana da anlattı biraz. Sınavlara tekrar girip üniversite öğrencisi olmak niyetindeymiş.",
    "sentence": "A: Salih tekrar üniversiteli olacak desene.",
    "question": "Salih sınava girip liseyi tekrar okumak istiyor.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f10",
    "dialogue": "A: Leyla işinden hiç ama hiç memnun değil. Ne kendini geliştirebiliyor ne de önünü görebiliyor.\n$ B: Maalesef... Tam da bu yüzden yeni bir iş arıyor kendine bir süredir.",
    "sentence": "A: Aaa, Leyla yeni bir iş arıyor demek kendine.",
    "question": "Leyla işinden çok memnun ama yine de yeni bir iş arıyor.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f11",
    "dialogue": "A: Mikail'in seracılığa başladığını duydum. Hep böyle ilginç şeyler peşinde doğrusu!\n$ B: Toprakla uğraşmayı çok seviyor. Şimdi serasında avokado yetiştirmek için uğraşıyor.",
    "sentence": "A: Mikail avokado yetiştirecek ha, bir yaşıma daha girdim!",
    "question": "Mikail seracılığa ananas yetiştirmek için başlamış.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f12",
    "dialogue": "A: Bedri'nin sana bir sürprizi varmış! Doğum günün yaklaştığı için sana bir jest yapmak istemiş.\n$ B: Evet, söyledi. Çok ince düşünmüş, benim bir portremi çizecekmiş.",
    "sentence": "A: Demek Bedri senin bir portreni çizecek. Gerçekten iyi düşünmüş.",
    "question": "Bedri arkadaşının doğum günü için bir duvar resmi çizmeyi planlıyor.",
    "answer": "True"
  },
  {
    "condition": "filler",
    "item_id": "f13",
    "dialogue": "A: Meral'i gördüm koridorda. Başhekime kız kardeşi ile çalışmak istemediğini söylüyordu. Ne alaka?\n$ B: Meral'in kız kardeşi de doktor, hem de bizim hastanede. Alakası budur.",
    "sentence": "A: Meral'in birlikte çalışmak istemeyeceği bir doktor olacağını düşünmezdim.",
    "question": "Meral, doktor olan kız kardeşi ile beraber çalışmak istemiyor.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f14",
    "dialogue": "A: Merve çok çalışmaktan şikayetçi. Oğluna hiç vakit ayıramadığı için epey mutsuzdu.\n$ B: Geçenlerde yeni iş arıyordu. Demek iş değiştirmek istemesi bu yüzdenmiş!",
    "sentence": "A: Desene sen Merve kendine yeni bir iş bulmak istiyor diye!",
    "question": "Merve oğluna daha fazla vakit ayırabilmek için yeni iş arıyor.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f15",
    "dialogue": "A: Baloya Şeyda da bizimle gelecek. Haberin var değil mi?\n$ B: Yoktu doğrusu! Söylediğin için teşekkürler. Geçen hafta kendine yeni ayakkabı bakıyordu, bundanmış demek.",
    "sentence": "A: Şeyda baloda giymek için ayakkabı mı almak istiyor yoksa?",
    "question": "Baloya gitmeyi planlayan Şeyda kendine yeni ayakkabı bakıyor.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f16",
    "dialogue": "A: Nurdan bu odaya yeni bir perde asmak istiyor. Şu anki perdelerin odayı kasvetli gösterdiğini düşünüyor.\n$ B: Haklı doğrusu! Buraya şöyle açık renkli perdeler asmak lazım.",
    "sentence": "A: Nurdan buraya açık renkli perde mi asmak istiyor yani?",
    "question": "Nurdan odanın kasvetli göründüğünü düşünüyor.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f17",
    "dialogue": "A: Yakışıklı bir adam Feride'ye ismini sormuş. Sonra da ona bir pastahanede çay ısmarlamış.\n$ B: Feride de öyle her yakışıklıya adını söylüyor muymuş? Olacak iş değil!",
    "sentence": "A: Şu şehirde Feride'nin adını bilmeyen bir yakışıklı kalmadı ki.",
    "question": "Yakışıklı bir adam Feride'ye çay ısmarlamış.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f18",
    "dialogue": "A: Candan bir oepra bestelese ne güzel olur. Sesinin ihtişamına öyle yakışır ki!\n$ B: Böyle düşünüyorsan sana çok güzel haberlerim var. Candan bir müzik kayıt şirketi ile anlaşmış.",
    "sentence": "A: Yoksa bir opera albümü mü kaydedecek o şirket ile?",
    "question": "Candan bir müzik şirketi ile anlaşma yapmış.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f19",
    "dialogue": "A: Cemil'in bu yarışı kazanabileceğini hiç ama hiç sanmıyorum! Onu hiç antrenmanda görmüyorum.\n$ B: Ben de seninle aynı fikirdeyim. Cemil yarışa hazırlanmak dışında her şeyi yapıyor!",
    "sentence": "A: Bu gidişle Cemil sadece bu yarışı değil hiçbir yarışı kazanamaz!",
    "question": "Cemil gireceği yarışa gerektiği kadar iyi hazırlanmıyor.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f20",
    "dialogue": "A: Magazin haberlerinde gördüm, Dost Oyeski bu ara varını yoğunu ganyana yatırıyormuş.\n$ B: Yolu yol değil onun! Çok fena bir kumarbaza dönüştü gerçekten.",
    "sentence": "A: Dost Oyeski'nin bir kumarbaz olacağı kırk yıl düşünsem aklıma gelmezdi.",
    "question": "Dost son zamanlarda kumar oynamaya çok vakit ve para harcıyor.",
    "answer": "False"
  },
  {
    "condition": "filler",
    "item_id": "f21",
    "dialogue": "A: Hülya hamurişleri konusunda kendini çok geliştirmiş. Geçenlerde yaptığı kekt nefisti!\n$ B: Bir sürü tarif öğrenmiş, nefis tatlılar yapıyor. Hayali bir pastane açmakmış.",
    "sentence": "A: Demek Hülya'nın hayallerinde pastacılık var!",
    "question": "Hülya bir pastacı açmak istediği için bir sürü yeni tarif öğreniyor.",
    "answer": "False"
  }
];