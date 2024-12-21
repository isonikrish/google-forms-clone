export type setIsLoginType = {
    setIsLogin: (value: boolean) => void;
}
export type question = {
    id: number
    question: string
}

export type loggedUser = {
    id: number,
    username: string,
    email: string,
    password: string,
}
export type userLoginData = {
   
    email: string,
    password: string,
}
export type userSignupData = {
    username: string,
} & userLoginData

export type editForm = {
    id: number,
    title: string,
    userId: number
    status: string
    questions: question[]
}