# grunt-pageres [![Build Status](https://travis-ci.org/sindresorhus/grunt-pageres.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-pageres)

[<img src="https://github.com/sindresorhus/pageres/raw/master/media/logo.png" width="150" align="right">](https://github.com/sindresorhus/pageres)

> Capture website screenshots using [`pageres`](https://github.com/sindresorhus/pageres)

*Issues should be opened on the pageres [issue tracker](https://github.com/sindresorhus/pageres/issues).*

[Using another task runner?](https://github.com/sindresorhus/pageres#task-runners)


## Install

```
$ npm install --save-dev grunt-pageres
```

Note to Linux users: If you get a "No usable sandbox!" error, you need to enable [system sandboxing](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox).


## Usage

```js
require('load-grunt-tasks')(grunt);

grunt.initConfig({
	pageres: {
		screenshot: {
			options: {
				urls: 'https://sindresorhus.com',
				sizes: [
					'1200x800',
					'800x600'
				],
				dest: 'dist'
			}
		},
		multipleUrls: {
			options: {
				urls: [
					'https://sindresorhus.com',
					'https://google.com'
				],
				sizes: [
					'800x1000',
					'400x1000'
				],
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

*Required*<br>
Type: `string | string[]`

One or more URLs or local paths to the websites you want to screenshot.

### sizes

*Required*<br>
Type: `string[]`

Use a `<width>x<height>` notation or a keyword.

A keyword is a version of a device from [this list](http://viewportsizes.com). You can also pass in the `w3counter` keyword to use the ten most popular resolutions from [w3counter](http://www.w3counter.com/globalstats.php).

### dest

*Required*<br>
Type: `string`

Destination directory.

### delay

Type: `number` *(seconds)*<br>
Default: `0`

Delay capturing the screenshot.

Useful when the site does things after load that you want to capture.

### timeout

Type: `number` *(seconds)*<br>
Default: `60`

Number of seconds after which the request is aborted.

### crop

Type: `boolean`<br>
Default: `false`

Crop to the set height.

### css

Type: `string`

Apply custom CSS to the webpage. Specify some CSS or the path to a CSS file.

### script

Type: `string`

Apply custom JavaScript to the webpage. Specify some JavaScript or the path to a file.

### cookies

Type: `Array<string | Object>`

A string with the same format as a [browser cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) or [an object](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagesetcookiecookies).

Tip: Go to the website you want a cookie for and [copy-paste it from DevTools](https://stackoverflow.com/a/24961735/64949).

### filename

Type: `string`

Define a customized filename using templating.<br>
For example `{{date}} - {{url}}-{{size}}{{crop}}`.

Available variables:

- `url`: The URL in [slugified](https://github.com/sindresorhus/filenamify-url) form, eg. `http://yeoman.io/blog/` becomes `yeoman.io!blog`
- `size`: Specified size, eg. `1024x1000`
- `width`: Width of the specified size, eg. `1024`
- `height`: Height of the specified size, eg. `1000`
- `crop`: Outputs `-cropped` when the crop option is true
- `date`: The current date (Y-M-d), eg. 2015-05-18
- `time`: The current time (h-m-s), eg. 21-15-11

### incrementalName

Type: `boolean`<br>
Default: `false`

When a file exists, append an incremental number.

### selector

Type: `string`

Capture a specific DOM element matching a CSS selector.

### hide

Type: `string[]`

Hide an array of DOM elements matching CSS selectors.

### username

Type: `string`

Username for authenticating with HTTP auth.

### password

Type: `string`

Password for authenticating with HTTP auth.

### scale

Type: `number`<br>
Default: `1`

Scale webpage `n` times.

### format

Type: `string`<br>
Default: `png`<br>
Values: `png`, `jpg`

Image format.

### userAgent

Type: `string`

Custom user agent.

### headers

Type: `Object`

Custom HTTP request headers.

### transparent

Type: `boolean`<br>
Default: `false`

Set background color to `transparent` instead of `white` if no background is set.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
