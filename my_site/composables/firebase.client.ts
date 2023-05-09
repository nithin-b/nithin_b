import { promises } from "dns";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString,getDownloadURL, getMetadata } from 'firebase/storage'


  const firebaseConfig = {
    apiKey: "AIzaSyDCpYlTECEqcBJLu8M9lKwm3tfnNRpoIzw",
    authDomain: "mydata-ca0ae.firebaseapp.com",
    projectId: "mydata-ca0ae",
    storageBucket: "mydata-ca0ae.appspot.com",
    messagingSenderId: "76519734943",
    appId: "1:76519734943:web:7bcca3cf68ab4a6e086caa",
    measurementId: "G-CQQJ27H1R7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // console.log(app)
  const storage = getStorage(app)

  export const saveFile = async(fullPath: string, result: any) => {
    const imageRef = ref(storage, fullPath)
    // const storeFilePath = ref(storage, '/space.jpg')
    // Data URL string
    const storageRef = ref(storage, fullPath)
    const snapshot = await uploadString(storageRef, result, "data_url")
    
    if (snapshot) {
      const downLoadUrl = await getDownloadURL(snapshot.ref);
      const metadata = await getMetadata(storageRef)
      return {snapshot, downLoadUrl, metadata}
    }
  }
export const upoadFile = async (file: File) => {
  return await new Promise((resolve, reject) => {
    let reader = new FileReader()
    reader.readAsDataURL(file);
    reader.onload = async (e) => {
      const result = reader.result;
      // console.log(result)
      const { snapshot, downLoadUrl, metadata }: any = saveFile('images/' + file.name, result)
      
      if (snapshot) {
        resolve({ snapshot, downLoadUrl, metadata });
        
      } else {
        reject()
      }
    }
  })
}
// interface uploadResults{
//   snapshot: UploadResult,
//   downLoadUrl: string,
//   metadata: FullMetadata
// }
