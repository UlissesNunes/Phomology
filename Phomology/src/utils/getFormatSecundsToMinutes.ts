export function getFormatSecundsToMinutes(secunds: number): string {
  const minutes = Math.floor(secunds / 60);
  const remainingSecunds = secunds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSecunds = String(remainingSecunds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSecunds}`;
}