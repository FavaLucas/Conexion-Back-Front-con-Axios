const actoresQueries = {
  insert: 'insert into actores (nombreCompleto) values (?);',
  selectAll: 'select * from actores;',
  selectById: 'select * from actores where actorId = ?',
  // selectByIdandNombreCompleto: 'select * from actores where actorId = ? AND nombreCompleto = ? ;',
  // update: 'update generos set nombre = ? where generoId = ?;',
  // delete: 'delete from generos where generoId = ?;',
}

export default actoresQueries;

// actorId int not null auto_increment,
// nombreCompleto varchar(200) not null,
// primary key (actorId)