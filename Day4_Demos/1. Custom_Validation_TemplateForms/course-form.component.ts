import { Component } from '@angular/core';
import { Course }    from './course';

@Component({
    selector: 'course-form',
    templateUrl: 'app/course-form.component.html'
})
export class CourseFormComponent {

    model = new Course(1, 'Angular 2', '4 days', 'kalpana@infosys.com');
    submitted = false;

    onSubmit() { this.submitted = true; }

    newCourse() {
        this.model = new Course(0, '', '', '');
    }
}
