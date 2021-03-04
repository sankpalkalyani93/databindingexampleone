import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "DataBindingExampleOne";

  studentName = "Default-Student-Value";
  allowNewStudent = false;
  studentCreated = false;
  studentCreationStatus = "No Student is created.";

  constructor() {
    setTimeout(() => {
      this.allowNewStudent = true;
    }, 5000);
  }

  ngOnInit() {}

  onCreateStudent() {
    this.studentCreated = true;
    this.studentCreationStatus = "Student Default Data is:" + this.studentName;
  }

  OnUpdateStudentName(event: Event) {
    this.studentName = (<HTMLInputElement>event.target).value;
  }
}
