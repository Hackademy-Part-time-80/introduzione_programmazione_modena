export const fun1 = (oggetto, listaNomi) =>{
oggetto.contatti = listaNomi;
return oggetto;
} 
export const fun2 = ({contatti}) => contatti.toString();