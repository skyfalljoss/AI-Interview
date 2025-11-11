'use server';
import {db} from "@/firebase/admin"

export async function signUp(params: SignInParams){
    const {uid, name, email } = params;

    try{
        const userRecord = await db.collection('user').doc(uid).get();
    }catch(error:any){
        console.error('Error creating a user', error);

        if(error.code === 'auth/email-already-exists'){
            return{
                success: false,
                message: 'This email is already in use'
            }
        }

        return {
            success: false,
            message: 'Failed to create an account'
        }

    }
}