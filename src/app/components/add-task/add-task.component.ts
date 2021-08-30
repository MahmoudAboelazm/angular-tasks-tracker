import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Input() text: string = '';
  @Input() day: string = '';
  @Input() reminder: boolean = false;
  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      return alert('Please add a task!');
    }
    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.onSubmitTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
