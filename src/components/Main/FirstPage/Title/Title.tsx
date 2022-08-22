import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

export const Title = () => {
  const [titles, setTitles] = useState<any>()

  const getTitles = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => {
        setTitles(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getTitles()
  }, [])

  const titlesToDisplay = useMemo(() => {
    if (titles) {
      return titles.map((title: any) => <h1>{title.title}</h1>)
    }
    return <h1>Loading...</h1>
  }, [titles])

  console.log(titlesToDisplay)

  return (
    <>
      <h1>asdasdase</h1>
      {titlesToDisplay}
    </>
  )
}
