const generosQueries = {
  insert: 'insert into generos (generoId, nombreGenero) values (?, ?);',
  selectAll: 'select generoId, nombre from generos;',
  update: 'update generos set nombre = ? where generoId = ?;',
  delete: 'delete from generos where generoId = ?;',

}

export default generosQueries;