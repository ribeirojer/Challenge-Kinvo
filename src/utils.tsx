export function convertNumberToCurrency (number: number): string {
    const currency = number.toLocaleString('pt-br', { minimumFractionDigits: 2}); 
    return currency;
  }

export function editDate (date: string): string {
    const formated = date.replaceAll('/','.'); 
    return formated;
}

export function SomaPorTipo (data: any, tipo: string){
  const initialValue = 0;
  const quantidade = data
  .filter((item: any)=>{
      if(item.fixedIncome.bondType === tipo){
          return item;
      }
  })
  .reduce((previousValue: number, currentValue: any) => {
      return previousValue + currentValue.position.equity
  }, initialValue);

  return quantidade;
}