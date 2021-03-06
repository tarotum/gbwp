import React, { useState } from "react"
import styles from "./styles.module.css"
import Layout from "../../layouts/ru/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import boxOfDotsLink from "../../images/icon-box.svg"
import classNames from "classnames"

import mailTo from "../../utils/mailTo"
import InlineButton from "../../components/InlineButton"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"
import { Link, graphql } from "gatsby"
import schemaOrg from "./schemaOrg.json"
import { seoDefaultData } from "../../utils/seo"

const Boxes = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const Faq = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)
  const contactEmail = data.site.siteMetadata.adminEmail
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  return (
    <Layout
      location={location}
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
      schemaOrg={schemaOrg.ru}
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          faq
        </Headline>

        <Boxes className={styles.boxFirst} />

        <Boxes className={styles.boxSecond} />

        <Headline Tag="h2" className={styles.subtitle}>
          Организационные вопросы
        </Headline>
        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Что нужно, чтобы вы могли начать работу?">
            <p>
              Нам нужно сперва познакомиться с вами и вашим проектом. Для этого
              вы заполняете бриф, а мы проводим для вас{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={mailTo.mail.ru}
              >
                бесплатную консультацию
              </a>
              . Если мы с вами совпадём характерами, останется только составить
              техническое задание и подписать договор.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="А что делать, если мой проект под NDA?">
            <p>
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={`maito:${contactEmail}`}
              >
                Напишите нам
              </a>
              , мы подпишем соответствующие документы и сможем свободно всё
              обсудить.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Вы делаете тестовые задания?">
            <p>
              Конечно, мы выполняем тестовые задания, но по стандартной
              стоимости услуг.
            </p>

            <p>
              Мы считаем, что формат бесплатного тестового задания заставляет
              исполнителя фокусироваться не на потребностях проекта, а на том,
              как впечатлить заказчика. Чаще всего результаты таких заданий не
              объективны и это в будущем может вредить всему проекту.
            </p>

            <p>
              Тем не менее, мы готовы сделать исключение в том случае, если
              перед нами интересный инди проект, который обращается к нам за
              помощью и круто себя презентует. Если это о вас —{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={`maito:${contactEmail}`}
              >
                смело пишите
              </a>
              !
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Кто составляет техническое задание на проект?">
            <p>
              В идеале ТЗ на проект составляет клиент. В таком случае у обеих
              сторон изначально максимально чёткие ожидания от результатов
              сотрудничества. Это помогает выбрать нужный вектор и закладывает
              прочный фундамент для успешной работы.
            </p>
            <p>
              Мы же с радостью поделимся с вами
              <InlineButton onClick={() => setShowForm(true)}>
                проверенным темплейтом технического
              </InlineButton>
              задания и при необходимости поможем с заполнением.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Как организован остальной процесс работы?">
            <p>
              В зависимости от выбранной услуги процесс может варьироваться,
              хотя основные 6 стадий остаются неизменными: знакомство,
              подготовка, запуск, продакшн, приём проекта и его дальнейшая
              поддержка.
            </p>

            <p>
              Как организован процесс работы для каждой из наших услуг, можно
              подробно прочитать на страницах{" "}
              <Link to="/ru/services/music-composing">создание музыки</Link>,{" "}
              <Link to="/ru/services/sound-design">звуковой дизайн</Link>,{" "}
              <Link to="/ru/services/audio-branding">аудиобрендинг</Link> и{" "}
              <Link to="/ru/services/voice-casting">голосовое озвучивание</Link>
              .
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
        <ModalContactForm
          title="Темплейт технического задания"
          subTitle="Мы уверены, что правильно составленное ТЗ повышает шансы на успех проекта. Поэтому с радостью делимся тем, что работает для нас!"
          open={showFrom}
          onClose={() => setShowForm(false)}
        />
        <Headline Tag="h2" className={styles.subtitle}>
          Финансовые вопросы
        </Headline>

        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Вы работаете по предоплате?">
            <p>
              Да, мы работаем по предоплате. Чаще всего аванс — это 50 % суммы,
              но в некоторых случаях нужна полная предоплата.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="В каких случаях предоплата 100 %?">
            <p>
              Полная предоплата нужна при любом заказе голосового озвучивания и
              если вы выберете пакет S.O.S для создания музыки.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Как можно оплатить ваши услуги?">
            <p>
              Мы принимаем оплату за оказанные услуги только на расчётный счёт
              физического лица предпринимателя (ФЛП) или на счёт Payoneer.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Headline Tag="h2" className={styles.subtitle}>
          Юридические вопросы
        </Headline>

        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Есть ли у вас договор?">
            <p>
              Да, с каждым клиентом мы заключаем договор о предоставлении услуг.
              Он у нас крутой и крафтовый — всё благодаря команде юристов, с
              которой мы сотрудничаем.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Какие права на результат я получу?">
            <p>
              На созданные нами звуковые эффекты, голосовое озвучивание и
              элементы аудио бренда мы по умолчанию передаём вам исключительные
              материальные права интеллектуальной собственности, конечно, с
              одним условием — после оплаты наших услуг.
            </p>

            <p>
              На созданные нами музыкальные композиции мы по умолчанию передаём
              вам имущественные права интеллектуальной собственности, с
              ограничением возможности свободной их перепродажи и перевыпуска,
              вне оговоренного нами проекта, а также получения монетизации со
              стриминговых сервисов и маркетплейсов.
            </p>

            <p>
              При необходимости мы можем передать вам все исключительные
              имущественные права интеллектуальной собственности без каких-либо
              ограничений, но это следует оговаривать отдельно и в таком случае
              общая стоимость проекта будет выше.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Почему вы просто не передаёте все исключительные права на музыку?">
            <p>
              Иногда саундтреки становятся дополнительным средством монетизации
              проекта и источником сверхприбыли. Мы считаем справедливым, что в
              подобных случаях композитор имеет право на дополнительную
              компенсацию.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Contacts>
          Не нашли ответ на важный для вас вопрос? Обязательно задайте его нам –
          мы будем рады познакомиться с вами и помочь.
        </Contacts>
      </Inner>
    </Layout>
  )
}

export const query = graphql`
  query FAQPageRuQuery {
    site {
      siteMetadata {
        adminEmail
      }
    }
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: "ru" }
      acf: { page_slug: { eq: "faq" } }
    ) {
      ...seoPageData
    }
  }
`

export default Faq
