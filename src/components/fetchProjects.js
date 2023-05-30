import { createClient } from 'contentful'
import { useState, useEffect } from 'react'

const client = createClient({
  space: 'ckdtqg0oighy',
  environment: 'master',
  accessToken: 'qTy21kv6XvGsFGsCNkJQJCKvqcBhiD2t5N2qLcjur2A',
})

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'portfolio' })
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields
        const id = item.sys.id
        const img = image?.fields?.file?.url
        return { title, url, id, img }
      })
      setProjects(projects)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, projects }
}

// client
//   .getEntries({ content_type: 'portfolio' })
//   .then((response) => console.log(response))
