// const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const logger = require("firebase-functions/logger");
// const avatar = require("vue3-avataaars");

// admin.initializeApp();

// const names = [
//   "Fikri Sabit",
//   "Dursun Döner",
//   "Nuri Kaçın",
//   "Sıtkı Sıyrılmış",
//   "İnat Temiz",
//   "Fazlı Özkanar",
//   "Ferdi Tesadüf",
//   "Makbule Geç",
//   "Durmuş Oturmuş",
//   "Şükrü Beklenmedik",
//   "Hamdi Fırıldak",
//   "Ferhat Delikan",
//   "Hulusi Yazar",
//   "Sabri Kalem",
//   "Cemal Yürekli",
//   "Haydar Çakmak",
//   "Erdem Kırık",
//   "Rasim Korkmaz",
//   "Veli Tetik",
//   "Samet Sancak",
//   "Mahir Cevap",
//   "Kamil Dürüst",
//   "Akif Şık",
//   "Barış Gülen",
//   "Caner Bakır",
//   "Demir Çelik",
//   "Ekrem Sert",
//   "Fikret İnat",
//   "Güven Şahin",
//   "Haluk Kaya",
//   "İsmail Eser",
//   "Kerem Şaşkın",
//   "Levent Akıllı",
//   "Murat Deli",
//   "Okan Ateş",
//   "Poyraz Fırtına",
//   "Rasim Gül",
//   "Savaş Barış",
//   "Tufan Fırtına",
//   "Uğur Şanslı",
//   "Vural Döner",
//   "Yavuz Hızlı",
//   "Zafer Kazanan",
//   "Umut Bekler",
//   "Timur Zaman",
//   "Rıza Cevap",
//   "Münir Kılavuz",
//   "Naim Hızlı",
//   "Oktay Çalışkan",
//   "Talip Arar",
//   "Nadir Yalnız",
//   "Vedat Gider",
//   "Cenk Dövüş",
//   "Rauf Sakin",
//   "Orhan Döner",
//   "Fuat Saran",
//   "Ender Bulur",
//   "Haldun Çabuk",
//   "Metin Yazar",
//   "Mesut Mutlu",
//   "Cevdet Pişkin",
//   "Zafer Ezer",
//   "İrfan Sakin",
//   "Sadık Gerçek",
//   "Şeref İyilik",
//   "Tarık Karar",
//   "Servet Para",
//   "Hikmet Bilen",
//   "Namık Kemal",
//   "Nurhan Güzel",
//   "Kenan İnce",
//   "Selçuk Erdem",
//   "Yusuf Sefer",
//   "İskender Doner",
//   "Kemal Yakışıklı",
//   "Oğuz Kaçak",
//   "Rüştü Çift",
//   "Suat Yaz",
//   "Vedat Kaya",
//   "Cahit Korkak",
//   "Esat Doğru",
//   "Ertan Yıldız",
//   "Faruk Anlam",
//   "Erkan Açık",
//   "Çetin Zor",
//   "Bora Gök",
//   "Sinan Çılgın",
//   "Tuncay Kalem",
//   "Şamil Kahraman",
//   "Sırrı Anlatmaz",
//   "Aziz Bilge",
//   "Selami Sessiz",
//   "Bahri Derya",
//   "Servet İster",
//   "Aydınlık Parlak",
//   "İbrahim Düşünür",
//   "Tahir Temiz",
//   "Halit Güçlü",
//   "Kemalettin Pişman",
//   "Latif Cömert",
// ];

// const randomName = () => {
//   return names[Math.floor(Math.random() * names.length)];
// };

// exports.userSignup = functions.auth.user().onCreate(async (user) => {
//   // eslint-disable-next-line new-cap
//   const avatarProps = avatar.Factory({isCircle: true});

//   await admin.firestore().collection("users").doc(user.uid).set({
//     displayName: randomName(),
//     avatar: JSON.stringify(avatarProps),
//     createdDate: admin.firestore.FieldValue.serverTimestamp(),
//   });

//   logger.info("Hello logs!", {structuredData: true});
// });

