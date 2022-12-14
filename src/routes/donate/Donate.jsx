import c from "./Donate.module.css";
const Donate = () => {
  return (
    <div className={c.donate}>
      <div className="container">
        <p>
          Hurmatli <q>Ocean Books</q> books homiysi,
          <br /> <br /> Biz sizning yordamingizga muhtojmiz va hozir siz bizning
          ishimizga katta ta'sir o'tkaza olasiz.{" "}
          <strong>
            2022-yil 31-dekabrgacha olingan barcha xayriyalar 2-1-ga mos
            keladigan sovg'a tanlovimiz davomida 3 baravar ko'payadi.
          </strong>{" "}
          Ya'ni, 10 dollarlik sovg'a bizga ishlashda yordam berish uchun 30
          dollarga aylanadi! <br /> <br />
          <q>Ocean Books</q> loyihasi sifatida — barcha bilimlarga universal
          kirishni targ'ib qilishga bag'ishlangan notijorat internet kutubxonasi
          — Ochiq kutubxona raqamli kitoblarni hamma, hamma joyda foydalanish
          mumkin qilish ustida ishlamoqda. Va biz har qachongidan ham tezroq
          o'sib bormoqdamiz. Biz ishga tushirganimizdan beri 4,6 milliondan
          ortiq kitobni raqamlashtirdik va har kuni yana 3500 ta kitobni
          qo'shmoqdamiz. <br /> <br />
          <q>Ocean Books</q> ning asosiy maqsadi insoniyatning barcha nashr
          etilgan asarlarini dunyodagi hamma uchun ochiq qilishdir. Ko'lami va
          ambitsiyalari katta bo'lsa-da, bu maqsad bizning tushunamiz. Bunga
          erishish uchun kutubxonachilar, mualliflar, texnologlar, siyosatchilar
          va, eng muhimi, siz kabi tarafdorlar ishtirok etishi kerak. <br />{" "}
          <br />
          Kutubxonalar bepul bo'lishi kerakligiga qat'iy ishonganimiz sababli,
          biz hech qachon reklama ko'rsatmaymiz yoki kolleksiyamizga kirish
          uchun haq olmaymiz.Buning o'rniga biz serverlar, xodimlar va
          raqamlashtirish xarajatlarini to'lashda siz kabi shaxslarning
          saxiyligiga tayanamiz. <br /> <br /> Bizga qo'shilganingiz uchun
          tashakkur. <br />
          <br />
          <q>Ocean Books</q>
        </p>
        <div className={c["donate-type"]}>
          <strong>Qo'llab-quvvatlash</strong>
          <div className={c["donation-type"]}>UzCard: <span>8600 1234 5678 9010</span></div>
        </div>
      </div>
    </div>
  );
};

export default Donate;