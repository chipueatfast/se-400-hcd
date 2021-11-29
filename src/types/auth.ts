export interface EmailCheckResponse {
  status?: boolean;
  email: string;
  type: 'suggestion' | 'invalid';
}

export interface CheckConfirmCodeResponse {
  firstName: string;
  lastName: string;
}

export interface LoginValues extends Record<string, string> {
  email: string;
  password: string;
}

export interface RegisterValues {
  gender: string;
  first_name: string;
  last_name: string;
  email: string;
  recaptcha: string;
  terms: boolean;
  news_letter: boolean;

  cross_check?: boolean;
  source?: string;
  lp_url?: string;
}

export interface RegisterPayload
  extends Omit<RegisterValues, 'terms' | 'news_letter' | 'cross_check'> {
  terms: number;
  news_letter: number;
  cross_check?: number;
}

export interface RegisterResponse {
  user: {
    id: number;
  };
}

export interface SetPasswordValues {
  password: string;
  password_confirm: string;
}

export interface SetPasswordPayload extends SetPasswordValues {
  confirm_code: string;
}
