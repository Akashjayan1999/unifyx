 document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Timesheet submitted successfully!');
        });
        
        // Slider functionality
        const startHandle = document.querySelector('.slider-handle.start');
        const endHandle = document.querySelector('.slider-handle.end');
        const track = document.querySelector('.slider-track');
        const progress = document.querySelector('.slider-progress');
        const fromTimeDisplay = document.querySelector('.time-control:nth-child(1) .time-value');
        const toTimeDisplay = document.querySelector('.time-control:nth-child(2) .time-value');
        const durationDisplay = document.querySelector('.time-control:nth-child(3) .time-value');
        
        let isDragging = false;
        let currentHandle = null;
        let startTime = 345; // 5:45 AM in minutes (5*60 + 45)
        let endTime = 1050; // 17:30 in minutes (17*60 + 30)
        
        function minutesToTime(minutes) {
            const hours = Math.floor(minutes / 60);
            const mins = minutes % 60;
            return `${hours}:${mins.toString().padStart(2, '0')}`;
        }
        
        function calculateDuration(start, end) {
            let duration = end - start;
            if (duration < 0) duration += 1440; // Handle overnight shifts
            return Math.round(duration / 60 * 100) / 100; // Convert to hours
        }
        
        function updateDisplay() {
            fromTimeDisplay.textContent = minutesToTime(startTime);
            toTimeDisplay.textContent = minutesToTime(endTime);
            durationDisplay.textContent = Math.round(calculateDuration(startTime, endTime));
            
            // Update slider positions
            const startPercent = (startTime / 1440) * 100;
            const endPercent = (endTime / 1440) * 100;
            
            startHandle.style.left = startPercent + '%';
            endHandle.style.left = endPercent + '%';
            
            // Update progress bar
            progress.style.left = startPercent + '%';
            progress.style.width = (endPercent - startPercent) + '%';
        }
        
        function handleMouseDown(e, handle) {
            e.preventDefault();
            isDragging = true;
            currentHandle = handle;
            document.body.style.userSelect = 'none';
        }
        
        function handleMouseMove(e) {
            if (!isDragging || !currentHandle) return;
            
            const rect = track.getBoundingClientRect();
            const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            const minutes = Math.round((percent / 100) * 1440 / 15) * 15; // Round to 15-minute intervals
            
            if (currentHandle === startHandle) {
                startTime = Math.min(minutes, endTime - 15); // Ensure start is before end
            } else if (currentHandle === endHandle) {
                endTime = Math.max(minutes, startTime + 15); // Ensure end is after start
            }
            
            updateDisplay();
        }
        
        function handleMouseUp() {
            isDragging = false;
            currentHandle = null;
            document.body.style.userSelect = '';
        }
        
        // Event listeners
        startHandle.addEventListener('mousedown', (e) => handleMouseDown(e, startHandle));
        endHandle.addEventListener('mousedown', (e) => handleMouseDown(e, endHandle));
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        // Track click to move nearest handle
        track.addEventListener('click', function(e) {
            if (isDragging) return;
            
            const rect = track.getBoundingClientRect();
            const percent = ((e.clientX - rect.left) / rect.width) * 100;
            const minutes = Math.round((percent / 100) * 1440 / 15) * 15;
            
            // Determine which handle is closer
            const startPercent = (startTime / 1440) * 100;
            const endPercent = (endTime / 1440) * 100;
            
            if (Math.abs(percent - startPercent) < Math.abs(percent - endPercent)) {
                startTime = Math.min(minutes, endTime - 15);
            } else {
                endTime = Math.max(minutes, startTime + 15);
            }
            
            updateDisplay();
        });
        
        // Initialize display
        updateDisplay();