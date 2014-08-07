# grunt-pageres [![Build Status](https://travis-ci.org/sindresorhus/grunt-pageres.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-pageres)

[<img src="https://github.com/sindresorhus/pageres/raw/master/media/logo.png" width="200" align="right">](https://github.com/sindresorhus/pageres)

> Responsive website screenshots using [pageres](https://github.com/sindresorhus/pageres)

*Issues should be opened on the pageres [issue tracker](https://github.com/sindresorhus/pageres/issues).*

[Using another task runner?](https://github.com/sindresorhus/pageres#task-runners)


## Install

```sh
$ npm install --save-dev grunt-pageres
```

*PhantomJS, which is used for generating the screenshots, is installed automagically, but in some [rare cases](https://github.com/Obvious/phantomjs/issues/102) it might fail to and you'll get an `Error: spawn EACCES` error. [Download](http://phantomjs.org/download.html) PhantomJS manually and reinstall this task if that happens.*


## Usage

```js
grunt.initConfig({
	pageres: {								// task
		dist: {								// target
			options: {
				url: 'yeoman.io',
				sizes: ['1200x800', '800x600'],
				dest: 'dist'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-pageres');
grunt.registerTask('default', ['pageres']);
```


## API

### Options

#### url

*Required*  
Type: `string`

URL or local path to the website you want to screenshot.

#### sizes

*Required*  
Type: `array`

Use a `<width>x<height>` notation or a keyword.

A keyword is a version of a device from [this list](http://viewportsizes.com).
You can also pass in the `w3counter` keyword to use the ten most popular 
resolutions from [w3counter](http://www.w3counter.com/globalstats.php).

#### dest

*Required*  
Type: `string`

Destination directory.

#### delay

Type: `number` *(seconds)*  
Default: `0`

Delay capturing the screenshot.

Useful when the site does things after load that you want to capture.

#### crop

Type: `boolean`  
Default: `false`

Crop to the set height.

#### cookies

Type: `array`  

Same format as a [browser cookie](http://en.wikipedia.org/wiki/HTTP_cookie).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
