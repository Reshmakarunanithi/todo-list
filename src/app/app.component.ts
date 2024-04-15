import { Component } from '@angular/core'; 
import { Title } from '@angular/platform-browser';

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent {
 

	/* An empty array that is responsible 
	to add a division */
	public items:any = []; 
    


	/* A two-way binding performed which 
	pushes text on division */
	public newTask:string|any; 


	/* When input is empty, it will 
	not create a new division */
	public addToList() { 
        // let newtask =this.newTask
		if (this.newTask == '') { 
		} 
		else { 
			this.items.push(this.newTask);  
			this.newTask = ''; 
		} 
	} 
    public deleteTask(index: number) { 
        this.items.splice(index, 1); 
    } 
} 
	
