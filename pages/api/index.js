// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import NextCors from "nextjs-cors";

const words = {
  tr: [
    {
      name: "Türkçe Sık Kullanılan 200 Kelime",
      value:
        "bir ve olmak bu için o ben demek çok yapmak ne gibi daha almak var kendi gelmek ile vermek ama sonra kadar yer en insan değil her istemek yıl çıkmak görmek gün biz gitmek iş şey ara ki bilmek el zaman ya çocuk iki bakmak çalışmak içinde büyük yok başlamak yol kalmak neden siz konu yapılmak iyi kadın ev ise diye bulunmak söylemek göz gerekmek dünya baş durum yan geçmek sen onlar yeni önce başka hal orta su girmek ülke yemek hiç bile nasıl bütün karşı bulmak böyle yaşamak düşünmek aynı iç ancak kişi bunlar veya ilk göre ön son biri şekil önemli yüz hem göstermek etmek alt getirmek kullanmak çünkü taraf şimdi adam onun diğer artık üzerinde ses hep doğru durmak kız tüm çekmek konuşmak para anlamak anne az bazı baba hayat sadece küçük fazla bilgi an sormak bunun öyle yine sağlamak sonuç kullanılmak dış ad yani süre dönmek açmak oturmak anlatmak bırakmak hemen saat yaş sorun devlet sahip sıra yazmak yüzde ay atmak tutmak bunu olay düşmek duymak söz güzel sevmek biraz zor çıkarmak şu koymak tek sistem birlikte verilmek kim alınmak genç kapı kitap üzerine burada gece alan birbiri işte beklemek uzun hiçbir bugün dönem arkadaş ürün",
    },
    {
      name: "Türkçe Sık Kullanılan 1000 Kelime",
      value:
        "bir ve olmak bu için o ben demek çok yapmak ne gibi daha almak var kendi gelmek ile vermek ama sonra kadar yer en insan değil her istemek yıl çıkmak görmek gün biz gitmek iş şey ara ki bilmek el zaman ya çocuk iki bakmak çalışmak içinde büyük yok başlamak yol kalmak neden siz konu yapılmak iyi kadın ev ise diye bulunmak söylemek göz gerekmek dünya baş durum yan geçmek sen onlar yeni önce başka hal orta su girmek ülke yemek hiç bile nasıl bütün karşı bulmak böyle yaşamak düşünmek aynı iç ancak kişi bunlar veya ilk göre ön son biri şekil önemli yüz hem göstermek etmek alt getirmek kullanmak çünkü taraf şimdi adam onun diğer artık üzerinde ses hep doğru durmak kız tüm çekmek konuşmak para anlamak anne az bazı baba hayat sadece küçük fazla bilgi an sormak bunun öyle yine sağlamak sonuç kullanılmak dış ad yani süre dönmek açmak oturmak anlatmak bırakmak hemen saat yaş sorun devlet sahip sıra yazmak yüzde ay atmak tutmak bunu olay düşmek duymak söz güzel sevmek biraz zor çıkarmak şu koymak tek sistem birlikte verilmek kim alınmak genç kapı kitap üzerine burada gece alan birbiri işte beklemek uzun hiçbir bugün dönem arkadaş ürün aile üç okumak erkek herkes güç belki gerçek tam ilgili ilişki çevre eski aramak yaşam halk yakın sokak bey tarih özellik bölüm özel akıl kimse pek eğer gerek özellikle anlam yüksek banka kez ayak taşımak geri toplum araç madde tür karar görülmek hava sayı farklı grup oda biçim oluşmak haber ayrıca gelen birkaç soru arka kazanmak yazı okul açık öğrenmek sürmek dil şirket kaynak bitmek program hareket renk açılmak hak inanmak çalışma açı parça gazete oluşturmak tabi değer tanımak yapı doktor gelir görev amaç bölge film üzere müşteri zaten telefon eğitim deniz ikinci kalkmak hatta etki gelişmek geçen vücut düşünce milyon oynamak değişmek temel yaratmak ulaşmak sanmak geçirmek kültür kurmak fakat buna resim ışık içmek hanım hizmet ihtiyaç nokta yön evet oyun artmak yeniden işlem kısa kolay hangi oran aslında orada dikkat uzak bilgisayar gelecek görünmek örneğin oğul dinlemek uygun lira üretim dakika unutmak yürümek böylece kötü araba ağız duygu uygulamak hala örnek birçok izlemek derece mümkün şöyle duvar on sanat ana hastalık öğrenci televizyon yöntem masa ölmek takım üst kafa müzik ayrılmak enerji üniversite spor türlü can rağmen kısım ölüm sürekli sağlık çeşitli bundan hissetmek oysa sabah internet teknik dışarı merkez ortam yerine düzey köy yönetim aşağı cevap yatmak toprak isim akşam araştırma götürmek katılmak yoksa kurulmak ödemek sanki kan hasta şehir inmek sunmak bilinmek hafta trafik hesap otomobil yabancı davranış mutfak kent bazen belli ayrı fiyat hakkında kaldırmak kol yalnız hazırlamak cam sonunda yavaş gerekli önem koca yanlış varlık art ilgi sana satış içeri doğal ekonomik acı hayır korumak kat ekonomi genel belirtmek fotoğraf hayvan savaş mal saç kaybetmek kalan değiştirmek dört gerçekten sayfa teknoloji kurum beş sektör geniş kağıt koku sağ sıcak yüzyıl cadde pazar sürdürmek kullanım sınıf aşk doğmak ağır tekrar güneş sigara ağaç kelime bina eş kaçmak parti yatak yazar kulak öğretmen sebep sol peki yağ yüzden anlaşılmak varmak gülmek kural satmak şiir göndermek başarı firma hükümet kalp kesmek proje şart hız köşe vurmak model balık piyasa görüş bura hazırlanmak miktar birinci meydan ölçü seçmek uygulanmak bahçe sevgi ekmek boyunca koşmak dolu kuruluş saye korkmak yardım karşılaşmak malzeme hoş köpek ünlü büyümek dolaşmak oldukça üstelik yaşanmak beyaz istek öte denmek kardeş çekilmek nerede çalmak izin korku meslek polis yalnızca açıklamak fikir hızlı pencere uğraşmak taş ateş fark yetmek çoğu kimi koşul mahalle mutlaka tane üretmek üstüne dayanmak ince kaç ortak tip görüntü beri ders başkan karşılık kurtulmak numara defa edilmek batı farketmek herhangibir sinema değişik hedef uyumak dost yanmak anlayış asıl basmak kenar kontrol çevirmek din güçlü henüz plan beyin elektrik üstünde et sağlanmak söylenmek çizgi uç üye cilt ruh sevgili yaklaşmak süreç bakış bilim ileri ifade beden hatırlamak kaza iyice dağ kapatmak adım ciddi çözüm etkilemek belediye gelişme seçim ağlamak bağlı kavram artırmak faaliyet zarar derin salon çeşit kesilmek seyretmek birden içermek sayılmak toplamak aşmak bağırmak sorumluluk davranmak mektup soğuk canlı idi makine yararlanmak yaşlı boş acaba maç yönetici getirilmek metre tutulmak kalite bitki değişiklik ilaç kredi yasa başarılı birer imkan ceza herşey incelemek top uzman doldurmak kanal mekan uymak yıllık dolayısıyla yazılmak ait parmak saymak atılmak belirlemek normal hele ilke kırmızı rol şarkı eleman hazır benzemek birşey hoca boy günlük politika suç niye sahne sokmak adet koltuk kurtarmak sanatçı uzanmak aşama eklemek orman ayırmak düzen faiz genellikle herzaman hikaye hücre ora roman vergi yakmak ağabey basın destek giymek hata sınır birlik eser karşılamak yarı yeterli birey karanlık otobüs sanayi bebek vatandaş bakan kere millet reklam yükselmek boyut dergi enflasyon sosyal birisi geçmiş hastahane olma toplantı gazeteci içerisi inanç nitelik üzeri bitirmek gerçekleşmek giriş rahat toplam beraber dükkan gizli benzer deri dönüşmek mücadele problem servis tedavi yeşil bakanlık baskı tepki cümle dilemek özgürlük gene kimlik mesele üçüncü belirlenmek değerlendirmek ilginç sürücü süt yakalamak eşya uluslararası aday ağırlık milyar sağlıklı sıkıntı tavır toplumsal yayın toplanmak yatırım hafif karışmak tehlike vakit daire fırsat işlemek karıştırmak katkı öykü tamamen uçak yanıt doğa evlenmek burun çıkar elbette işçi işletme kısaca mağaza medya yüzünden artış çıkarılmak kamu sigorta yaz yürek belge çaba hergün risk sözetmek sözcük demokrasi tuz cami çağ düşük etraf hızla olanak organ öldürmek öteki sene bozulmak ilgilenmek meyve takılmak tatlı bacak değişim kanun rüzgar cumhuriyet geliştirmek tarz yedi azalmak bağlamak iletişim müdür otel yayımlanmak zevk binmek güvenlik hukuk kılmak modern okur silah talep yıldız yoğun asker basit denilmek gaz uygulama üretilmek beyan besin dün görüşmek yaklaşık alışveriş bilinç çerçeve lazım mevcut tüketici uzatmak yönelik at bağlanmak mesela neredeyse site abla çiçek hepsi saygı ücret yetenek kilo paylaşmak sert yanısıra çay gider kesin zengin asla laf örgüt ticaret yaptırmak boyun cihaz denge giderek sırt dolayı kahve kas meclis öteki uğraşmak adres belirtilmek paşa sıcaklık tamam güven marka yaprak yarar yayılmak akmak çizmek düşünülmek gönül hayal ilerlemek şarap yukarıda altın düzenlemek sunulmak temiz vitamin ek geç yumurta aşırı eylem istenmek kesim kriz birim kapanmak",
    },
    {
      name: "Türkçe Şehir ve İlçe İsimleri",
      value:
        "Abana Acıgöl Acıpayam Adaklı Adalar Adana Adapazarı Adıyaman Adilcevaz Afşin Afyonkarahisar Ağaçören Ağın Ağlasun Ağlı Ağrı Ahırlı Ahlat Ahmetli Akçaabat Akçadağ Akçakale Akçakent Akçakoca Akdağmadeni Akdeniz Akhisar Akıncılar Akkışla Akkuş Akören Akpınar Aksaray Akseki Aksu Akşehir Akyaka Akyazı Akyurt Alaca Alacakaya Alaçam Aladağ Alanya Alaplı Alaşehir Aliağa Almus Alpu Altıeylül Altındağ Altınekin Altınordu Altınova Altınözü Altıntaş Altınyayla Altunhisar Alucra Amasra Amasya Anamur Andırın Ankara Antakya Antalya Araban Araç Araklı Aralık Arapgir Ardahan Ardanuç Ardeşen Arguvan Arhavi Arıcak Arifiye Armutlu Arnavutköy Arpaçay Arsin Arsuz Artova Artuklu Artvin Asarcık Aslanapa Aşkale Atabey Atakum Ataşehir Atkaracalar Avanos Avcılar Ayancık Ayaş Aybastı Aydın Aydıncık Aydıntepe Ayrancı Ayvacık Ayvalık Azdavay Aziziye Babadağ Babaeski Bafra Bağcılar Bağlar Bahçe Bahçelievler Bahçesaray Bahşılı Bakırköy Baklan Bala Balçova Balıkesir Balışeyh Balya Banaz Bandırma Bartın Baskil Başakşehir Başçiftlik Başiskele Başkale Başmakçı Başyayla Batman Battalgazi Bayat Bayburt Bayındır Baykan Bayraklı Bayramiç Bayramören Bayrampaşa Bekilli Belen Bergama Besni Beşikdüzü Beşiktaş Beşiri Beyağaç Beydağ Beykoz Beylikdüzü Beylikova Beyoğlu Beypazarı Beyşehir Beytüşşebap Biga Bigadiç Bilecik Bingöl Birecik Bismil Bitlis Bodrum Boğazkale Boğazlıyan Bolu Bolvadin Bor Borçka Bornova Boyabat Bozcaada Bozdoğan Bozkır Bozkurt Bozova Boztepe Bozüyük Bozyazı Buca Bucak Buharkent Bulancak Bulanık Buldan Burdur Burhaniye Bursa Bünyan Büyükçekmece Büyükorhan Canik Ceyhan Ceylanpınar Cide Cihanbeyli Cizre Cumayeri Çağlayancerit Çal Çaldıran Çamardı Çamaş Çameli Çamlıdere Çamlıhemşin Çamlıyayla Çamoluk Çan Çanakçı Çanakkale Çandır Çankaya Çankırı Çardak Çarşamba Çarşıbaşı Çat Çatak Çatalca Çatalpınar Çatalzeytin Çavdarhisar Çavdır Çay Çaybaşı Çaycuma Çayeli Çayıralan Çayırlı Çayırova Çaykara Çekerek Çekmeköy Çelebi Çelikhan Çeltik Çeltikçi Çemişgezek Çerkeş Çerkezköy Çermik Çeşme Çıldır Çınar Çınarcık Çiçekdağı Çifteler Çiftlik Çiftlikköy Çiğli Çilimli Çine Çivril Çobanlar Çorlu Çorum Çubuk Çukurca Çukurova Çumra Çüngüş Daday Dalaman Damal Darende Dargeçit Darıca Datça Dazkırı Defne Delice Demirci Demirköy Demirözü Denizli Derbent Derebucak Dereli Derepazarı Derik Derince Derinkuyu Dernekpazarı Develi Devrek Devrekani Dicle Didim Digor Dikili Dikmen Dilovası Dinar Divriği Diyadin Diyarbakır Dodurga Doğanhisar Doğankent Doğanşar Doğanşehir Doğanyol Doğanyurt Doğubeyazıt Domaniç Dörtdivan Dörtyol Döşemealtı Dulkadiroğlu Dumlupınar Durağan Dursunbey Düzce Düziçi Düzköy Eceabat Edirne Edremit Efeler Eflani Eğil Eğirdir Ekinözü Elazığ Elbeyli Elbistan Eldivan Eleşkirt Elmadağ Elmalı Emet Emirdağ Emirgazi Enez Erbaa Erciş Erdek Erdemli Ereğli Erenler Erfelek Ergani Ergene Ermenek Eruh Erzin Erzincan Erzurum Esenler Esenyurt Eskil Eskipazar Eskişehir Espiye Eşme Etimesgut Evciler Evren Eynesil Eyüp Eyyübiye Ezine Fatih Fatsa Feke Felahiye Ferizli Fethiye Fındıklı Finike Foça Gaziantep Gaziemir Gaziosmanpaşa Gazipaşa Gebze Gediz Gelendost Gelibolu Gemerek Gemlik Genç Gercüş Gerede Gerger Germencik Gerze Gevaş Geyve Giresun Gökçeada Gökçebey Göksun Gölbaşı Gölcük Göle Gölhisar Gölköy Gölmarmara Gölova Gölpazarı Gölyaka Gömeç Gönen Gördes Görele Göynücek Göynük Güce Güçlükonak Güdül Gülağaç Gülnar Gülşehir Gülyalı Gümüşhacıköy Gümüşhane Gümüşova Gündoğmuş Güney Güneysınır Güneysu Güngören Günyüzü Gürgentepe Güroymak Gürpınar Gürsu Gürün Güzelbahçe Güzelyurt Hacıbektaş Hacılar Hadım Hafik Hakkâri Halfeti Haliliye Halkapınar Hamamözü Hamur Han Hanak Hani Hanönü Harmancık Harran Hasanbeyli Hasankeyf Hasköy Hassa Hatay Havran Havsa Havza Haymana Hayrabolu Hayrat Hazro Hekimhan Hemşin Hendek Hınıs Hilvan Hisarcık Hizan Hocalar Honaz Hopa Horasan Hozat Hüyük Iğdır Ilgaz Ilgın Isparta İbradi İdil İhsangazi İhsaniye İkizce İkizdere İliç İlkadım İmamoğlu İmranlı İncesu İncirliova İnebolu İnegöl İnhisar İnönü İpekyolu İpsala İscehisar İskenderun İskilip İslahiye İspir İstanbul İvrindi İyidere İzmir İzmit İznik Kabadüz Kabataş Kadıköy Kadınhanı Kadışehri Kadirli Kağıthane Kağızman Kahramanmaraş Kahta Kale Kalecik Kalkandere Kaman Kandıra Kangal Kapaklı Karabağlar Karaburun Karabük Karacabey Karacasu Karaçoban Karahallı Karaisalı Karakeçili Karakoçan Karakoyunlu Karaköprü Karaman Karamanlı Karamürsel Karapınar Karapürçek Karasu Karataş Karatay Karayazı Karesi Kargı Karkamış Karlıova Karpuzlu Kars Karşıyaka Kartal Kartepe Kastamonu Kaş Kavak Kavaklıdere Kayapınar Kaynarca Kaynaşlı Kayseri Kazan Kazımkarabekir Keban Keçiborlu Keçiören Keles Kelkit Kemah Kemaliye Kemalpaşa Kemer Kepez Kepsut Keskin Kestel Keşan Keşap Kıbrıscık Kınık Kırıkhan Kırıkkale Kırkağaç Kırklareli Kırşehir Kızılcahamam Kızılırmak Kızılören Kızıltepe Kiğı Kilimli Kilis Kiraz Kocaali Kocaeli Kocaköy Kocasinan Koçarlı Kofçaz Konak Konya Konyaaltı Korgan Korgun Korkut Korkuteli Kovancılar Koyulhisar Kozaklı Kozan Kozlu Kozluk Köprübaşı Köprüköy Körfez Köse Köşk Köyceğiz Kula Kulp Kulu Kuluncak Kumlu Kumluca Kumru Kurşunlu Kurtalan Kurucaşile Kuşadası Kuyucak Küçükçekmece Küre Kürtün Kütahya Laçin Ladik Lalapaşa Lapseki Lice Lüleburgaz Maçka Maden Mahmudiye Malatya Malazgirt Malkara Maltepe Mamak Manavgat Manisa Manyas Mardin Marmara Marmaris Mazgirt Mazıdağı Mecitözü Melikgazi Menderes Menemen Mengen Menteşe Meram Meriç Merkezefendi Mersin Merzifon Mesudiye Mezitli Midyat Mihalgazi Mihalıççık Milas Mucur Mudanya Mudurnu Muğla Muradiye Muratlı Muratpaşa Murgul Musabeyli Mustafakemalpaşa Muş Mut Mutki Nallıhan Narlıdere Narman Nazilli Nazimiye Nevşehir Niğde Niksar Nilüfer Nizip Nurdağı Nurhak Nusaybin Odunpazarı Of Oğuzeli Oğuzlar Oltu Olur Ondokuzmayıs Onikişubat Ordu Orhaneli Orhangazi Orta Ortaca Ortahisar Ortaköy Osmancık Osmaneli Osmangazi Osmaniye Otlukbeli Ovacık Ödemiş Ömerli Özalp Özvatan Palandöken Palu Pamukkale Pamukova Pasinler Patnos Payas Pazar Pazarcık Pazarlar Pazaryeri Pazaryolu Pehlivanköy Pendik Perşembe Pertek Pervari Pınarbaşı Pınarhisar Piraziz Polateli Polatlı Posof Pozantı Pursaklar Pülümür Pütürge Refahiye Reşadiye Reyhanlı Rize Safranbolu Saimbeyli Sakarya Salıpazarı Salihli Samandağ Samsat Samsun Sancaktepe Sandıklı Sapanca Saray Saraydüzü Saraykent Sarayköy Sarayönü Sarıcakaya Sarıçam Sarıgöl Sarıkamış Sarıkaya Sarıoğlan Sarıveliler Sarıyahşi Sarıyer Sarız Saruhanlı Sason Savaştepe Savur Seben Seferihisar Selçuk Selçuklu Selendi Selim Senirkent Serdivan Serik Serinhisar Seydikemer Seydiler Seydişehir Seyhan Seyitgazi Sındırgı Siirt Silifke Silivri Silopi Silvan Simav Sinanpaşa Sincan Sincik Sinop Sivas Sivaslı Siverek Sivrice Sivrihisar Solhan Soma Sorgun Söğüt Söğütlü Söke Sulakyurt Sultanbeyli Sultandağı Sultangazi Sultanhisar Suluova Sulusaray Sumbas Sungurlu Sur Suruç Susurluk Susuz Suşehri Süleymanpaşa Süloğlu Sürmene Sütçüler Şabanözü Şahinbey Şalpazarı Şanlıurfa Şaphane Şarkışla Şarkikaraağaç Şarköy Şavşat Şebinkarahisar Şefaatli Şehitkamil Şehzadeler Şemdinli Şenkaya Şenpazar Şereflikoçhisar Şırnak Şile Şiran Şirvan Şişli Şuhut Talas Taraklı Tarsus Taşkent Taşköprü Taşlıçay Taşova Tatvan Tavas Tavşanlı Tefenni Tekirdağ Tekkeköy Tekman Tepebaşı Tercan Termal Terme Tillo Tire Tirebolu Tokat Tomarza Tonya Toprakkale Torbalı Toroslar Tortum Torul Tosya Trabzon Tufanbeyli Tunceli Turgutlu Turhal Tuşba Tut Tutak Tuzla Tuzluca Tuzlukçu Türkeli Türkoğlu Uğurludağ Ula Ulaş Ulubey Uluborlu Uludere Ulukışla Ulus Urla Uşak Uzundere Uzunköprü Ümraniye Ünye Ürgüp Üsküdar Üzümlü Vakfıkebir Van Varto Vezirköprü Viranşehir Vize Yağlıdere Yahşihan Yahyalı Yakakent Yakutiye Yalıhüyük Yalova Yalvaç Yapraklı Yatağan Yavuzeli Yayladağı Yayladere Yazıhan Yedisu Yenice Yeniçağa Yenifakılı Yenimahalle Yenipazar Yenişarbademli Yenişehir Yerköy Yeşilhisar Yeşilli Yeşilova Yeşilyurt Yığılca Yıldırım Yıldızeli Yomra Yozgat Yumurtalık Yunak Yunusemre Yusufeli Yüksekova Yüreğir Zara Zeytinburnu Zile Zonguldak",
    },
    {
      name: "Türkçe Tıp Terimleri",
      value:
        "abdomen abortus absans abse absorbsiyon adrenalin afaki afazi afoni afrodizyak aglütinasyon agorafobi ajitasyon ajite akne akomodasyon akondroplazi akromegali alerji ambliyopi amnezi analjezik anemi anemik anerji anestezi anksiete anoreksi anosmi ansefalit antienflamatuar antiseptik antispazmodik antistatik antitoksik antitüssif antiviral anüler anüri anüs aorta apandisit apati apeks apne apopleksi apirojen araknoid asetabulum aso asidoz atropin bağışıklık bakteri bakteriyemi ballismus bandaj basil batın benign beriberi blefarit bone botulismus bradikardi brakiyalji bronchiolitis bül büllöz bifurkasyon bifid bikonkav bilateral bilirubin bilirubinemi biseksüel biyopsi caduceus calcaneus candıda cerahat cerrahi cerumen cestodıasıs clavicula cor coxae dakriyolit dakriyosistit daltonizm dansimetre debilite defekasyon defekt deflorasyon deformasyon deformite defibrilatör dejenerasyon dekompresyon dekonjestan dekübitis delirium demans demonstrasyon demoralizasyon demiyelinizasyon deontoloji depresyon depilasyon dermabrazyon dermatoloji dermatit dermis diabet düşük edema efervesan effekt effektif effüzyon eklampsi eko ekolali eksizyon ektazi ektoderm ektopi ektropion ekinokok ekzema endokrinolog endokrinoloji ensefalon envazyon epitel erozyon familyal farinks fat fatal febril feçes fekalit femur ferment fermentasyon ferritin fertil fertilite fetal fetus fibrom fibröz fibrin fibrinemi fibrinüri fibula filaria galaktemi galaktore galaktosel galaktoz galaktozüri galaktüri ganglion gangren gastrodüodenit gastroenterit gastrolit gastromegali gastronomi gastroptozis gastroskopi gastrointestinal gastrit giardia giardiasis habitüel halluks hallüsinasyon halotan hamartom hamartroz haşiş hemanjiektazi hemanjiom hematemez hematolog hematom hematomiyeli hematosel hemoraji herpes hiler hilus hiperkromazi hipofiz hipospadias idiopatik idiot ihtiyozis ikter iktus ileum ileus ileitis illuzyon imbesil immatür immobil immün immünolog immünoloji immünite immünize imminent imitasyon inflamasyon intermedier intraepitelial jargon jejunum jejunit joint juvenil jigantizm jinekoloji jinekomasti jinjivit kakozmi kalyum kardiak karina katabolizma kaşeksi keloid keratoma keratometre keratoplasti keratoskop keratin keratit kernicterus ketonemi ketonüri kızamık kleptomani klostrofobi kolesterol korpus kürtaj kifoz kist labil lagoftalmi lakrima laktasyon lakün lap laparatomi laparoskopi larengoskop larengoskopi larenjit larenks larva lenfoma lezyon ligament magnet makro makrosefali malabsorbsiyon maladi malarya malasi male malfonksiyon malformasyon malleol malleus malnutrisyon malpraktis malign mamografi mamilla mandibula mani manifest marihuana mastektomi mastektomi mastoidektomi mastoidit mastitis mazohist menenjit menopoz menstrual mentruasyon metastatik metastaz mukolitik mukoza mitoz miyom narkoanaliz narkolepsi narkotik narkoz narsizm natal natrium naturel nausea nazofarinks nebulizer neonatal neoplazi nodül nöroloji nöroşirürji obduksiyon obez obezite obje objektif obliterasyon observasyon obsesyon obstetri obstrüksiyon odontoid odiogram oftalmoloji oftalmolojist oftalmopleji oftalmoskop oftalmoskopi oftalmik okkult oklude oksiput okulomotoryus oküler olekranon olfaktoryus oligo oligospermi oligüri omentum onanizm onkoloji opak operabl operasyon opiat opistotonus osteofit osteogenesis osteojenik osteoliz osteomalasi osteomiyelit osteoplasti osteoid ovoblast ovosit ovülasyon pakimenenjit palpasyon palpitasyon palsy palyatif palilali pan panarterit pandemi pankardit pankreas pankreatit panoftalmi pansinüzit papaverin papül papillokarsinom papillom papillit para parakardiak paralitik paralizi paramedian paramedikal paranazal parankim paraozefageal paraparezi parapleji parasentez paratrakeal paratiroid paratiroidektomi paravertebral parazit parazitemi parenkim parenteral parestezi paroksismal paronişi parotitis parsiyel partus partikül patella patogenez patognomonik patojen patolog patolojik pediatri pediatrist pelvis peroral periton peritonit peteşi phenotype pıtrıasıs plak plevra plevral plörezi plörit polikistik polip prostat prostatit psorıasıs pulmoner püstül rabies radikal radikül radikülopati radikülit radyoaktif radyodermatit radyoloji radyoterapi radius rahim raynaud raşitizm refraksiyon refraktometre regresyon regurjitasyon rehabilitasyon rejenerasyon rejional relaksin remisyon renal reproduktif respirasyon retansiyon retrobulber retrogressiv retroperitoneal retroversi retiküler retina retinit rezeksiyon rezorbsiyon rezidü rezidüel rezistan rezistans sadist sadizm safra sagittal sak sakküler sakralizasyon sakrum salmonella salpenjit salpinks sedasyon sternum subkarinal subplevral simpleks sinüzit siroz sitoloji takipne talamus talasemi tartar telekardiofon telenjiektazi telepati tendon tendinit tenesmus tenya testosteron tremor tromboz ulna ultrasonografi ultrasound ultraviole uterus uvula vagotomi vagus vajen vajinit vaksın varikosel varis vaskülit vazodilatasyon vazodilatatör vazokonstrüktör vazospazm vejeteryan ven vertigo vitiligo zar zayıflık zehir zehirlenme zeka zona zoofili zigoma zigot",
    },
  ],
  en: [
    {
      name: "İngilizce Sık Kullanılan Kelimeler",
      value:
        "who found has had through help another spell miss year part around much night world large girl family most say feet out that talk girl move form man by here something face began will between who they under at book form group right play one put long they know together said over help mountain then never song just but school run us last in let into again between water very would down idea he live until above important not him have few Indian watch near river another at word over walk me still eat through eye car put eye what also seem any show can go follow quickly come grow it's life below move land later or know other came look before above make way again both young were is kind in live once oil and word must side end which him eye second read part like back go long well if soon first for really before old does quick cut add each paper but want be later find story off leave different may most was grow when might been song head could each its went second often many ask take at right city own seem she home was took its up your it left start are form small go high kind her more any together Indian why thing earth it's own car many run mean picture often set sea eat small sentence air why some house two after its after big life last without them us story those every soon same little off mile air just old number family the to list then night every thing until because open face own found school write into sentence when far open house now don't sometimes far thought each plant on such should different question show along don't change being because sound hard men quite these our been should think close the very on more always kind were quickly let made talk family one school do little you does only second add if cut home large you while add back learn will still over",
    },
    {
      name: "İngilizce SAT Kelimeleri",
      value:
        "rectitude pinnacle juxtaposition contemporaneous sobriety tranquil collusion novice vicarious semaphore debunk aisle implicate compliment inure limpid scintillating hypothetical animated lithe puerile forum anguish artifact incessant exigent sublime abject candor anecdote delegate irrevocable genial entail dissemble oblique catalog pungent truncate pugnacious querulous decorous sophomoric buttress antecedent corpulence temperance scurrilous raze delegate mores adumbrate sophomoric arid vindicate tranquil salutation cherish concise officious attain espouse foil solvent nebulous perfidious docile empirical flaccid acrimony tractable upbraid ostentatious disheartened recalcitrant haughty anarchist veneer recapitulate lenient trite sinuous abdicate enamor commendation concord debunk lithe inept discursive permeate brusque ruminate copious luminous insatiable capitulate replete impecunious conundrum aisle disgruntled fractious callous truncate calamity cumulative reproach approbation sensuous laceration etymology debunk consonant ebullient oration lucid catalog grandiose laceration alacrity hypocrisy admonish epitome potentate efficacious refract medley taciturn audible empirical buttress bashful reconcile torpid amenable cultivate intrepid ballad solipsistic incumbent complicit antiseptic turpitude obsolete insular innovate consolation affluent elaborate curt prowess paramount wizened ostentatious cajole ruse ascertain repose adorn myriad engender querulous fetid fractious avenge antagonism insurgent integral venerable brusque clamor trenchant implacable alacrity expunge anesthesia beseech blandish placate vitriolic revel permeate grandiose decorous panacea pulchritude allocate diffident arbitrary exigent impassive demarcation exacerbate lavish plausible exalt truculent resolve prescribe demure vindictive sublime desolate travesty derelict epistolary foster accolade turpitude strident accretion kudos forlorn profuse propagate repentant wizened erudite mollify infusion epitome inveterate astute brazen placid ruse enigmatic annul libertarian encore utilitarian reclusive licentious discern portent abdicate eminent destitute dour emulate debacle apprehend reproach tirade surfeit parody transient consumption interject exorbitant impinge innate empirical antithesis innuendo staid convene dormant potentate balk resilient wallow dirge dour transgress despot discursive inclination grandiloquence contemporaneous cobbler anarchist plaudits pertinacious evince relegate inexorable connive tremulous polemic prescient rescind distend morose zealous vindicate dispatch behemoth pretense preponderance quotidian reputable divulge languid solicitous archaic propensity illicit pacific expiate lethargic fickle caucus nadir surrogate ignominious judicious vindictive extricate magnanimous fecund bereft calamity renown bequeath conduit curtail antecedent potable atone scurrilous abject sophomoric inclination aggrieved petulance whimsical pinnacle rapport refract aggrandize magnanimous desiccated atrophy eloquent efficacious effulgent assess vindicate abject serendipity anachronistic compound antecedent subjugate compliant admonish circumscribed desecrate ubiquitous antecedent sophomoric advocate elated debunk consonant candor reprehensible ascetic neophyte incumbent opulent veneer fastidious propensity daunting implacable bereft capricious amorphous sacrosanct indolent circuitous transgress auspicious archaic incontrovertible antediluvian solipsistic renunciation maxim manifold beguile debauch ascribe malediction umbrage virtuoso prowess corroborate devious empathy modulate brusque semaphore disgruntled carouse artisan noisome defunct impervious pariah allege trenchant temperance affinity amenable propitious extricate canny travesty penchant elucidate impassive patent impute appraise transient pacific anecdote prudence aerial pathos ostensible potable presage encore enervate vitriolic judicious resplendent maxim assiduous chronological quell convoluted jubilant nominal pert bombastic obdurate repudiate retract construe astute hierarchy inure restive circumlocution elicit contrite travesty flabbergasted insipid respite ruminate circuitous vicarious paucity nuance hypocrisy antagonism probity nominal gregarious lenient cursory contravene opulent furtive beguile chronicle banal renunciation inure inveterate variegated clemency disgruntled connive hedonist curtail incisive desolate infusion appraise libertarian demure obtuse cordial duplicity beseech coalesce accost regurgitate immutable culpable gluttony satiate hapless denounce forsake legerdemain furtive morose exalt jubilant relish bias brazen obsolete nebulous pathos frugal deplore dither clergy mawkish irascible fervent plenitude crescendo elude tacit assiduous hypocrisy contusion vehemently distend prowess adumbrate inure collateral audacious convoluted gluttony resilient pellucid salient cosmopolitan chide ascertain banal scurrilous sovereign dour concoct anathema impetuous chronological artisan florid pithy derivative ameliorate presumptuous inure contrite primeval obtuse repose burnish intransigent elude elaborate pacific intimation foster coalesce maelstrom rife umbrage aloof anthology amiable accentuate somnolent disrepute prudence cognizant aversion lithe spurious licentious bane quixotic refurbish amalgamate proscribe duress superfluous aspersion pulchritude allege profane fathom libertarian condolence submissive tirade sensual behemoth conduit concord deferential dissuade edict tedious allay onerous zephyr injunction delineate cacophony increment salutation vilify indigent diligent artisan meticulous rescind diaphanous aggrieved battery congruity evanescent crescendo capricious truculent perusal novice bias ominous quandary prudence amalgamate forage assuage capacious edict scurrilous concord mercurial archaic cloying wane flaccid forestall elicit implicit vilify abridge gluttony soluble congregation etymology extol felicitous innocuous toady agile dilatory aloof insular compliment foil capricious raze abjure amiable maxim privation confound incisive utopia austere paragon paradigm plenitude compliment alleviate raucous delineate potentate deft pernicious ingenious tangential anachronistic implacable expiate clairvoyant grandiloquence elicit coagulate appalling agnostic latent admonish adhere docile elegy anonymous divulge mawkish placate perusal irrevocable tractable hackneyed scathing tacit ostensible arrogate lavish arbitration paradox zenith pert complement probity bard hallowed cunning decorous fractious canny respite temperance solvent haughty knell delegate contemporaneous refract pittance stagnate renown arbitrary acrimony intransigent increment covet desolate hedonist largess expunge malediction salient pert complicit demarcation combustion defunct tedious veracity effulgent commendation exonerate elegy adroit cadence counteract rebuke dissipate arable dissonance garish choreography alleviate transmute intrepid sublime foster perusal surreptitious battery coup heterogeneous superfluous colossus lenient obscure promulgate tacit inquisitor divine increment permeate desolate deft encore amalgamate egregious bourgeois maelstrom remedial oblivious enfranchise extricate interlocutor proscribe veracity candor jubilant deferential transient forum circumspect solvent desecrate eminent arbitration inextricable accede anxiety manifest adept liability impute ostensible despondent berate presage apathetic ubiquitous punctilious abide raze coherent inhibit dynamic irreverence collusion elated perfidious meager restive enthrall benign accolade congruity genial amiable discomfit defer injunction turpitude antiquated intractable capricious inexorable injunction inviolable heterogeneous disparate presage felicitous benign nurture epistolary implement absolution placate medley buffet strident collateral moderate litigant reciprocate forage arbitrary evanescent whimsical contemporaneous fastidious capacious construe vocation preclude analgesic furtive manifold vex implicit mandate transient accretion winsome emote impregnable presumptuous tangential impetuous abrogate pathos largess iridescent sovereign aloof admonish contentious rapport circuitous modulate arboreal meager disparate diffuse obtuse diaphanous derivative lavish insolent accentuate acumen inoculate innovate repentant usurp culpable philanthropic tantamount prepossessing trite impeccable cavort pertinacious tacit irrevocable nurture litigant expiate heterogeneous salve coronation surrogate discern libertarian interminable recalcitrant alias empirical mundane fallacious relish notorious cunning circumspect tractable encore approbation moderate etymology espouse covert partisan pungent cerebral maxim catalyze temerity tantamount annex appraise bashful protean catalyze bourgeois portent blight magnanimous interlocutor terrestrial discomfit resilient epitome quotidian despot soluble clergy fidelity clamor induce pervasive enmity elicit debase boon imperious accede latent phlegmatic reciprocate atypical amalgamate expedient indignation invective pittance coagulate lucid fetter effervescent constituent consumption impassive sagacity lucid injunction denounce ballad grandiose umbrage desiccated rail pallid obdurate disparage platitude intrepid dispatch forestall apprehend boisterous excavate medley hierarchy capricious vicarious bashful iconoclast mercurial resolve exalt elude mandate venerate panacea confidant inextricable impudent debunk elicit pathos tremulous phlegmatic elated clamor innuendo berate corpulence empirical fortitude compliment pungent acquiesce perplex rail debase elated quell elicit anecdote insular surfeit presage raucous agile emote obtuse ballad iridescent abridge aquatic ostensible emaciated utilitarian exasperate induce wistful iridescent propensity obfuscate bombastic novice obstreperous diaphanous implicit cadence accost repulse affront vivacious transient implement speculative amicable decry criteria portent encumber emaciated eschew constituent palatable agnostic resolve eclectic negligent transgress bequeath acquiesce sensuous trenchant appalling truncate presumptuous ascribe vehemently resolve pert emollient demarcation inexorable increment contemporaneous impregnable mitigate eclectic concord dissipate abort pithy complement ennui pacific cunning resplendent revel gregarious antipathy acquiesce parsimony inchoate coronation arbitrary superfluous procure dissemble coagulate efficacious incisive frivolous delineate concoct penitent catalyze fetter ignominious pacific strenuous pariah aversion usurp insolent intransigent agriculture vivacious cosmopolitan plenitude effervescent elicit opulent alias nadir credulity erudite disrepute fervent abide plaudits acute idiosyncratic archaic atrophy reciprocate affront malediction infusion fervent devious wrath innate brazen inextricable conundrum salient approbation superfluous negligent anomaly zenith innocuous wistful respite odious vocation profligate insinuate solvent exalt oscillate impetuous querulous balk clandestine anesthesia juxtaposition rectitude rancid espouse recalcitrant repulse plethora diffuse appalling acumen augment guile torrid frivolous divine impeccable confound myriad aerial fortuitous bilk incontrovertible coerce cloying quandary remedial irrevocable virtuoso mutable",
    },
  ],
};
export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  
  res.status(200).json(words[req.body.lang]);
}
