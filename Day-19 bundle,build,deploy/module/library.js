export let message= "this is Module COncepts"
export let display= () =>{
    return 'welcome to Ingenuity Game' ;
};

export class Employee {
    constructor(name,id,designation)
    {
        this.name = name;
        this.id = id;
        this.designation = designation;

    }
    
    disDetails(){
        console.log("employee Name: $(this.name) \n Employee id");
    }
}