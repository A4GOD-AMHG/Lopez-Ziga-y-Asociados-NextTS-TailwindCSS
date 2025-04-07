interface MercadoPago {
    checkout: (options: any) => void;
}

declare global {
    interface Window {
        MercadoPago: {
            new(publicKey: string, options?: any): MercadoPago;
        };
    }
}

export { };