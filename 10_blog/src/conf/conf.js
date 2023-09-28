const conf = {
    appwriteUrl:String(import.meta.env.VITE_APP_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID),
    appwriteDtatbaseId:String(import.meta.env.VITE_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APP_APPWRITE_COLLECTION_ID),
    appWriteBucketId:String(import.meta.env.VITE_APP_APPWRITE_BUCKET_ID),
};

export default conf;
