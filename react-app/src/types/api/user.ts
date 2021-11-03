export type User = {
  id: number;
  uid: string;
  provider: string;
  email: string;
  password: string;
  nickname: string;
  image?: string;
  allowPasswordChange: boolean;
  created_at: Date;
  updated_at: Date;
}