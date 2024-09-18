import { Component, OnInit } from '@angular/core';
import { Reminder } from '../models/reminder';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.css']
})
export class RemindersListComponent implements OnInit {

  ngOnInit(): void {
    let savedReminders = localStorage.getItem("reminders")
    this.reminders = savedReminders ? JSON.parse(savedReminders) : []
  }

reminderTask: string = "";
reminderDueDate: Date= new Date

 reminders: Reminder[] = []

 addAppointment(){
   if(this.reminderTask.trim().length && this.reminderDueDate) {
    let newAppointment: Reminder = {
      id: Date.now(),
      task: this.reminderTask,
      dueDate: this.reminderDueDate
    }
    this.reminders.push(newAppointment)

    this.reminderTask = "";
    this.reminderDueDate = new Date

    localStorage.setItem("reminders", JSON.stringify(this.reminders))
   }
 }

 deleteAppointment(index: number) {
  this.reminders.splice(index, 1)
  localStorage.setItem("reminders", JSON.stringify(this.reminders))
 }

}
