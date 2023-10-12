import { Client, Account, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65241cfbe5aa3b629f83'); // Replace with your project ID

export const account = new Account(client);

export const login = async (email: string, password: string) => {
    const session = await account.createEmailSession(email, password);
      await account.get();
  };

  export const register = async (email: string, password: string, name: string) => {
    await account.create(ID.unique(), email, password, name);

  };
   

 export const logout = async() => {
    await account.deleteSession("current");
  };


