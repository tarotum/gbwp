function workCategory(entities) {
  const categories = entities.filter(
    e => e.__type === `wordpress__wp_work_category`
  )

  return entities.map(e => {
    if (e.__type === `wordpress__wp_work`) {
      let hasCategory =
        e.work_category &&
        Array.isArray(e.work_category) &&
        e.work_category.length

      if (hasCategory) {
        e.work_category___NODE = e.work_category.map(
          c => categories.find(cgObj => c === cgObj.wordpress_id).id
        )
        delete e.work_category
      }
    }
    return e
  })
}
function workPlatform(entities) {
  const platforms = entities.filter(
    e => e.__type === `wordpress__wp_work_platform`
  )

  return entities.map(e => {
    if (e.__type === `wordpress__wp_work`) {
      let hasPlatform =
        e.work_platform &&
        Array.isArray(e.work_platform) &&
        e.work_platform.length

      if (hasPlatform) {
        e.work_platform___NODE = e.work_platform.map(
          c => platforms.find(cgObj => c === cgObj.wordpress_id).id
        )
        delete e.work_platform
      }
    }
    return e
  })
}
function workAuthors(entities) {
  const authors = entities.filter(
    e => e.__type === `wordpress__wp_work_authors`
  )

  return entities.map(e => {
    if (e.__type === `wordpress__wp_work`) {
      let hasAuthors =
        e.work_authors && Array.isArray(e.work_authors) && e.work_authors.length

      if (hasAuthors) {
        e.work_authors___NODE = e.work_authors.map(
          c => authors.find(cgObj => c === cgObj.wordpress_id).id
        )
        delete e.work_authors
      }
    }
    return e
  })
}
function workDevelopers(entities) {
  const developers = entities.filter(
    e => e.__type === `wordpress__wp_work_developer`
  )

  return entities.map(e => {
    if (e.__type === `wordpress__wp_work`) {
      let hasDevelopers =
        e.work_developer &&
        Array.isArray(e.work_developer) &&
        e.work_developer.length

      if (hasDevelopers) {
        e.work_developer___NODE = e.work_developer.map(
          c => developers.find(cgObj => c === cgObj.wordpress_id).id
        )
        delete e.work_developer
      }
    }
    return e
  })
}
function workGenre(entities) {
  const genres = entities.filter(e => e.__type === `wordpress__wp_work_genre`)

  return entities.map(e => {
    if (e.__type === `wordpress__wp_work`) {
      let hasGenre =
        e.work_genre && Array.isArray(e.work_genre) && e.work_genre.length

      if (hasGenre) {
        e.work_genre___NODE = e.work_genre.map(
          c => genres.find(cgObj => c === cgObj.wordpress_id).id
        )
        delete e.work_genre
      }
    }
    return e
  })
}
function workService(entities) {
  const services = entities.filter(
    e => e.__type === `wordpress__wp_work_service`
  )

  return entities.map(e => {
    if (e.__type === `wordpress__wp_work`) {
      let hasService =
        e.work_service && Array.isArray(e.work_service) && e.work_service.length

      if (hasService) {
        e.work_service___NODE = e.work_service.map(
          c => services.find(cgObj => c === cgObj.wordpress_id).id
        )
        delete e.work_service
      }
    }
    return e
  })
}

function nozmalizeOrder(order) {
  if (!order) return 0

  return parseInt(order, 10)
}

function workOrder(entities) {
  return entities.map(e => {
    if (e.__type === `wordpress__wp_work` && e.acf) {
      e.acf.order = nozmalizeOrder(e.acf.order)
      if (e.acf.front_page) {
        e.acf.front_page.front_page_order = nozmalizeOrder(
          e.acf.front_page.front_page_order
        )
      }
      if (e.acf.music_composing) {
        e.acf.music_composing.music_composing_order = nozmalizeOrder(
          e.acf.music_composing.music_composing_order
        )
      }
      if (e.acf.sound_design) {
        e.acf.sound_design.sound_design_order = nozmalizeOrder(
          e.acf.sound_design.sound_design_order
        )
      }
      if (e.acf.vice_over) {
        e.acf.vice_over.vice_over_order = nozmalizeOrder(
          e.acf.vice_over.vice_over_order
        )
      }
      if (e.acf.audiobrending) {
        e.acf.audiobrending.audiobrending_order = nozmalizeOrder(
          e.acf.audiobrending.audiobrending_order
        )
      }
    }
    return e
  })
}

function reviews(entities) {
  return entities.map(e => {
    if (e.__type === `wordpress__wp_client_review` && e.acf) {
      if (e.acf.music_composing) {
        e.acf.music_composing.music_composing_order = nozmalizeOrder(
          e.acf.music_composing.music_composing_order
        )
      }
      if (e.acf.sound_design) {
        e.acf.sound_design.sound_design_order = nozmalizeOrder(
          e.acf.sound_design.sound_design_order
        )
      }
      if (e.acf.vice_over) {
        e.acf.vice_over.vice_over_order = nozmalizeOrder(
          e.acf.vice_over.vice_over_order
        )
      }
      if (e.acf.audiobrending) {
        e.acf.audiobrending.audiobrending_order = nozmalizeOrder(
          e.acf.audiobrending.audiobrending_order
        )
      }
    }
    return e
  })
}

module.exports = ({ entities }) => {
  const fncList = [
    workCategory,
    workPlatform,
    workAuthors,
    workDevelopers,
    workGenre,
    workService,
    workOrder,
    reviews,
  ]
  const result = fncList.reduce(
    (accumulator, func) => func(accumulator),
    entities
  )

  return result
}
