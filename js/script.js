window.onload = function() {
    alert( 'Добро пожаловать в чат! Приятного общения :)' );
}

window.onbeforeunload = function() {
  return "Вы точно хотите покинуть чат ?!";
};
