const generosQueries = {
  insert: 'insert into generos (generoId, nombreGenero) values (?, ?);',
  selectAll: 'select generoId, nombre from generos;',
}

export default generosQueries;