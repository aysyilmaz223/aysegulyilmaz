// Tarihi Türkçe biçimde göster: 5 Mart 2026
export function trTarih(date: Date): string {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
