// export type User = {
//   id: number;
//   uid: string;
//   provider: string;
//   email: string;
//   password: string;
//   nickname: string;
//   image?: string;
//   allowPasswordChange: boolean;
//   created_at: Date;
//   updated_at: Date;
// }

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
}