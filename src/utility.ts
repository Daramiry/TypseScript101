// adds 2 numbers                                          
export function add (x:number, y:number):number {
    return x+y
}

// multiplies 2 numbers
export function multiply (x: number, y:number):number {
    return x * y
}

export function subtract (x: number, y:number): number {
    return x - y
}

export function getLucky(max: number):number {
    return Math.floor(Math.random() * max);
} 