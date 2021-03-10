var scanlines = $('.scanlines');
var tv = $('.tv');

var term = $('#term').terminal(function(command, term) {
    if (command.match(/^\s*exit\s*$/)) {
        exit();
    } else if (command !== '') {
        try {
            var result = window.eval(command);
            if (result && result instanceof $.fn.init) {
                term.echo('<#jQuery>');
            } else if (result && typeof result === 'object') {
                tree(result);
            } else if (result !== undefined) {
                term.echo(new String(result));
            }
        } catch(e) {
            term.error(new String(e));
        }
    }
}, 
);