function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        // Calculate the number of spaces and asterisks for the current row
        let spaces = ' '.repeat(n - i);
        let asterisks = '*'.repeat(i);
        
        // Concatenate spaces and asterisks, then print the result
        console.log(spaces + asterisks);
    }
}

// Example usage:
printTriangle(5);