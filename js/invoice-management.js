 function showInvoice() {
            // document.getElementById('projectForm').style.display = 'none';
            document.getElementById('invoiceView').style.display = 'block';
            document.getElementsByClassName('btn-view')[0].textContent  = 'Download';
        }
        
        function downloadInvoice() {
            // Create a temporary link element for download
            const link = document.createElement('a');
            link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent('Invoice PNR1258 - July 2023\n\nBLOCKS DESIGN STUDIO\nAmount Due: 3,500.00 NZD\nDue Date: 20 Jan 2023');
            link.download = 'Invoice_PNR1258_July.txt';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show download confirmation
            alert('Invoice downloaded successfully!');
        }
        
        // Optional: Add back button functionality
        function goBack() {
            document.getElementById('invoiceView').style.display = 'none';
        }
        
        // Add click handler to company logo to go back
        // document.addEventListener('DOMContentLoaded', function() {
        //     const logo = document.querySelector('.company-logo');
        //     if (logo) {
        //         logo.style.cursor = 'pointer';
        //         logo.addEventListener('click', goBack);
        //     }
        // });
        document.addEventListener('DOMContentLoaded', function() {
            
            // const form = document.querySelector('form');
            // form.addEventListener('submit', function(e) {
            //     e.preventDefault();
            //     alert('Leave application submitted successfully!');
            // });
            
           
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
            
           
            
        });