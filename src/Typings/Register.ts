export type RegisterPayload = {
  user: string;
  password: string;
  user_type: number;
};

export type RegisterResponse = {
  ok: boolean;
  message: string;
};

export type RegisterVerify = [string, string];
