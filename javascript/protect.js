console.log("hello, we load protect");

const inputName = document.getElementById("inpName");
const inpPhone = document.getElementById("inpPhone");
const inpSocial = document.getElementById("inpSocial");

if (inputName) {
  const invalidCharsRegex = /[^a-zA-Zа-яА-ЯёЁіІїЇєЄ\s-]/g;
  inputName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(invalidCharsRegex, "");
    e.target.value = e.target.value.replace(/\s+/g, " ");
  });
}

if (inpPhone) {
  inpPhone.addEventListener("input", (e) => {
    let value = e.target.value;
    value = value.replace(/(?!^\+)[^\d]/g, "");
    e.target.value = value;
  });
}

if (inpSocial) {
  inpSocial.addEventListener("input", (e) => {
    let value = e.target.value;
    if (
      inpSocial.classList.contains("cl-inst") ||
      inpSocial.classList.contains("cl-teleg")
    ) {
      if (value.length > 0 && !value.startsWith("@")) {
        value = "@" + value;
      }
      e.target.value = value.replace(/[^a-zA-Z0-9._@]/g, "");
    }
    if (
      inpSocial.classList.contains("cl-viber") ||
      inpSocial.classList.contains("cl-whats")
    ) {
      e.target.value = value.replace(/(?!^\+)[^\d]/g, "");
    }
  });
}

// Функция валидации на имя
function inpNameValidation(name) {
  const trimName = name.trim();

  if (trimName.length < 2) {
    return { valid: false, error: "Закоротке ім'я" };
  }
  if (trimName.length > 50) {
    return { valid: false, error: "Задовге ім'я" };
  }

  return { valid: true, value: trimName };
}

// Функция валидации на телефон
function inpPhoneValidation(phone) {
  const trimPhone = phone.trim();
  const digitsOnly = trimPhone.replace(/\D/g, "");

  if (digitsOnly.length === 0) {
    return { valid: false, error: "Будь ласка, введіть номер телефону" };
  }
  if (digitsOnly.length < 10) {
    return { valid: false, error: "Номер телефону занадто короткий" };
  }
  if (digitsOnly.length > 15) {
    return { valid: false, error: "Номер телефону занадто довгий" };
  }

  return { valid: true, value: trimPhone, cleanDigits: digitsOnly };
}

// Функция валидации на альтернативный способ связи
function inpSocialValidation(socialInput) {
  if (!socialInput) return { valid: true, value: null, type: null };

  const trimValue = socialInput.value.trim();

  // Если поле пустое — валидация пройдена (инпут необязательный)
  if (trimValue === "") {
    return { valid: true, value: null, type: null };
  }

  // Instagram
  if (socialInput.classList.contains("cl-inst")) {
    const instRegex = /^@[a-zA-Z0-9._]{1,30}$/;
    if (!instRegex.test(trimValue)) {
      return {
        valid: false,
        error: "Некоректний Instagram (формат: @nickname)",
      };
    }
    return { valid: true, value: trimValue, type: "Instagram" };
  }

  // Telegram
  if (socialInput.classList.contains("cl-teleg")) {
    const telegRegex = /^@[a-zA-Z0-9_]{5,32}$/;
    if (!telegRegex.test(trimValue)) {
      return {
        valid: false,
        error: "Некоректний Telegram (формат: @nickname, від 5 символів)",
      };
    }
    return { valid: true, value: trimValue, type: "Telegram" };
  }

  // Viber WhatsApp
  if (
    socialInput.classList.contains("cl-viber") ||
    socialInput.classList.contains("cl-whats")
  ) {
    const digitsOnly = trimValue.replace(/\D/g, "");
    const typeName = socialInput.classList.contains("cl-viber")
      ? "Viber"
      : "WhatsApp";

    if (digitsOnly.length < 10 || digitsOnly.length > 15) {
      return {
        valid: false,
        error: `Некоректний номер для ${typeName} (мінімум 10 цифр)`,
      };
    }
    return { valid: true, value: trimValue, type: typeName };
  }

  return { valid: true, value: trimValue, type: "Другое" };
}
