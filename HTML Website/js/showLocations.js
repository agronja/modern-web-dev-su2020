function locations(data) {
    var newContent = '';
    
    for (var i = 0; i < data.events.length; i++) {
        newContent += '<div class="event>';
        newContent += '<img src="' + data.events[i].map + '"';
        newContent += ' alt="' + data.events[i].location + '" />';
        newContent += '<p><b>' + data.events[i].location + '</b><br>';
        newContent += data.events[i].date + '</p>';
        newContent += '</div>';
    }
    
    document.getElementById('content'). innerHtml.newContent;
    
}