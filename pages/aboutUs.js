import Image from "next/legacy/image";
import React from "react";
import ContactUs from "../components/indexPage/ContactUs";
import Title from "../components/Title";

export default function AboutUs() {
  return (
    <section className="mt-20">
      <div className="fixed -z-10">
        <div className="relative">
          <div className="relative w-screen h-screen ">
            <Image
              src="/IMG_2191.jpeg"
              alt="image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 z-10 w-screen h-screen bg-dark-transparent"></div>
        </div>
      </div>
      <section className="relative z-20 pt-16 bg-white smToXl:container xl:mx-80 ">
        <div className="flex-col flex-center">
          <Title title="Movex Bulgaria" size="text-5xl" />
          <p className="max-w-lg mt-5 text-center">
            Фирмата Movex Bulgaria е специализира в сферата на хамалогията и
            логистиката, с дълги години усърдна работа сме постигнали голяма
            аудитория от клиенти и смятаме да продължаваме да го поддържаме и
            развиваме
          </p>
        </div>
        <section className="grid mt-20 lg:grid-cols-2 ">
          <div className="p-10 border-orange-100 border-y flex-center max-md:order-2">
            <div className="flex-col flex-center">
              <Title title="Как работим?" size="text-3xl" />
              <p className="mt-2 text-sm text-center md:max-w-sm ">
                Бързо, лесно и прецизно с цел професионално изпълнение на
                услугите ни.
              </p>
            </div>
          </div>
          <div className="py-5 bg-orange-100 flex-center md:py-10 max-md:order-1">
            <div className="relative w-20 h-20 md:h-44 md:w-44 ">
              <Image
                src="/about-us/professional-services.png"
                layout="fill"
                alt="професионални услуги услуги"
              />
            </div>
          </div>
          <div className="p-10 border-b border-orange-100 flex-center max-md:order-4">
            <div className="flex-col flex-center">
              <Title title="Нашите ценности" size="text-3xl" />
              <ul className="max-w-md mt-2 text-sm list-disc">
                <li>На първо място сте Вие</li>
                <li>Уважение</li>
                <li>Организираност</li>

                <li>Постоянна ангажираност и съпричасност към клиента</li>
                <li>Баланс между качеството, ефективност, своевременост</li>
              </ul>
            </div>
          </div>
          <div className="order-1 py-5 flex-center bg-orange md:py-10 max-md:order-3">
            <div className="relative w-20 h-20 md:h-44 md:w-44 ">
              <Image
                src="/about-us/respect.png"
                layout="fill"
                alt="професионални услуги услуги"
              />
            </div>
          </div>
          <div className="p-10 border-b border-orange-100 flex-center max-md:order-6">
            <div className="flex-col flex-center">
              <Title title="Нашата история" size="text-3xl" />
              <p className="max-w-md mt-2 text-sm text-center">
                Бяхме млади и амбициозни студенти с голямо желание за развитие,
                както финансово така и физически, затова открихме най-добрият
                вариант за нас и това е хамалогията. През 2019 година нашето
                хоби се превърна в професионален бизнес с името “Movex Bulgaria”
                и до ден днешен не е спирал да се равива.
              </p>
            </div>
          </div>
          <div className="order-1 py-5 bg-orange-100 flex-center md:py-10 max-md:order-5">
            <div className="relative w-20 h-20 md:h-44 md:w-44">
              <Image
                src="/about-us/business.png"
                layout="fill"
                alt="професионални услуги услуги"
              />
            </div>
          </div>
        </section>
        <section className="flex-col py-16 flex-center ">
          <div className="flex-center">
            <Title title="ЕКИПЪТ" size="text-4xl" />
          </div>

          <section className="grid mt-16 md:grid-cols-3 gap-x-20 gap-y-10">
            <div className="flex-col flex-center">
              <div className="relative transition-all border-2 rounded-full cursor-pointer w-36 h-36 hover:scale-110 border-primaryBlue-100 ">
                <Image
                  src="/djulia.jpg"
                  alt="growth for you and your company"
                  layout="fill"
                  className="object-contain rounded-full "
                />
              </div>
              <h3 className="mt-3 text-xl text-center">Денислав Цветков</h3>
              <p>Управител</p>
            </div>
            <div className="flex-col flex-center">
              <div className="relative transition-all border-2 rounded-full cursor-pointer w-36 h-36 hover:scale-110 border-primaryBlue-100 ">
                <Image
                  src="/hrisi2_durt_crop.jpg"
                  alt="growth for you and your company"
                  layout="fill"
                  className="rounded-full bg-blend"
                />
              </div>
              <h3 className="mt-3 text-xl text-center">Йоана Стайкова</h3>
              <p>Hr консултант</p>
            </div>
            <div className="flex-col flex-center">
              <div className="relative transition-all border-2 rounded-full cursor-pointer w-36 h-36 hover:scale-110 border-primaryBlue-100 ">
                <Image
                  src="/hrisi2_durt_crop.jpg"
                  alt="growth for you and your company"
                  layout="fill"
                  className="rounded-full bg-blend"
                />
              </div>
              <h3 className="mt-3 text-xl text-center">Емил Златинов</h3>
              <p>Ит съпорт</p>
            </div>
          </section>
        </section>
        <section className="pb-20">
          <ContactUs
            color="border-orange"
            btnColor="bg-orange"
            bgColor="bg-orange-50"
            number="+359 89 506 3670"
            scrollBarThumb="scrollbar-thumb-primaryBlue-150"
            scrollBarTrack="scrollbar-track-primaryBlue-500"
            typePage="Web"
            mx="md:mx-10"
          />
        </section>
      </section>
    </section>
  );
}
