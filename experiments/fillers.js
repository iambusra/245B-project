const fillerStimuli = [
  {
    "item_id": "F1",
    "class": "filler",
    "dialogue": "A: Feriha'nın tırnağı kırılmış, ofiste ortalığı birbirine kattı! Canı çok acıyormuş, tadı çok kaçmış.\nB: Yok artık, bir de bayılsaymış! Demek o yüzden benden bir törpü istedi.",
    "spr": [
      "A:",
      "Aaa,",
      "Feriha",
      "senden",
      "törpü",
      "mü",
      "istedi?",
      "Hiç",
      "bilmiyordum!"
    ],
    "question": "Feriha tırnağı kırıldığı için bayıldı.",
    "expected_response": "F"
  },
  {
    "item_id": "F2",
    "class": "filler",
    "dialogue": "A: Bizim Hüseyin çaycılığa başlayacakmış diye duydum, hiç haberin var mı?\nB: Evet evet, haberim var! İşlek bir caddede kahvehane açmak gibi bir niyeti var hatta.",
    "spr": [
      "A:",
      "Desene",
      "bizim",
      "Hüseyin",
      "artık",
      "işyeri",
      "sahibi",
      "olacak!"
    ],
    "question": "Çaycı Hüseyin bir restoran açmak istiyor.",
    "expected_response": "F"
  },
  {
    "item_id": "F3",
    "class": "filler",
    "dialogue": "A: Canan plajda güneşlenirken uyuyakalmış. Her yeri yanmış! Hem kıpkırmızı, hem de canı acıyor.\nB: Vah vah, geçmiş olsun. Yanık yerlerine bir krem sürse çok iyi gelir.",
    "spr": [
      "A:",
      "Bir",
      "krem",
      "bütün",
      "o",
      "yanıkları",
      "iyileştirir",
      "mi",
      "diyorsun?"
    ],
    "question": "Canan balkonda güneşlenirken yanmış.",
    "expected_response": "F"
  },
  {
    "item_id": "F4",
    "class": "filler",
    "dialogue": "A: Müjdemi isterim, Nihal üniversite sınavında derece yapmış!\nB: Niyahet geçiyor şu sınavı! Geçen sene de sınava girdi ama sınavda fenalaştığı için hiçbir yeri kazanamadı.",
    "spr": [
      "A:",
      "Demek",
      "Nihal",
      "daha",
      "önce",
      "de",
      "üniversite",
      "sınavına",
      "girdi."
    ],
    "question": "Nihal üniversite sınavında iki kere derece yapmış.",
    "expected_response": "F"
  },
  {
    "item_id": "F5",
    "class": "filler",
    "dialogue": "A: Recep ile dağ yürüyüşü yapacaktık ama rotayı öğrendikten sonra beni ekti!\nB: Recep'in köpek fobisi var. Eğer yol üzerinde köpek olabileceğini öğrendiyse ondan ekmiştir seni.",
    "spr": [
      "A:",
      "Demek",
      "Recep",
      "küçücük",
      "bir",
      "köpekten",
      "korkuyor",
      "ha!"
    ],
    "question": "Recep'in yükseklik fobisi olduğu için yürüyüşe katılmayacak.",
    "expected_response": "F"
  },
  {
    "item_id": "F6",
    "class": "filler",
    "dialogue": "A: Hilal çok fantastik bir rüya görmüş dün. Tam anlatıyordu telefon geldi, dinleyemedim.\nB: Bana anlattı, çok acayipti. Bir ejderhanın sırtında tüm dünyayı gezmiş rüyasında.",
    "spr": [
      "A:",
      "Bizim",
      "Hilal",
      "bir",
      "ejderha",
      "avcısı",
      "mı",
      "olmuş",
      "rüyasında?"
    ],
    "question": "Hilal rüyasında bir gergedanın sırtında dünyayı gezmiş.",
    "expected_response": "F"
  },
  {
    "item_id": "F7",
    "class": "filler",
    "dialogue": "A: Ceyhun evde çok sıkılmış, bir yerlere gitmek istiyor. Ne dersin?\nB: Ben evden çıkmak isterim ama Ceyhun pikniğe gitmek istiyor. Bahar alerjim yüzünden ona gelemem.",
    "spr": [
      "A:",
      "Ceyhun",
      "bir",
      "yerde",
      "piknik",
      "yapmak",
      "istiyor",
      "demek."
    ],
    "question": "Ceyhun dışarı çıkmak istemiyor, evde kalmak istiyor.",
    "expected_response": "F"
  },
  {
    "item_id": "F8",
    "class": "filler",
    "dialogue": "A: Ercan yeni iş bulmuş, duydun mu? Ben duyunca çok mutlu oldum doğusu!\nB: Duydum, duymaz mıyım! Nefis bir haber gerçekten de. Havaalanında güvenlik görevlisi olarak çalışacakmış.",
    "spr": [
      "A:",
      "Demek",
      "Ercan",
      "havaalanında",
      "çalışmayı",
      "planlıyor."
    ],
    "question": "Ercan karakolda güvenlik görevlisi olarak çalışacak.",
    "expected_response": "F"
  },
  {
    "item_id": "F9",
    "class": "filler",
    "dialogue": "A: Salih okula geri dönmek istiyormuş. Dün markette karşılaştık, o zaman bahsetti.\nB: Bana da anlattı biraz. Sınavlara tekrar girip üniversite öğrencisi olmak niyetindeymiş.",
    "spr": [
      "A:",
      "Salih",
      "tekrar",
      "üniversiteli",
      "olacak",
      "desene."
    ],
    "question": "Salih sınava girip liseyi tekrar okumak istiyor.",
    "expected_response": "F"
  },
  {
    "item_id": "F10",
    "class": "filler",
    "dialogue": "A: Leyla işinden hiç ama hiç memnun değil. Ne kendini geliştirebiliyor ne de önünü görebiliyor.\nB: Maalesef... Tam da bu yüzden yeni bir iş arıyor kendine bir süredir.",
    "spr": [
      "A:",
      "Aaa,",
      "Leyla",
      "yeni",
      "bir",
      "iş",
      "arıyor",
      "demek",
      "kendine."
    ],
    "question": "Leyla işinden çok memnun ama yine de yeni bir iş arıyor.",
    "expected_response": "F"
  },
  {
    "item_id": "F11",
    "class": "filler",
    "dialogue": "A: Mikail'in seracılığa başladığını duydum. Hep böyle ilginç şeyler peşinde doğrusu!\nB: Toprakla uğraşmayı çok seviyor. Şimdi serasında avokado yetiştirmek için uğraşıyor.",
    "spr": [
      "A:",
      "Mikail",
      "avokado",
      "yetiştirecek",
      "ha,",
      "bir",
      "yaşıma",
      "daha",
      "girdim!"
    ],
    "question": "Mikail seracılığa ananas yetiştirmek için başlamış.",
    "expected_response": "F"
  },
  {
    "item_id": "F12",
    "class": "filler",
    "dialogue": "A: Bedri'nin sana bir sürprizi varmış! Doğum günün yaklaştığı için sana bir jest yapmak istemiş.\nB: Evet, söyledi. Çok ince düşünmüş, benim bir portremi çizecekmiş.",
    "spr": [
      "A:",
      "Demek",
      "Bedri",
      "senin",
      "bir",
      "portreni",
      "çizecek.",
      "Gerçekten",
      "iyi",
      "düşünmüş."
    ],
    "question": "Bedri arkadaşının doğum günü için bir duvar resmi çizmeyi planlıyor.",
    "expected_response": "F"
  },
  {
    "item_id": "F13",
    "class": "filler",
    "dialogue": "A: Meral'i gördüm koridorda. Başhekime kız kardeşi ile çalışmak istemediğini söylüyordu. Ne alaka?\nB: Meral'in kız kardeşi de doktor, hem de bizim hastanede. Alakası budur.",
    "spr": [
      "A:",
      "Meral'in",
      "birlikte",
      "çalışmak",
      "istemeyeceği",
      "bir",
      "doktor",
      "olacağını",
      "düşünmezdim."
    ],
    "question": "Meral, doktor olan kız kardeşi ile beraber çalışmak istemiyor.",
    "expected_response": "T"
  },
  {
    "item_id": "F14",
    "class": "filler",
    "dialogue": "A: Merve çok çalışmaktan şikayetçi. Oğluna hiç vakit ayıramadığı için epey mutsuzdu.\nB: Geçenlerde yeni iş arıyordu. Demek iş değiştirmek istemesi bu yüzdenmiş!",
    "spr": [
      "A:",
      "Desene",
      "sen",
      "Merve",
      "kendine",
      "yeni",
      "bir",
      "iş",
      "bulmak",
      "istiyor",
      "diye!"
    ],
    "question": "Merve oğluna daha fazla vakit ayırabilmek için yeni iş arıyor.",
    "expected_response": "T"
  },
  {
    "item_id": "F15",
    "class": "filler",
    "dialogue": "A: Baloya Şeyda da bizimle gelecek. Haberin var değil mi?\nB: Yoktu doğrusu! Söylediğin için teşekkürler. Geçen hafta kendine yeni ayakkabı bakıyordu, bundanmış demek.",
    "spr": [
      "A:",
      "Şeyda",
      "baloda",
      "giymek",
      "için",
      "ayakkabı",
      "mı",
      "almak",
      "istiyor",
      "yoksa?"
    ],
    "question": "Baloya gitmeyi planlayan Şeyda kendine yeni ayakkabı bakıyor.",
    "expected_response": "T"
  },
  {
    "item_id": "F16",
    "class": "filler",
    "dialogue": "A: Nurdan bu odaya yeni bir perde asmak istiyor. Şu anki perdelerin odayı kasvetli gösterdiğini düşünüyor.\nB: Haklı doğrusu! Buraya şöyle açık renkli perdeler asmak lazım.",
    "spr": [
      "A:",
      "Nurdan",
      "buraya",
      "açık",
      "renkli",
      "perde",
      "mi",
      "asmak",
      "istiyor",
      "yani?"
    ],
    "question": "Nurdan odanın kasvetli göründüğünü düşünüyor.",
    "expected_response": "T"
  },
  {
    "item_id": "F17",
    "class": "filler",
    "dialogue": "A: Yakışıklı bir adam Feride'ye ismini sormuş. Sonra da ona bir pastahanede çay ısmarlamış.\nB: Feride de öyle her yakışıklıya adını söylüyor muymuş? Olacak iş değil!",
    "spr": [
      "A:",
      "Şu",
      "şehirde",
      "Feride'nin",
      "adını",
      "bilmeyen",
      "bir",
      "yakışıklı",
      "kalmadı",
      "ki."
    ],
    "question": "Yakışıklı bir adam Feride'ye çay ısmarlamış.",
    "expected_response": "T"
  },
  {
    "item_id": "F18",
    "class": "filler",
    "dialogue": "A: Candan bir opera bestelese ne güzel olur. Sesinin ihtişamına öyle yakışır ki!\nB: Böyle düşünüyorsan sana çok güzel haberlerim var. Candan bir müzik kayıt şirketi ile anlaşmış.",
    "spr": [
      "A:",
      "Yoksa",
      "bir",
      "opera",
      "albümü",
      "mü",
      "kaydedecek",
      "o",
      "şirket",
      "ile?"
    ],
    "question": "Candan bir müzik şirketi ile anlaşma yapmış.",
    "expected_response": "T"
  },
  {
    "item_id": "F19",
    "class": "filler",
    "dialogue": "A: Cemil'in bu yarışı kazanabileceğini hiç ama hiç sanmıyorum! Onu hiç antrenmanda görmüyorum.\nB: Ben de seninle aynı fikirdeyim. Cemil yarışa hazırlanmak dışında her şeyi yapıyor!",
    "spr": [
      "A:",
      "Bu",
      "gidişle",
      "Cemil",
      "sadece",
      "bu",
      "yarışı",
      "değil",
      "hiçbir",
      "yarışı",
      "kazanamaz!"
    ],
    "question": "Cemil gireceği yarışa gerektiği kadar iyi hazırlanmıyor.",
    "expected_response": "T"
  },
  {
    "item_id": "F20",
    "class": "filler",
    "dialogue": "A: Magazin haberlerinde gördüm, Dost Oyeski bu ara varını yoğunu ganyana yatırıyormuş.\nB: Yolu yol değil onun! Çok fena bir kumarbaza dönüştü gerçekten.",
    "spr": [
      "A:",
      "Dost",
      "Oyeski'nin",
      "bir",
      "kumarbaz",
      "olacağı",
      "kırk",
      "yıl",
      "düşünsem",
      "aklıma",
      "gelmezdi."
    ],
    "question": "Dost son zamanlarda kumar oynamaya çok vakit ve para harcıyor.",
    "expected_response": "T"
  },
  {
    "item_id": "F21",
    "class": "filler",
    "dialogue": "A: Hülya hamurişleri konusunda kendini çok geliştirmiş. Geçenlerde yaptığı kek nefisti!\nB: Bir sürü tarif öğrenmiş, nefis tatlılar yapıyor. Hayali bir pastane açmakmış.",
    "spr": [
      "A:",
      "Demek",
      "Hülya'nın",
      "hayallerinde",
      "pastacılık",
      "var!"
    ],
    "question": "Hülya bir pastacı açmak istediği için bir sürü yeni tarif öğreniyor.",
    "expected_response": "T"
  }
];
