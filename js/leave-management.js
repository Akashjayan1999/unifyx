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

