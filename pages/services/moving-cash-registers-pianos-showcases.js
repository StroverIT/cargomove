import React from "react";
import ContactUs from "../../components/indexPage/ContactUs";
import SwiperServices from "../../components/SwiperServices";
import Title from "../../components/Title";

export default function CleaningBasementsAndAttics() {
  return (
    <section className="min-h-screen mt-40 ">
      <section className="container font-sans">
        <section className="flex-center">
          <Title title="Преместване на пиана, каси, витрини" size="text-3xl" />
        </section>
        <section>
          <section className="lg:px-56">
            <h3 className="mt-1 text-lg font-semibold">
              Какво трябва да знаете при преместване на пианo и защо не трябва
              да го правите сами?
            </h3>

            <p>
              Преди да сте решили окончателно да преместите пианото си сами,
              имайте предвид, че това е опасна и прецизна задача, която крие
              своите рискове и помислете дали да не повикате професионална
              помощ. Пианата не влизат в стандартен асансьор, ако решите да го
              обърнете по височина, рискувате да повредите музикалния
              инструмент. Опаковката при преместването на пиано е необходимо
              средство освен, ако не искате да го повредите.
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              Какво е необходимо за преместване на пиано?
            </h3>
            <ul>
              <li>- Професионална количка</li>
              <li>- Специализирани ленти за вдигане на тежести</li>
              <li>- Бус/камион с падащ/а борд/платформа</li>
              <li>- Опаковъчни материали.</li>
              <li>- Минимален брой души 4-ма човека.</li>
            </ul>
            <p>
              Да и ние знаем, че е възможно да се премести пианото от двама, но
              докога? Хората, които извършват подобни опити плащат твърде висока
              цена след това, дали от злопоука, контузия и прочие. Шансът за
              подобен сценарий е твърде голям. Оставете счупеното пиано след
              това, Вие готови ли сте да поемете риска?
            </p>

            <h3 className="mt-1 text-lg font-semibold">
              Защо да изберете нашата професионална услуга по преместване на
              пиано?
            </h3>

            <p>
              Ние от Мувекс България искаме Вие да се чувствате комфортно и
              уверени, че вашето пиано ще бъде добре опаковано, преместено
              правилно и сигурно натоварено и защитено по време на транспорта.
              Нашата цел е да задоволим вашите желания и изисквания. Позволете
              ни да спестим вашите пари и нерви!
            </p>
          </section>
        </section>
        <section className="my-14 lg:mx-36">
          <ContactUs
            color="border-orange"
            btnColor="bg-blue"
            bgColor="bg-blue-50"
            number="+359 89 506 3670"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            typePage="Web"
            mx="md:mx-10"
          />
        </section>
      </section>
      <section className="mt-20 font-sans flex-center">
        <Title title="Вижте и другите ни услуги" size="text-4xl" />
      </section>
      <section className="">
        <SwiperServices service="piano" />
      </section>
    </section>
  );
}
