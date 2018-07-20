window.onload = function() {
    alert( 'Добро пожаловать в "Чат". Приятного общения :)' );
}
    
window.onbeforeunload = function() {
  return "Вы точно хотите покинуть чат ?!";
};
