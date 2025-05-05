const experimentStimuli = [
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
  }
];
