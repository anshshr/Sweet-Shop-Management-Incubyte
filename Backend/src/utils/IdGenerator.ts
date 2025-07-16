// This function will try to make the unique id , and making it as random as possible inorder to avoid collision
let counter: number = 0;

export function generateUniqueId(): string {
    const timestamp = Date.now();
    const counterValue = ++counter;
    const random = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${counterValue}-${random}`;
}


export function generateSweetId(): string {
    const uniqueId = generateUniqueId();
    return `SWEET-${uniqueId}`;
}

export function resetCounter(): void {
    counter = 0;
}