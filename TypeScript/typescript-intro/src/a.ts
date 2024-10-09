const helloKanna = (firstName:string) => {
    console.log(firstName)
}
helloKanna("FirstName")


const sum = (a:number, b:number) : number => {
    return a+b;
}
console.log(3,4)

function customTimeOut(fn: () => void){
    setTimeout(fn,1000)
}

customTimeOut(() => { 
    console.log("Hello Brother")
})

const userObject = {
    firstName: "Kanna",
    lastName: "Sitaram",
    email: "manideepsitaram@gmail.com",
    age: 23
}

interface User {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}

function acceptObject(userObject: User): number{
    return userObject.age
}