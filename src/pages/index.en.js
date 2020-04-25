import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/en/home"
import Hero from "../components/lendingSections/Hero"
import About from "../components/lendingSections/About"
import Why from "../components/lendingSections/Why"
import Services from "../components/lendingSections/Services"
import ChosenWorks from "../components/lendingSections/ChosenWorks"
import Contacts from "../components/lendingSections/Contacts"
import SectionWithText from "../components/SectionWithText"
import FeatureCard from "../components/FeatureCard"

import icon1 from "../images/vp-icons/icon-1.svg"
import icon2 from "../images/vp-icons/icon-2.svg"
import icon3 from "../images/vp-icons/icon-3.svg"
import icon4 from "../images/vp-icons/icon-4.svg"
import icon5 from "../images/vp-icons/icon-5.svg"
import icon6 from "../images/vp-icons/icon-6.svg"

import mailTo from "../utils/mailTo"
import ModalContactForm from "../components/ModalContactForm/ModalContactForm"
import InlineButton from "../components/InlineButton"

const Home = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)

  const works = data.works.nodes

  return (
    <Layout location={location}>
      <Hero link="/en/portfolio" />
      <About
        title="VP Production"
        text="We are a team that creates music, sound effects and produces voice-overs on the verge of pure creativity and functionality."
        linkLabel="About us"
        linkURL="/en/about"
      />
      <Why>
        <FeatureCard img={icon1}>
          We are partners of our clients. It is the success of your specific
          project that is important to us, and not endless samey-same work.
        </FeatureCard>
        <FeatureCard img={icon2}>
          We look more in-depth than the technical task and ask many questions
          so that the final sound works for your audience.
        </FeatureCard>
        <FeatureCard img={icon3}>
          For four years of work, we have broken zero deadlines. This describes
          our team and managers in the best way.
        </FeatureCard>
        <FeatureCard img={icon4}>
          Thanks to the{" "}
          <a href="https://digilaw.pro/" target="__blank" rel="nofollow">
            Digilaw
          </a>{" "}
          contract, you will gain control over the process and the necessary
          rights to the result of the work.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Millions of people have already listened to our work, and many of them
          were satisfied. You can check this <Link to="/en/reviews">here</Link>.
        </FeatureCard>
        <FeatureCard img={icon6}>
          How about a{" "}
          <a target="_blank" href={mailTo.mail.en}>
            free consultation
          </a>{" "}
          or a cool{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            technical task template
          </InlineButton>
          ? We are always open to communication, so feel free to{" "}
          <a target="_blank" href={mailTo.mail.en}>
            email us
          </a>
          .
        </FeatureCard>
      </Why>
      <ModalContactForm
        title="Technical task template"
        subTitle="We are confident that a correctly made technical task increases the chances of success of the project. Therefore, we are happy to share what works for us!"
        open={showFrom}
        onClose={() => setShowForm(false)}
      />
      <Services
        title="Our services"
        services={[
          {
            title: "Music Composing",
            link: "/en/services/music-composing",
          },
          {
            title: "Audio Branding",
            link: "/en/services/audio-branding",
          },
          {
            title: "Sound Design",
            link: "/en/services/sound-design",
          },
          {
            title: "Voice Casting",
            link: "/en/services/voice-casting",
          },
        ]}
      />
      <ChosenWorks
        title="Featured Works"
        works={works}
        linkLabel="Portfolio"
        linkURL="/en/portfolio"
      />
      <SectionWithText linkLabel="Our Values" link="/en/our-values">
        <h3>
          Using audio, we inspire listeners on both sides of audiovisual
          projects to live new experiences and discover their creative
          potential.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query HomePageEnQuery {
    works: allWordpressWpWork(
      filter: {
        acf: { front_page: { front_page_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___front_page___front_page_order, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Home
