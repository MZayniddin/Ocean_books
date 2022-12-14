import c from "./AboutUs.module.css";
const AboutUs = () => {
  return (
    <div className={c.about}>
      <div className="container">
        <p className={c["about-title"]}>
          <strong>«Ocean Books» – xush kelibsiz!</strong>
        </p>
        <p>
          Mutolaa – har qanday yoshda ham urfda. O‘zingiz uchun badiiy va
          ilmiy-ommabop adabiyotning ajib dunyolarini kashf eting, zamonaviy
          non-fikshn yo‘nalishi bilan bilim va ko‘nikmalaringizni yanada
          boyiting yoki ertaknamo qissalarning yorqin nashrlari bilan
          bolajonlarni quvontiring.
        </p>
        <p>
          oceanbooks.uz sayti sahifalarida barcha ommabop zamonaviy janrlardagi
          kitoblar taqdim etilgan:
        </p>
        <ol>
          <li>
            <span>
              <strong>Badiiy adabiyotlar</strong> bir necha nashriyotlar
              tomonidan taqdim qilingan. Biz eskirmas klassika namunalarini
              hamda dunyo miqyosidagi zamonaviy bestsellerlarni taklif etamiz.
              Kitoblar turli narx toifalariga mansub.
            </span>
          </li>
          <li>
            <span>
              <strong>Ommabop biografiya</strong> janrini alohida ta’kidlash
              mumkin. Ko‘plab kitobxonlar dunyo tarixida muhim o‘rin tutgan
              mashhur insonlar haqida batafsilroq bilib olishga qiziqishadi.
            </span>
          </li>
          <li>
            <span>
              <strong>Bolalar adabiyoti</strong> – kitob savdosida ommabopligi
              bo‘yicha ikkinchi o‘rinda turuvchi toifa. Zamonaviy dunyoning
              dijital-texnologiyalariga qaramasdan, kichkintoylarni
              tarbiyalashga ko‘mak borasida birinchilik baribir kitoblarga
              tegishli. Bolajonlar yaxshilik va yomonlik, olijanoblik va
              halollik haqidagi tushunchalarni faqat ertaklar orqali
              o‘zlashtirishadi. Chiroyli suratlar bolalarga hayvonlar va
              o‘simliklar olamining tuzilishi, me’moriy va madaniy qadriyatlar
              haqida hikoya qilib beradi.
            </span>
          </li>
          <li>
            <span>
              <strong>Detektivlar va fantastika</strong>
              ommaboplik bo‘yicha yetakchilikni hech qachon qo‘ldan bermaydi.
              Ushbu janrlardagi yangi kitoblar zamonamizdagi iste’dodli
              mualliflar tomonidan taqdim etilgan.
            </span>
          </li>
          <li>
            <span>
              <strong>Biznes </strong>
              yo‘nalishidagi kitoblar tobora ko‘proq kitobxonlarning mehrini
              qozonib borayotir. Muvaffaqiyatli tadbirkorlarning tajribalari
              katta ahamiyatga ega.
            </span>
          </li>
          <li>
            <span>
              Bugungi kunda
              <strong> Psixologiya va va shaxsiy rivojlanish</strong> bilan
              ertami-kechmi har bir ilg‘or inson qiziqadi. Mazkur yo‘nalishdagi
              kitoblar kishilarga shiddatli zamonaviy dunyo sharoitlarida stress
              sharoitlarini yengishda hamda o‘zining ijodiy, ishga oid yoki
              ma’naviy yo‘lini topishda yordam beradi.
            </span>
          </li>
        </ol>
        <p>
          O'zbek tilidagi kitoblardan tashqari, kutubxonamiz chet tillardagi
          adabiyotlarni ham o‘z ichiga olgan. «Romeo va Juletta»ni originalda
          mutolaa qilishni istaysizmi? Yoki «Kichkina shahzoda»ni fransuz
          tilidami? Marhamat.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
