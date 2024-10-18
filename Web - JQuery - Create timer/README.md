# jQuery Plugin Collection

This repository contains a collection of JQuery plugins that can be used to add interactive features to your web pages.

## Table of contents

- [How to install](##How-to-install)
- [Functions](##timerUntilDate)
    - [timerUntilDate()](##timerUntilDate)
- [Contributing](##Contributing)
- [License](##License)

## How to install

### Step 1: Install Dependencies

Make sure jQuery is available in your project.You can install it via npm/yarn or include it via CDN in your HTML.

**Installation via npm**
```bash
npm install jquery
```

**Installation via yarn**

```bash
yarn add jquery
```

**Inclusion via CDN**

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

### Step 2: Include the JavaScript file

In your html, include the JavaScript file.

```html
<script type="module" src="./path/to/script.js"></script>
```

### Step 3: Include or Import the plugin

In your html, include the plugins file.

```html
<script src="./path/to/pluginLib.js"></script>
```

*or*

In your JavaScript file, import the plugin.

```javascript
import './path/to/pluginLib.js';
```

And you are ready to use the functions.

## timerUntilDate()

The `timerUntilDate()` plugin allows you to create a timer that counts down the time until a specific date. It is highly configurable and easy to use.

### How to use

In your HTML, add an element where the timer will be displayed, then initialize the plugin in your main JavaScript file:

```html
<div id="timer"></div>
```

```javascript
import { timerUntilDate } from './path/to/plugin.js';

$('#timer').timerUntilDate({
        endYear: 2024,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
    });
```

This way all elements will be created inside the `timer` element.

### Plugin Parameters

| Param | Description | Default Value |  values |
| --- | --- | --- | --- |
| endYear | End year of timer | Next year | Any year from now |
| endMonth | End month of timer | `1` | `1` to `12` |
| endDay | End day of timer | `1` | `1` to `31` |
| endHour | End hour of timer | `0` | `0` to `23` |
| endMinute | Final minute of timer | `0` | `0` to `59` |
| endSecond | Final second of timer | `0` | `0` to `59` |

### Plugin result

```html
<div id="timer">
    <span class="digit dayDigit">0</span>
    <span class="digit dayDigit">0</span>
    <span class="separator daySeparator">:</span>
    <span class="digit">0</span>
    <span class="digit">0</span>
    <span class="separator">:</span>
    <span class="digit">0</span>
    <span class="digit">0</span>
    <span class="separator">:</span>
    <span class="digit">0</span>
    <span class="digit">0</span>
</div>
```

You can use the classes to style the timer as you wish.

OBS: `dayDigit` and `daySeparator` are the classes used to style the day and separator, respectively. The `dayDigit` elements adapt by the quantity of days remaining, and they both are excluded when the timer is lesser than 24 hours:

- 0 days remaining = 0 `dayDigit` and no `daySeparator`
- 1 - 99 days remaining = 2 `dayDigit`;
- 100 - 999 days remaining = 3 `dayDigit`;
- 1000 - 9999 days remaining = 4 `dayDigit`...

## Contributing

If you would like to contribute new plugins or improvements to existing plugins, please feel free to submit a pull request. All contributions are welcome!

## License

This project is licensed under the MIT License.