import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../../layouts/en/default"
import { Inner } from "../../components/Container"
import SingleNavagation from "../../components/SingleNavagation"
import Contacts from "../../components/lendingSections/Contacts"
import parseContent from "../../utils/parseContent"
import styles from "./styles.module.css"
import TermItem from "../../components/TermItem"
import { strip } from "../../utils/htmlHelpers"

const WorkTemplate = ({ data, pageContext: { next, prev }, location }) => {
  const {
    title,
    content,
    translations,
    featured_media,
    work_category,
    work_service,
    work_genre,
    work_platform,
    work_developer,
    work_authors,
  } = data.wordpressWpWork
  const media = data.allWordpressWpMedia.edges
  const Content = parseContent(content, media)

  return (
    <Layout location={location} translations={translations} title={title}>
      <Inner>
        <div className={styles.template}>
          <h1
            className={styles.mainTitle}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <ul className={styles.meta}>
            <TermItem
              className={styles.metaValues}
              terms={work_category}
              name="Category"
            />
            <TermItem
              className={styles.metaValues}
              terms={work_service}
              name="Service"
            />
            <TermItem
              className={styles.metaValues}
              terms={work_genre}
              name="Genre"
            />
            <TermItem
              className={styles.metaValues}
              terms={work_platform}
              name="Platform"
            />
            <TermItem
              className={styles.metaValues}
              terms={work_developer}
              name="Developer"
            />
            <TermItem
              className={styles.metaValues}
              terms={work_authors}
              name="Work on the project"
            />
          </ul>
          <div className={styles.featuredImage}>
            {featured_media && (
              <Img
                fluid={featured_media.localFile.childImageSharp.fluid}
                alt={strip(title)}
              />
            )}
          </div>

          <div className={styles.content}>{Content}</div>
        </div>
      </Inner>
      <SingleNavagation
        next={next ? next.slug : null}
        prev={prev ? prev.slug : null}
        list="en/portfolio"
        prefix="en/works"
      />
      <Inner>
        <Contacts />
      </Inner>
    </Layout>
  )
}

WorkTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default WorkTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpWork(id: { eq: $id }) {
      title
      content
      work_developer {
        id
        name
      }
      work_genre {
        id
        name
      }
      work_platform {
        id
        name
      }
      work_authors {
        id
        name
      }
      work_category {
        id
        name
      }
      work_service {
        id
        name
      }
      translations: polylang_translations {
        slug
        langKey: polylang_current_lang
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 470, maxHeight: 470) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allWordpressWpMedia {
      edges {
        node {
          id
          wordpress_id
          source_url
          localFile {
            childImageSharp {
              fluid(maxWidth: 1170, srcSetBreakpoints: [200, 340, 520, 900]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
