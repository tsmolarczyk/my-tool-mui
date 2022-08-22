import { Context } from 'Providers/ContextProvider'
import { useState, useEffect, useCallback, useContext } from 'react'

interface Person {
  id: number
  name: string
}

export const ThirdPage: React.FC = () => {
  const { addUser } = useContext(Context)

  const [persons, setPersons] = useState<any>([
    {
      id: '0',
      name: 'Marek',
    },
    {
      id: '1',
      name: 'Karol',
    },
    {
      id: '2',
      name: 'Tom',
    },
  ])

  const [formName, setFormName] = useState<Person>()

  const deletePerson = (index: any, e: any) => {
    setPersons(persons.filter((p: any, i: any) => i !== index))
  }

  const addToContext = (value: any) => {
    addUser(value.name)
  }

  const handleSetName = useCallback((e: any) => {
    const someone = {
      id: Math.random(),
      name: e.target.value,
    }

    setFormName(someone)
  }, [])

  const addPerson = useCallback(
    (e: any) => {
      e.preventDefault()

      console.log(formName)
      console.log(persons)
      setPersons([...persons, formName])
    },
    [formName, persons]
  )
  useEffect(() => {
    console.log(persons)
  }, [persons])

  return (
    <div>
      <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>NAMES:</h1>
      {persons.map((p: any, index: any) => (
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <p style={{ fontSize: '20px' }}>{p.name}</p>
          <button
            key={index}
            style={{ marginLeft: '10px', color: 'red', cursor: 'pointer' }}
            onClick={(e) => deletePerson(index, e)}
          >
            delete
          </button>
          <button
            key={index}
            style={{ marginLeft: '10px', color: 'blue', cursor: 'pointer' }}
            onClick={() => {
              addToContext(p)
              console.log(p)
            }}
          >
            add to context
          </button>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', color: 'green' }}>
        <h1>Add new person</h1>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label>
            <input name="name" placeholder="name" onChange={handleSetName} />
          </label>
          <button
            style={{
              display: 'flex',
              width: '145px',
              textAlign: 'right',
              cursor: 'pointer',
            }}
            onClick={addPerson}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
