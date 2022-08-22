import { useState, useMemo } from 'react'

export const SecondPage = () => {
  const [users, setUsers] = useState<any>()
  const [photos, setPhotos] = useState<any>()

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((json) => setUsers(json))
    console.log(users)
  }

  const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setPhotos(json))
    console.log(photos)
  }

  const userToDisplay = () => {
    if (users) {
      return users.map((user: any) => <h2>{user.name}</h2>)
    }
  }

  const photosToDisplay = () => {
    if (photos) {
      return photos.map((photos: any) => (
        <img src={photos.url} alt="photos.id"></img>
      ))
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Download Users</button>
      {userToDisplay()}
      <button onClick={getPhotos}>Get photos links</button>
      {photosToDisplay()}
    </div>
  )
}
