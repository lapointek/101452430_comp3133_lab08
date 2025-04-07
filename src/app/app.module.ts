import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import the standalone AppComponent
import { StudentsComponent } from './students.component'; // Import the standalone StudentsComponent

// Bootstrap the standalone AppComponent
bootstrapApplication(AppComponent).then(() => {
  console.log('Application is bootstrapped');
});
