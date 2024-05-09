const actoresQueries = {
  insert: 'insert into actores (nombreCompleto) values (?);',
  selectAll: 'select * from actores;',
  selectById: 'select * from actores where actorId = ?',
  update: 'update actores set nombreCompleto = ? where actorId = ?;',
  deleteById: 'delete from actores where actorId = ?;',
}

export default actoresQueries;

// selectByIdandNombreCompleto: 'select * from actores where actorId = ? AND nombreCompleto = ? ;',
