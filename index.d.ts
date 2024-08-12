declare function ThaiBahtText(stringNumberInput: string): string;
declare function ThaiBahtText(numberInput: number): string;

declare function ThaiBahtText(input: string | number): string;

interface Window {
  ThaiBahtText: typeof ThaiBahtText;
  THBText: typeof ThaiBahtText;
}

export as namespace ThaiBahtText;

export { ThaiBahtText, ThaiBahtText as THBText };

declare module 'thai-baht-text' {
  export default ThaiBahtText;
}
