
export function calculateCarValue(model: string, year: number): number {
    const alphabets: string = 'abcdefghijklmnopqrstuvwxyz';
    
    let total: number = 0;
    for (let char of model.toLowerCase()) {
        const index: number = alphabets.indexOf(char);
        if (index !== -1) {
            total += (index + 1);
        }
    }

    return (total * 100) + year;
}