import css from './FirstPage.module.css'
import { Title } from './Title/Title'
import { Context } from 'Providers/ContextProvider'
import { useContext } from 'react'

export const FirstPage = () => {
  const { users } = useContext(Context)
  return (
    <>
      <h1 className={css.para}>Tasdasditles:</h1>
      <h1>{users}</h1>
      <Title />
    </>
  )
}
