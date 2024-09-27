export const formatted = (n: number) => (
    Number(n || 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  
  )