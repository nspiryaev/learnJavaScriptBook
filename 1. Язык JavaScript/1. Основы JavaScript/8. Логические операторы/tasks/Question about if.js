/* Какие из перечисленных ниже alert выполнятся?

Какие конкретно значения будут результатами выражений в условиях if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); */

if (-1 || 0) alert('first'); // -1 == true - выполнится
if (-1 && 0) alert('second'); // 0 == false - не выполнится
if (null || -1 && 1) alert('third'); // 1 == true - выполнится