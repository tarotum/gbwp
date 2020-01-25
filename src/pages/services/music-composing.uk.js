import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../layouts/uk/sidebar"
import ServiceHero from "../../components/ServiceHero"
import ContactUs from "../../components/ContactUs"
import Sidebar from "../../components/Sidebar"
import ServiceSection from "../../components/ServiceSection"
import ServiceIconList from "../../components/ServiceIconList"
import ServiceIcon from "../../components/ServiceIcon"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"

import StandartIcon from "../../images/plans/standart.svg"
import SoftIcon from "../../images/plans/soft.svg"
import SosIcon from "../../images/plans/sos.svg"
import PremiumIcon from "../../images/plans/premium.svg"

import GamesIcon from "../../images/service-icons/games.svg"
import AudioIcon from "../../images/service-icons/audio.svg"
import FilmIcon from "../../images/service-icons/film.svg"
import MonsterIcon from "../../images/service-icons/monster.svg"
import PlayerIcon from "../../images/service-icons/player-2.svg"
import MasksIcon from "../../images/service-icons/masks.svg"

const MusicCreation = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Створення музики"
          text="Під час створення ігор, як і під час зйомок кіно, звук має дуже велике значення. 60 або навіть 70 % відчуттів створюється саме завдяки звуку. Водночас звук — це не тільки музичний супровід, а і звукові ефекти. Їхня наявність або відсутність дуже сильно визначає атмосферу гри."
          autor="Хідео Кодзіма"
          image={sidebarImage}
        />
      }
      location={location}
      title="Створення музики"
    >
      <ServiceHero>
        <h3>Найбільше ми любимо музику за її можливості.</h3>
        <p>
          Адже це найсильніший вид мистецтва, якщо порівнювати їх усіх за
          емоційним впливом. Знаєте, як це буває, коли одна пісня змінює ваш
          настрій?
        </p>
        <p>
          Усього декілька нот, правильний ритмічний малюнок і ось уже людина
          готова до великих звершень. А варто злегка змінити аранжування — і
          вона раптово віддається сумним спогадам. Усе це захоплює нас і змушує
          кожен день робити те, що ми робимо. Слухати, вивчати і, у решті-решт,
          створювати музику.
        </p>
      </ServiceHero>
      <ServiceSection title="Що ми робимо?">
        <p>Ми пишемо саундтреки і створюємо музику для:</p>

        <ServiceIconList>
          <ServiceIcon title="Iгр" icon={GamesIcon} />
          <ServiceIcon title="Брендів та реклами" icon={AudioIcon} />
          <ServiceIcon title="Фільмів" icon={FilmIcon} />
          <ServiceIcon title="Мультфільмів" icon={MonsterIcon} />
          <ServiceIcon title="Трейлерів" icon={PlayerIcon} />
          <ServiceIcon title="Театральних постановок" icon={MasksIcon} />
        </ServiceIconList>

        <p>
          Також ми створюємо музику для motion-графіки, але вона швидше належить
          до звукового дизайну, так що про неї можете прочитати ось тут.
        </p>
        <p>
          Ми не пишемо «мінусовки» та пісні для корпоративів. А ось корпоративні
          гімни — це ми з радістю, докладніше дивіться{" "}
          <Link to="/services/audio-branding">тут</Link>.
        </p>
      </ServiceSection>
      <ServiceSection title="Кращі саундтреки">
        <iframe
          title="Кращі саундтреки"
          width="100%"
          height="450"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/174940453&color=%23f23b0d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="Як проходить процес?">
        <p>
          За останні кілька років ми розробили просту схему для співпраці. Таку,
          щоби вам на кожному етапі було зрозуміло, що відбувається, й у вас був
          контроль над процесом. А ми могли в цей час створити саме ту музику,
          яка потрібна вашому проекту.
        </p>
        <p>Усього шість етапів:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знайомство">
            <p>
              ви заповнюєте бриф і отримуєте безплатну консультацію. Ми
              знайомимося один з одним і розуміємо, наскільки готові до
              співпраці. Для нас важливо збігатися з клієнтом у загальному
              баченні і принципах роботи.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підготовка">
            <p>
              на цьому етапі ви складаєте технічне завдання, якщо потрібно — ми
              допомагаємо. Чому ми не робимо ТЗ самостійно — читайте тут. Крім
              того, ми підбираємо референси для майбутнього трека й разом із
              юристами готуємо договір співпраці. Обговорюємо й погоджуємо все з
              вами й переходимо до наступного етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо
              до виконання скетчів. Вони в нас найчастіше у формі 30-секундної
              демки головної теми треку.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              цей етап — найвідповідальніший. Ми надсилаємо вам демо-матеріали
              та отримуємо від вас фідбек. Тут від вас знадобиться максимальна
              концентрація на процесі, адже саме від ваших побажань залежить
              подальша доля композиції. Ми допрацьовуємо трек згідно з
              пропозиціями й надсилаємо вам на погодження.
            </p>
            <p>
              Залежно від обраного пакета послуг у вас може бути до 5 безплатних
              правок на одну композицію.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Прийом проекту">
            <p>
              після всіх погоджень ми висилаємо вам кінцевий файл із треком. Цей
              момент — останній шанс скористатися безплатними правками. Коли все
              готово, ми з вами підписуємо Акт прийому-передачі і ви надсилаєте
              нам другу частину оплати, якщо це передбачено обраним пакетом
              послуг
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підтримка">
            <p>
              найчастіше цей етап потрібен для ігрових «довгобудів» і
              обговорюється окремо. Скажемо тільки, що ми завжди раді тривалій
              співпраці.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Наші пропозиції">
        <p style={{ marginBottom: 60 }}>
          Крім зрозумілої схеми співпраці ми розробили ще і зрозумілі пакети зі
          створення музики. Ми проаналізували досвід попередніх проектів,
          відгуки клієнтів і зрозуміли, що так вам буде набагато легше обрати
          оптимальний для вашого проекту варіант.
        </p>

        <PlanList label="Всі пропозиції" onClick={() => {}}>
          <PlanCard
            title="Standart"
            icon={StandartIcon}
            subTitle="назва нудна, пакет крутий"
            list={[
              "виконання — до 7 робочих днів",
              "5 безплатних правок",
              "передоплата 50 %",
            ]}
          />
          <PlanCard
            title="Soft Launch"
            icon={SoftIcon}
            subTitle="тестуємо ваші гіпотези"
            list={[
              "тривалість треку — 30 се",
              "виконання — до 5 робочих днів",
              "5 безплатних правок",
              "передоплата 50 %",
              "у разі подальшого замовлення пакетів Standart / Premium на цей же трек  вартість Soft Launch вже буде зарахована",
            ]}
          />
          <PlanCard
            title="S.O.S"
            icon={SosIcon}
            subTitle="коли все горить і палає"
            list={[
              "термін виконання — ASAP",
              "без правок",
              "повна передоплата",
            ]}
          />
          <PlanCard
            title="Premium"
            icon={PremiumIcon}
            subTitle="так, ви на коні"
            list={[
              "термін виконання — ASAP",
              "5 безплатних правок",
              "передоплата 50 %",
            ]}
          />
        </PlanList>
      </ServiceSection>
      <ServiceSection title="Наш підхід">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Багато людей вважають створення музики чимось незбагненним і
            таємничим. Деякі ж стверджують, що вся справа — виключно в техніці і
            правильній методології. Нам здається, за роки практики ми нарешті
            наблизилися до розуміння, як усе влаштовано.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Є така річ, як чисте натхнення. Цей стан знайомий усім. Коли нібито
            твоїми руками хтось інший створює дещо круте: пісню, картину, вірш
            або що-небудь інше. Неймовірний і рідкісний досвід. Для роботи таке
            явно не підійде. :)
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Інша справа — методичний підхід. Береш усі накопичені теоретичні
            знання й перетворюєш їх на композицію. Звичайно, згідно з усіма
            правилами й техніками. Надійно, впевнено і… нудно. Така музика «не
            чіпляє» тому що найчастіше подібний підхід від початку позбавлений
            емоції.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Ми ж знайшли баланс. Уся справа — у «плануванні» натхнення.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="center">
            Коли ми починаємо роботу над проектом, ми з’ясовуємо якомога більше
            про нього. Дізнаємося його атмосферу, настрій, посил. Вивчаємо
            цільову аудиторію, їхні інтереси. Навіть розпитуємо про особисте
            ставлення клієнта до продукту. Чим більше інформації ми дізнаємося —
            тим легше і краще вона трансформується в підсвідомості композитора в
            ідею та емоцію саундтрека.
          </CardDeckItem>
          <CardDeckItem variant="waves-revers" textAlign="center">
            Далі — буквально справа техніки. Ми беремо «ядро» й навколо нього
            вибудовуємо всю композицію.
          </CardDeckItem>
          <CardDeckItem variant="circle" textAlign="center">
            Творчо й надійно.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Відгуки клієнтів">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MusicCreationUKPageQuery {
    reviews: allWordpressWpClientReview(
      filter: {
        acf: { music_composing: { music_composing_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
      }
      sort: {
        fields: acf___music_composing___music_composing_order
        order: DESC
      }
    ) {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 250
                maxHeight: 250
                srcSetBreakpoints: [445, 900]
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        meta: acf {
          company
          position
        }
      }
    }
    sidebarImage: file(relativePath: { eq: "services/music-creation.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sitePage {
      id
      path
    }
  }
`

export default MusicCreation
