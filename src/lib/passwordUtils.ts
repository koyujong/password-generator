import zxcvbn from 'zxcvbn';

const WORD_LIST = [
    "apple", "banana", "cherry", "dragon", "eagle", "falcon", "galaxy", "hammer", "island", "jungle",
    "kangaroo", "lemon", "mango", "ninja", "ocean", "panther", "quantum", "rocket", "safari", "tiger",
    "unicorn", "velvet", "window", "xenon", "yellow", "zebra", "astronaut", "biscuit", "cactus", "dolphin",
    "elephant", "forest", "guitar", "helmet", "iguana", "jacket", "koala", "lantern", "magnet", "nebula",
    "octopus", "penguin", "quartz", "radar", "sunset", "tornado", "umbrella", "volcano", "waffle", "yacht",
    "zombie", "avalanche", "blizzard", "comet", "desert", "echo", "flamingo", "glacier", "hurricane", "iceberg",
    "jaguar", "kiwi", "leopard", "meteor", "nomad", "oasis", "pirate", "quasar", "robot", "sphinx",
    "tsunami", "utopia", "vampire", "wizard", "yeti", "zeppelin", "acoustic", "bamboo", "canyon", "diamond",
    "eclipse", "fossil", "galaxy", "horizon", "infinity", "jupiter", "karma", "lotus", "matrix", "nexus",
    "omega", "phoenix", "quest", "rhino", "sapphire", "titan", "universe", "vortex", "whisper", "zenith"
];

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
 * Secure passphrase generation using window.crypto.getRandomValues
 */
export function generatePassphrase(wordCount: number, separator: string = '-'): string {
    const array = new Uint32Array(wordCount);
    window.crypto.getRandomValues(array);

    const words = [];
    for (let i = 0; i < wordCount; i++) {
        words.push(WORD_LIST[array[i] % WORD_LIST.length]);
    }

    return words.join(separator);
}

/**
 * Calculate password strength score and return crack time estimate using zxcvbn
 */
export function calculateStrength(password: string): { score: number, timeString: string } {
    if (!password) return { score: 0, timeString: "" };

    const result = zxcvbn(password);

    // zxcvbn returns score 0-4
    return {
        score: result.score,
        timeString: String(result.crack_times_display.offline_slow_hashing_1e4_per_second)
    };
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
