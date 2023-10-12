import { Client, Storage, ID } from "appwrite";

const client = new Client();

const storage = new Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJ_ID!) // Your project ID
;

export default async function ImgUpload () { 
      const photo = document.getElementById('photo')?.files[0];
      
    const promise = storage.createFile("6527afc975a7ba67ba9f", 
        ID.unique(),
        photo 
        );
        
        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
};
