export class Tasks {
    id:string;
    task:string;
    description:string;
    category:string;
    status:string;
    priority:number;
    isDelete:boolean;

    constructor(tasks){
        this.id= tasks.id || '';
        this.task= tasks.task || '';
        this.description= tasks.description || '';
        this.category= tasks.category || '';
        this.status= tasks.status || '';
        this.priority= tasks.prioriry || 0;
        this.isDelete= tasks.isDelete || false;
    }
}
