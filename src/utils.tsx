export function convertNumberToCurrency (number: number): string {
    const currency = number.toLocaleString('pt-br', { minimumFractionDigits: 2}); 
    return currency;
  }

export function editDate (date: string): string {
    const formated = date.replaceAll('/','.'); 
    return formated;
}
