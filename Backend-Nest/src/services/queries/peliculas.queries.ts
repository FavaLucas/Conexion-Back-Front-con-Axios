const pelicuasQueries = {
  insert: 'insert into peliculas (peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento) values (?, ?,?,?,?,?);',
  selectAll: 'select peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento from peliculas;',
  selectById: 'select peliculaId, titulo, sinopsis, imagen, duracion, fechaLanzamiento from peliculas where peliculaId = ?;',
  update: 'update peliculas set titulo = ? where peliculaId = ?;',
  deleteById: 'delete from peliculas where peliculaId = ?;',
  selectActores:  'select a.nombreCompleto from papeles p join actores a on p.actorId = a.actorId where p.peliculaId = ?;'

  // insert: 'insert into peliculas (peliculaId, titulo, sinopsis, imagenUrl, duracion, fechaLanzamiento) values (?, ?,?,?,?,?);',
  // selectAll: 'select peliculaId, titulo, sinopsis, imagenUrl, duracion, fechaLanzamiento from peliculas;',
  // selectById: 'select peliculaId, titulo, sinopsis, imagenUrl, duracion, fechaLanzamiento from peliculas where peliculaId = ?;',
  // update: 'update peliculas set titulo = ? where peliculaId = ?;',
  // deleteById: 'delete from peliculas where peliculaId = ?;',
}

export default pelicuasQueries;