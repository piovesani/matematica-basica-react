type Props = {
    titulo: string;
    n1: number;
    n2: number;
    operador: string;
}

export const Matematica = ({titulo, n1, n2, operador}: Props)=> {

    let calcular: number = 0;
    switch(operador){
      case '+':
        calcular = n1 + n2;
        break;

      case '-':
        calcular = n1 - n2;
        break;

      case 'x':
        calcular = n1 * n2;
        break;

      case '/':
        calcular = n1 / n2;
        break;

    }
    let str: string = `${titulo} ${n1} ${operador} ${n2} = ${calcular}`;
    return (
    <div>{str}</div>
    );
  }