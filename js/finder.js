 $(document).ready(function() {
            // Search button click event
            $('#searchBtn').click(function() {
                // Hide search form and show employee details
                $('#searchForm').fadeOut(300, function() {
                    $('#employeeDetails').fadeIn(300);
                    $('#closeBtn').show(); // Show close button
                });
            });

            // Close button click event
            $('#closeBtn').click(function() {
                // Hide employee details and show search form
                $('#employeeDetails').fadeOut(300, function() {
                    $('#searchForm').fadeIn(300);
                    $('#closeBtn').hide(); // Hide close button
                });
            });

            // Allow Enter key to trigger search
            $('.form-control').keypress(function(e) {
                if (e.which == 13) {
                    $('#searchBtn').click();
                }
            });
        });