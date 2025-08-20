 function showTab(tabName, element) {
            // Hide all content
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));
            
            // Remove active from all tabs
            const tabs = document.querySelectorAll('.custom-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show selected content
            document.getElementById(tabName + '-content').classList.add('active');
            
            // Add active to clicked tab
            element.classList.add('active');
        }

        const tabs = document.querySelectorAll('.custom-tab');

function validateForm() {
            const form = document.getElementById('employeeWorkForm');
            const startDate = new Date(document.getElementById('workStartDate').value);
            const endDate = new Date(document.getElementById('workEndDate').value);
            
           
            if (endDate <= startDate) {
                alert('Work End Date must be after Work Start Date');
                return false;
            }
            
            return form.checkValidity();
        }


        function saveForm() {
            const formData = {
                employeeName: document.getElementById('employeeName').value,
                employeeId: document.getElementById('employeeId').value,
                projectId: document.getElementById('projectId').value,
                workLocation: document.getElementById('workLocation').value,
                workStartDate: document.getElementById('workStartDate').value,
                workEndDate: document.getElementById('workEndDate').value,
                taskDescription: document.getElementById('taskDescription').value
            };
            
            console.log('Form saved:', formData);
            alert('Form data saved successfully!');
        }

 
        document.getElementById('employeeWorkForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (validateForm()) {
                this.classList.remove('was-validated');
                
                const formData = {
                    employeeName: document.getElementById('employeeName').value,
                    employeeId: document.getElementById('employeeId').value,
                    projectId: document.getElementById('projectId').value,
                    workLocation: document.getElementById('workLocation').value,
                    workStartDate: document.getElementById('workStartDate').value,
                    workEndDate: document.getElementById('workEndDate').value,
                    taskDescription: document.getElementById('taskDescription').value
                };
                
                console.log('Form submitted:', formData);
                alert('Form submitted successfully!');
            } else {
                this.classList.add('was-validated');
            }
        });

        
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                if (this.checkValidity()) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                } else {
                    this.classList.remove('is-valid');
                    this.classList.add('is-invalid');
                }
            });
        });


        const today = new Date().toISOString().split('T')[0];
        document.getElementById('workStartDate').setAttribute('min', today);
        document.getElementById('workEndDate').setAttribute('min', today);