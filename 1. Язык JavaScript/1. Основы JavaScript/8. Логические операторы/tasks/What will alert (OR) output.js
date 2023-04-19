/* Что выведет код ниже?

alert( null || 2 || undefined ); */

alert(null || 2 || undefined); // 2

/* Что выведет код ниже?

alert( alert(1) || 2 || alert(3) ); */

alert(alert(1) || 2 || alert(3)); // 1, 2