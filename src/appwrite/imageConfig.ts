import { Client, Storage, ID } from "appwrite";

const client = new Client();

export const storage = new Storage(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject("65241cfbe5aa3b629f83") // Your project ID
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
  
export const imageUrl = `https://https://cloud.appwrite.io/v1/storage/buckets/"6527afc975a7ba67ba9f"/files/$id/preview?project="65241cfbe5aa3b629f83"`


   //{`/v1/storage/buckets/{"6527afc975a7ba67ba9f"}/files/{i.$id}/view`}
