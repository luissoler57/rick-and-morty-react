import { useEffect, useState } from 'react'
import Character from './Character'

function NavPage(props) {
  return (
    <nav className='d-flex justify-content-between align-item-center m-2'>
      <p>Page: {props.page}</p>
      <button
        className='btn btn-danger m-2'
        onClick={() => {
          props.setPage(props.page + 1)
        }}
      >
        Next Page {props.page + 1}
      </button>
    </nav>
  )
}

function CharacterList() {
  const [character, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    /**
     * It fetches data from the API and sets the data to the characters variable.
     */
    async function fetchData() {
      const response = await await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      const data = await response.json()
      setLoading(false)
      setCharacters(data.results)
    }
    fetchData()
  }, [page])
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div className='container'>
      <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className='row'>
          {character.map((character) => {
            return (
              <div className='col-sm-6 col-md-6 col-lg-4' key={character.id}>
                <Character character={character} />
              </div>
            )
          })}{' '}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  )
}

export default CharacterList
