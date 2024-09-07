export const formatted = (n: any) => (
    Number(n || 0).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  
  )