/* Что выведет код ниже?

alert( 1 && null && 2 ); */

alert(1 && null && 2); // null

/* Что выведет код ниже?

alert( alert(1) && alert(2) ); */

alert(alert(1) && alert(2)); // 1, undefined