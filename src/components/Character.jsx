function Character({ character }) {
  return (
    <div className='card bg-danger m-1'>
      <div className='text-center card bg-dark m-1 p-2'>
        <div className='card-body'>
          <h2 className='card-title'>{character.name}</h2>
        </div>
        <img
          className='card-img-fluid rounded-pill'
          src={character.image}
          alt={character.name}
        />
        <p className='card-text'>🪐Origin: {character.origin.name}</p>
      </div>
    </div>
  )
}

export default Character
