import student from './modulo1.js';
import { fun1, fun2 } from './modulo2.js';

const listaNomi = ['Teodora', 'Cirilo', 'Ursula', 'Yuliana'];
const studenteModificato = fun1(student,listaNomi );
console.log('Studente modificato : ', studenteModificato)

const listaNomiString = fun2(studenteModificato);
console.log('Nomi in stringa ', listaNomiString);
