/**
 * Secure password generation using window.crypto.getRandomValues
 */
export function generatePassword(
    length: number,
    options: {
        uppercase: boolean;
        lowercase: boolean;
        numbers: boolean;
        symbols: boolean;
    }
): string {
    const charset = {
        uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    let allowedChars = "";
    if (options.uppercase) allowedChars += charset.uppercase;
    if (options.lowercase) allowedChars += charset.lowercase;
    if (options.numbers) allowedChars += charset.numbers;
    if (options.symbols) allowedChars += charset.symbols;

    if (allowedChars === "") return "";

    let password = "";
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        password += allowedChars[array[i] % allowedChars.length];
    }

    return password;
}

/**
 * Calculate password strength score (0-4)
 */
export function calculateStrength(password: string): number {
    if (!password) return 0;
    let score = 0;

    // Length factor
    if (password.length > 8) score++;
    if (password.length > 12) score++;

    // Variety factors
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Normalize to 0-4
    if (score <= 2) return 0; // Very Weak
    if (score === 3) return 1; // Weak
    if (score === 4) return 2; // Medium
    if (score === 5) return 3; // Strong
    return 4; // Very Strong
}

export function getStrengthColor(score: number): string {
    const colors = [
        "bg-red-500",    // Very Weak
        "bg-orange-500", // Weak
        "bg-yellow-500", // Medium
        "bg-blue-500",   // Strong
        "bg-green-500"   // Very Strong
    ];
    return colors[score] || "bg-gray-300";
}
