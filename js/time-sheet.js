  document.addEventListener('DOMContentLoaded', function() {
            // No need for input event listeners since we're using divs now
            
            // Search functionality
            const searchInput = document.querySelector('.search-input');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const projectCards = document.querySelectorAll('.project-card');
                
                projectCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('.project-description').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = searchTerm === '' ? 'block' : 'none';
                    }
                });
            });
        });
        
        
        
        // Week navigation
        let currentWeekStart = new Date('2025-08-01');
        
        function changeWeek(direction) {
            currentWeekStart.setDate(currentWeekStart.getDate() + (direction * 7));
            updateDateDisplay();
            updateDayNumbers();
        }
        
        function updateDateDisplay() {
            const endDate = new Date(currentWeekStart);
            endDate.setDate(endDate.getDate() + 19);
            
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const startStr = currentWeekStart.toLocaleDateString('en-US', options);
            const endStr = endDate.toLocaleDateString('en-US', options);
            
            document.querySelector('.date-text').textContent = `${startStr} - ${endStr}`;
        }
        
        function updateDayNumbers() {
            const dayColumns = document.querySelectorAll('.day-column');
            dayColumns.forEach((column, index) => {
                const dayNumber = column.querySelector('.day-number');
                const dayDate = new Date(currentWeekStart);
                dayDate.setDate(dayDate.getDate() + index);
                dayNumber.textContent = dayDate.getDate();
            });
        }
        
        // Button actions
        function resetForm() {
            const timeCells = document.querySelectorAll('.time-cell');
            timeCells.forEach(cell => {
                cell.textContent = '8 hrs';
                cell.classList.remove('editable');
            });
            // showNotification('Form reset successfully!', 'info');
        }
        
        function saveForm() {
            const projectData = [];
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach((card, index) => {
                const title = card.querySelector('h3').textContent;
                const timeCells = card.querySelectorAll('.time-cell');
                const timeEntries = {};
                
                timeCells.forEach((cell, dayIndex) => {
                    const value = cell.textContent.trim();
                    if (value && value !== '8 hrs') {
                        timeEntries[`day${dayIndex + 1}`] = value;
                    }
                });
                
                if (Object.keys(timeEntries).length > 0) {
                    projectData.push({
                        project: title,
                        timeEntries: timeEntries
                    });
                }
            });
            
            if (projectData.length > 0) {
                console.log('Saving data:', projectData);
                // showNotification('Time entries saved successfully!', 'success');
            } else {
                // showNotification('No modified time entries to save.', 'warning');
            }
        }
        
        function submitForm() {
            const timeCells = document.querySelectorAll('.time-cell');
            const hasModifiedEntries = Array.from(timeCells).some(cell => 
                cell.textContent.trim() !== '8 hrs' && cell.textContent.trim() !== ''
            );
            
            if (hasModifiedEntries) {
                console.log('Submitting timesheet...');
                // showNotification('Timesheet submitted successfully!', 'success');
            } else {
                // showNotification('Please modify time entries before submitting.', 'warning');
            }
        }
        
        // function showNotification(message, type) {
        //     const existing = document.querySelector('.notification');
        //     if (existing) {
        //         existing.remove();
        //     }
            
        //     const notification = document.createElement('div');
        //     notification.className = `alert alert-${type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'info'} notification`;
        //     notification.style.cssText = `
        //         position: fixed;
        //         top: 20px;
        //         right: 20px;
        //         z-index: 1050;
        //         min-width: 300px;
        //         box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        //         border-radius: 8px;
        //     `;
        //     notification.innerHTML = `
        //         <div class="d-flex justify-content-between align-items-center">
        //             <span>${message}</span>
        //             <button type="button" class="btn-close" onclick="this.parentElement.parentElement.remove()"></button>
        //         </div>
        //     `;
            
        //     document.body.appendChild(notification);
            
        //     setTimeout(() => {
        //         if (notification.parentNode) {
        //             notification.remove();
        //         }
        //     }, 3000);
        // }