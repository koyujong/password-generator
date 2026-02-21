export type Language = 'en' | 'ko' | 'es';

export const translations = {
  en: {
    title: "Strong Password Generator",
    subtitle: "Create secure, random passwords instantly to protect your online accounts.",
    length: "Password Length",
    includeUppercase: "Include Uppercase (A-Z)",
    includeLowercase: "Include Lowercase (a-z)",
    includeNumbers: "Include Numbers (0-9)",
    includeSymbols: "Include Symbols (!@#$%^&*)",
    generate: "Generate Password",
    copy: "Copy",
    copied: "Copied!",
    strength: "Strength",
    strengthLabels: ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"],
    seoTitle: "Free Strong Password Generator | Secure & Private",
    seoDesc: "Generate strong and secure passwords for free. 100% client-side, private, and easy to use. Supports English, Korean, and Spanish.",
    whyTitle: "Why Use a Strong Password Generator?",
    whyContent: "Using a unique, random password for every account is the best way to prevent hackers from accessing your personal information. Most people use passwords that are too simple or reuse them across multiple sites. Our tool ensures your passwords are complex and nearly impossible to guess.",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Is it safe to use this tool?",
        a: "Yes! 100% of the password generation happens in your browser. We never send your passwords to any server."
      },
      {
        q: "What makes a password strong?",
        a: "A strong password is at least 12 characters long and includes a mix of uppercase letters, lowercase letters, numbers, and symbols."
      },
      {
        q: "How often should I change my password?",
        a: "Security experts now recommend changing passwords only when there is evidence of a breach, rather than on a fixed schedule. The most important thing is to use a unique, strong password for each account."
      },
      {
        q: "Should I use a password manager?",
        a: "Absolutely! A password manager securely stores all your passwords so you only need to remember one master password. This makes it practical to use unique, complex passwords for every account."
      },
      {
        q: "What is two-factor authentication (2FA)?",
        a: "Two-factor authentication adds an extra layer of security by requiring a second verification step (like a code sent to your phone) in addition to your password. We strongly recommend enabling 2FA wherever possible."
      },
      {
        q: "Can hackers crack my generated password?",
        a: "A 16-character password with mixed character types would take billions of years to crack using current brute-force methods. The longer and more complex your password, the more secure it is."
      },
      {
        q: "Is this tool really free?",
        a: "Yes, completely free with no hidden charges. This tool runs entirely in your browser with no server costs, so we can offer it for free forever."
      }
    ],
    historyTitle: "Password History",
    clearHistory: "Clear History",
    noHistory: "No passwords generated yet."
  },
  ko: {
    title: "강력한 비밀번호 생성기",
    subtitle: "온라인 계정을 보호하기 위해 안전하고 무작위인 비밀번호를 즉시 생성하세요.",
    length: "비밀번호 길이",
    includeUppercase: "대문자 포함 (A-Z)",
    includeLowercase: "소문자 포함 (a-z)",
    includeNumbers: "숫자 포함 (0-9)",
    includeSymbols: "특수문자 포함 (!@#$%^&*)",
    generate: "비밀번호 생성",
    copy: "복사",
    copied: "복사 완료!",
    strength: "보안 강도",
    strengthLabels: ["매우 약함", "약함", "보통", "강함", "매우 강함"],
    seoTitle: "무료 강력한 비밀번호 생성기 | 안전 및 개인정보 보호",
    seoDesc: "강력하고 안전한 비밀번호를 무료로 생성하세요. 100% 클라이언트 사이드에서 작동하며 안전합니다. 영어, 한국어, 스페인어를 지원합니다.",
    whyTitle: "왜 강력한 비밀번호 생성기를 써야 하나요?",
    whyContent: "모든 계정에 고유하고 무작위인 비밀번호를 사용하는 것이 해커로부터 개인 정보를 보호하는 가장 좋은 방법입니다. 많은 사람들이 너무 단순한 비밀번호를 사용하거나 여러 사이트에서 동일한 비밀번호를 재사용합니다. 저희 도구는 추측이 거의 불가능한 복잡한 비밀번호를 보장합니다.",
    faqTitle: "자주 묻는 질문(FAQ)",
    faqs: [
      {
        q: "이 도구는 안전한가요?",
        a: "네! 모든 비밀번호 생성은 사용자의 브라우저 내에서 100% 이루어집니다. 생성된 비밀번호는 절대로 서버로 전송되지 않습니다."
      },
      {
        q: "어떤 비밀번호가 강력한가요?",
        a: "강력한 비밀번호는 최소 12자 이상이며 대문자, 소문자, 숫자, 특수문자가 모두 혼합된 형태입니다."
      },
      {
        q: "비밀번호는 얼마나 자주 바꿔야 하나요?",
        a: "보안 전문가들은 정기적인 변경보다는 유출이 의심될 때만 비밀번호를 변경할 것을 권장합니다. 가장 중요한 것은 각 계정마다 고유하고 강력한 비밀번호를 사용하는 것입니다."
      },
      {
        q: "비밀번호 관리자를 사용해야 하나요?",
        a: "물론이죠! 비밀번호 관리자는 모든 비밀번호를 안전하게 저장하여 하나의 마스터 비밀번호만 기억하면 됩니다. 이를 통해 모든 계정에 고유하고 복잡한 비밀번호를 실질적으로 사용할 수 있습니다."
      },
      {
        q: "2단계 인증(2FA)이란 무엇인가요?",
        a: "2단계 인증은 비밀번호 외에 추가적인 인증 단계(예: 휴대폰으로 전송되는 코드)를 요구하여 보안을 강화하는 방법입니다. 가능한 모든 서비스에서 2FA를 활성화하는 것을 강력히 권장합니다."
      },
      {
        q: "해커가 생성된 비밀번호를 해킹할 수 있나요?",
        a: "다양한 문자 유형이 혼합된 16자리 비밀번호는 현재의 무차별 대입 공격(브루트포스)으로는 해킹하는 데 수십억 년이 걸립니다. 비밀번호가 길고 복잡할수록 더 안전합니다."
      },
      {
        q: "이 도구는 정말 무료인가요?",
        a: "네, 숨겨진 비용 없이 완전히 무료입니다. 이 도구는 서버 비용 없이 브라우저에서 전적으로 실행되므로 영원히 무료로 제공할 수 있습니다."
      }
    ],
    historyTitle: "비밀번호 히스토리",
    clearHistory: "히스토리 지우기",
    noHistory: "아직 무작위로 복사/생성된 비밀번호가 없습니다."
  },
  es: {
    title: "Generador de Contraseñas Fuertes",
    subtitle: "Crea contraseñas seguras y aleatorias al instante para proteger tus cuentas en línea.",
    length: "Longitud de la Contraseña",
    includeUppercase: "Incluir Mayúsculas (A-Z)",
    includeLowercase: "Incluir Minúsculas (a-z)",
    includeNumbers: "Incluir Números (0-9)",
    includeSymbols: "Incluir Símbolos (!@#$%^&*)",
    generate: "Generar Contraseña",
    copy: "Copiar",
    copied: "¡Copiado!",
    strength: "Fortaleza",
    strengthLabels: ["Muy Débil", "Débil", "Media", "Fuerte", "Muy Fuerte"],
    seoTitle: "Generador de Contraseñas Fuertes Gratis | Seguro y Privado",
    seoDesc: "Genera contraseñas fuertes y seguras de forma gratuita. 100% del lado del cliente, privado y fácil de usar. Soporta inglés, coreano y español.",
    whyTitle: "¿Por qué usar un generador de contraseñas fuertes?",
    whyContent: "Usar una contraseña única y aleatoria para cada cuenta es la mejor manera de evitar que los hackers accedan a tu información personal. La mayoría de las personas usan contraseñas demasiado simples o las reutilizan en varios sitios. Nuestra herramienta asegura que tus contraseñas sean complejas y casi imposibles de adivinar.",
    faqTitle: "Preguntas Frecuentes",
    faqs: [
      {
        q: "¿Es seguro usar esta herramienta?",
        a: "¡Sí! El 100% de la generación de contraseñas ocurre en tu navegador. Nunca enviamos tus contraseñas a ningún servidor."
      },
      {
        q: "¿Qué hace que una contraseña sea fuerte?",
        a: "Una contraseña fuerte tiene al menos 12 caracteres e incluye una mezcla de letras mayúsculas, minúsculas, números y símbolos."
      },
      {
        q: "¿Con qué frecuencia debo cambiar mi contraseña?",
        a: "Los expertos en seguridad ahora recomiendan cambiar las contraseñas solo cuando hay evidencia de una violación de datos, en lugar de hacerlo en un calendario fijo. Lo más importante es usar una contraseña única y fuerte para cada cuenta."
      },
      {
        q: "¿Debería usar un gestor de contraseñas?",
        a: "¡Por supuesto! Un gestor de contraseñas almacena de forma segura todas tus contraseñas para que solo necesites recordar una contraseña maestra. Esto hace práctico usar contraseñas únicas y complejas para cada cuenta."
      },
      {
        q: "¿Qué es la autenticación de dos factores (2FA)?",
        a: "La autenticación de dos factores agrega una capa adicional de seguridad al requerir un segundo paso de verificación (como un código enviado a tu teléfono) además de tu contraseña. Recomendamos encarecidamente habilitar 2FA siempre que sea posible."
      },
      {
        q: "¿Pueden los hackers descifrar mi contraseña generada?",
        a: "Una contraseña de 16 caracteres con tipos de caracteres mixtos tardaría miles de millones de años en descifrarse usando los métodos actuales de fuerza bruta. Cuanto más larga y compleja sea tu contraseña, más segura será."
      },
      {
        q: "¿Esta herramienta es realmente gratuita?",
        a: "Sí, completamente gratuita sin cargos ocultos. Esta herramienta funciona completamente en tu navegador sin costos de servidor, por lo que podemos ofrecerla gratis para siempre."
      }
    ],
    historyTitle: "Historial de contraseñas",
    clearHistory: "Borrar historial",
    noHistory: "Aún no se han generado contraseñas."
  }
};
