export enum ValidateRuleType {
  FirstName = 'first_name',
  SecondName = 'second_name',
  DisplayName = 'display_name',
  Login = 'login',
  Email = 'email',
  Password = 'password',
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  Repassword = 'repassword',
  Phone = 'phone',
  Message = 'message'
}

interface ValidateRule {
  type: ValidateRuleType
  value: string
  value2?: string
}

export function validateForm (rules: ValidateRule[]): string[] {
  const errorMessage = []

  for (let i = 0; i < rules.length; i++) {
    const { type, value, value2 = null } = rules[i]

    if (type === ValidateRuleType.Login) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else if (value.length < 3 || value.length > 20) {
        errorMessage[i] = 'Логин должен быть от 3 до 20 символов'
      } else if (!(/^[a-zA-Z0-9-_]{3,20}$/.test(value))) {
        errorMessage[i] = 'Логин может содержать только латиницу, цифры, дефис и нижнее подчёркивание'
      } else if (/^[0-9]{3,20}$/.test(value)) {
        errorMessage[i] = 'Логин не может состоять только из цифр'
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.Password || type === ValidateRuleType.NewPassword) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else if (value.length < 8 || value.length > 40) {
        errorMessage[i] = 'Пароль должен быть от 8 до 40 символов'
      } else if (!(/[A-Z]/.test(value)) || !(/[0-9]/.test(value))) {
        errorMessage[i] = 'Пароль должен содержать хотя бы одну заглавную букву и цифру'
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.Repassword) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else if (value2 != null && value !== value2) {
        errorMessage[i] = 'Введенные пароли не совпадают'
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.OldPassword) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.Phone) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else if (value.length < 10 || value.length > 15) {
        errorMessage[i] = 'Номер телефона должен быть от 10 до 15 символов'
      } else if (!(/^[0-9+][0-9]{9,14}$/.test(value))) {
        errorMessage[i] = 'Номер телефона должен состоять из цифр и может начинается с плюса '
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.Email) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else if (!(/^[a-zA-Z][a-zA-Z0-9.-]*[a-zA-Z0-9]+@[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9](\.[a-zA-Z]{2,})+$/.test(value))) {
        errorMessage[i] = 'Неверный email'
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.FirstName || type === ValidateRuleType.SecondName || type === ValidateRuleType.DisplayName) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else if (/[a-zA-Z]+/.test(value) && /[а-яА-Я]+/.test(value)) {
        errorMessage[i] = 'Поле не может содержать латиницу и кирилицу одновременно'
      } else if (!(/^[А-ЯA-Z]+/.test(value))) {
        errorMessage[i] = 'Первая буква должна быть заглавной'
      } else if (!(/^[a-zA-Zа-яА-Я-]+$/.test(value))) {
        errorMessage[i] = 'Поле не должно содержать пробелов и цифр, допустим только дефис'
      } else {
        errorMessage[i] = ''
      }
    } else if (type === ValidateRuleType.Message) {
      if (value.length === 0) {
        errorMessage[i] = 'Поле обязательно для заполнения'
      } else {
        errorMessage[i] = ''
      }
    }
  }

  return errorMessage
}
