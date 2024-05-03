const pelicuasQueries = {
  insert: 'insert into peliculas (peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento) values (?, ?,?,?,?,?);',
  selectAll: 'select peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento from peliculas;',
  selectById: 'select peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento, from peliculas where peliculaId = ?;',
}

export default pelicuasQueries;