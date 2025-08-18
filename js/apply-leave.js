 document.addEventListener('DOMContentLoaded', function() {
            
            const form = document.querySelector('form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Leave application submitted successfully!');
            });
            
           
            const attachLink = document.querySelector('.attach-document');
            attachLink.addEventListener('click', function(e) {
                e.preventDefault();
                const input = document.createElement('input');
                input.type = 'file';
                input.accept = '.pdf,.doc,.docx,.jpg,.png';
                input.click();
                
                input.addEventListener('change', function() {
                    if (input.files.length > 0) {
                        attachLink.innerHTML = `<i class="bi bi-paperclip attach-icon"></i>File: ${input.files[0].name} <span class="optional-text">(attached)</span>`;
                    }
                });
            });
            
           
            const dateInput = document.querySelector('.date-input');
            dateInput.addEventListener('change', function() {
                console.log('Date selected:', this.value);
            });
        });