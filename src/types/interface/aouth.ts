
export interface Signin{
    email: string;
    password: string;
}

export interface Signup extends Signin{
    first_name: string;
    last_name: string;
    gender:string;
}

export interface ResetPassword{
    email?: string;
    phone?: string|number;
}




export interface Request{
    signup:(data:Signup)=>any,
    signin:(data:Signin)=>any,
    
    
}
