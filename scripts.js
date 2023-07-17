$(document).ready(function() {
    $('#task-form').on('submit', function(e) {
        e.preventDefault();
        let taskName = $('#task-input').val();
        $('#task-list').append('<li class="task-item">' + taskName + '</li>');
        $('#task-input').val('');
    });

    $('#task-list').on('click', '.task-item', function() {
        $(this).toggleClass('completed');
    });
});
