var Jasmine = require('jasmine')
var jasmine = new Jasmine

jasmine.loadConfig({
	spec_dir: 'tests',
	spec_files: [
		'tests/**/*.js'
	]
})

jasmine.onComplete(function(passed){
    console.log('passed:',passed)
})

jasmine.configureDefaultReporter({
    timer: new jasmine.jasmine.Timer(),
    print: function() {
        process.stdout.write(arguments)
    },
    showColors: true
})

jasmine.execute()