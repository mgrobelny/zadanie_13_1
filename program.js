process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        
        switch (instruction) {
        	case 'help':
        		process.stdout.write('Type "version" to get the version info of the node; "language" to get the environment language name; "exit" to leave the app.');
        		break;
        	case 'exit':
        		process.stdout.write('Quitting app!');
        		process.exit();
        		break;
        	case 'version':
  		      	process.stdout.write('Node version is ' + process.versions.node + '.');
  				break;
  			case 'language':
  				process.stdout.write('Used language of the environment is ' + process.env.lang + '.');
  				break;
        	default:
        	    process.stderr.write('Wrong instruction!');
        	    break;
        }
    }
});