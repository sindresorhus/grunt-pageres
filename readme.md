# grunt-pageres [![Build Status](https://travis-ci.org/sindresorhus/grunt-pageres.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-pageres)

[<img src="https://github.com/sindresorhus/pageres/raw/master/media/logo.png" width="150" align="right">](https://github.com/sindresorhus/pageres)

> Capture website screenshots using [pageres](https://github.com/sindresorhus/pageres)

*Issues should be opened on the pageres [issue tracker](https://github.com/sindresorhus/pageres/issues).*

[Using another task runner?](https://github.com/sindresorhus/pageres#task-runners)


## Install

```
$ npm install --save-dev grunt-pageres
```

*PhantomJS, which is used for generating the screenshots, is installed automagically, but in some [rare cases](https://github.com/Obvious/phantomjs/issues/102) it might fail to and you'll get an `Error: spawn EACCES` error. [Download](http://phantomjs.org/download.html) PhantomJS manually and reinstall this task if that happens.*


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	pageres: {
		screenshot: {
			options: {
				urls: 'yeoman.io',
				sizes: ['1200x800', '800x600'],
				dest: 'dist'
			}
		},
		multipleUrls: {
			options: {
				urls: ['todomvc.com', 'google.com'],
				sizes: ['800x1000', '400x1000'],
				dest: 'dist',
				crop: true
			}
		}
	}
});

grunt.registerTask('default', ['pageres']);
```


## Options

### urls

*Required*  
Type: `string`, `array`

One or more URLs or local paths to the websites you want to screenshot.

### sizes

*Required*  
Type: `array`

Use a `<width>x<height>` notation or a keyword.

A keyword is a version of a device from [this list](http://viewportsizes.com).
You can also pass in the `w3counter` keyword to use the ten most popular 
resolutions from [w3counter](http://www.w3counter.com/globalstats.php).

### dest

*Required*  
Type: `string`

Destination directory.

### delay

Type: `number` *(seconds)*  
Default: `0`

Delay capturing the screenshot.

Useful when the site does things after load that you want to capture.

### crop

Type: `boolean`  
Default: `false`

Crop to the set height.

### cookies

Type: `array` of `string`, `object`

A string with the same format as a [browser cookie](http://en.wikipedia.org/wiki/HTTP_cookie) or an object of what [`phantomjs.addCookie`](http://phantomjs.org/api/phantom/method/add-cookie.html) accepts.

#### Tip

Go to the website you want a cookie for and copy-paste it from Dev Tools.

### filename

Type: `string`

Define a customized filename using [Lo-Dash templates](http://lodash.com/docs#template).  
For example `{{date}} - {{url}}-{{size}}{{crop}}`.

Available variables:

- `url`: The URL in [slugified](https://github.com/ogt/slugify-url) form, eg. `http://yeoman.io/blog/` becomes `yeoman.io!blog`
- `size`: Specified size, eg. `1024x1000`
- `width`: Width of the specified size, eg. `1024`
- `height`: Height of the specified size, eg. `1000`
- `crop`: Outputs `-cropped` when the crop option is true
- `date`: The current date (Y-M-d), eg. 2015-05-18
- `time`: The current time (h-m-s), eg. 21-15-11

### selector

Type: `string`

Capture a specific DOM element.

### hide

Type: `array`

Hide an array of DOM elements.

### username

Type: `string`

Username for authenticating with HTTP auth.

### password

Type: `string`

Password for authenticating with HTTP auth.

### scale

Type: `number`

Scale webpage `n` of times.

### format

Type: `String`  
Default: `png`  
Values: `png`, `jpg`

Image format.

### userAgent

Type: `string`

Custom user agent.

### headers

Type: `object`

Custom HTTP request headers.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
