(function($) {
    //Create a display for a temporizer
    $.fn.timerUntilDate = function(options) {
        const defaultOptions = $.extend({
            endYear: new Date().getFullYear() + 1,
            endMonth: 1,
            endDay: 1,
            endHour: 0,
            endMinute: 0,
            endSecond: 0
        }, options);

        //Create and append elements
        const digits = {
            hours: [$('<span class="digit">').html('0'), $('<span class="digit">').html('0')],
            minutes: [$('<span class="digit">').html('0'), $('<span class="digit">').html('0')],
            seconds: [$('<span class="digit">').html('0'), $('<span class="digit">').html('0')]
        };
        const separators = {
            hour: $('<span class="separator">').html(':'),
            minute: $('<span class="separator">').html(':')
        };
        $(this).append(
            digits.hours[0], digits.hours[1], separators.hour, 
            digits.minutes[0], digits.minutes[1], separators.minute, 
            digits.seconds[0], digits.seconds[1]
        );

        //Get target time
        const targetTime = new Date(defaultOptions.endYear, defaultOptions.endMonth - 1,
        defaultOptions.endDay, defaultOptions.endHour, 
        defaultOptions.endMinute, defaultOptions.endSecond);

        //Initialize the timer
        let temporizer = setInterval(() => {
            //Get current time and difference by seconds
            const currentTime = new Date();
            const secondsDifference = (targetTime - currentTime) / 1000;

            //If the difference is 0 then stop the timer
            if (secondsDifference <= 0) {
                clearInterval(temporizer);
                return;
            }

            //Calculate the difference in days, hours, minutes and seconds
            let rest = 0;
            const daysRemaining = Math.floor(secondsDifference / 86400);
            rest = Math.floor(secondsDifference % 86400);
            const hoursRemaining = Math.floor(rest / 3600);
            rest = Math.floor(rest % 3600);
            const minutesRemaining = Math.floor(rest / 60);
            rest = Math.floor(rest % 60);
            const secondsRemaining = rest;

            //Add or exclude days elements/update days elements
            //My 'gambiarra'
            if (daysRemaining > 0) {
                let dayDigitSpanNeeded = daysRemaining.toString().length;
                let dayDigitSpanHas = $(this).find('.dayDigit').length;

                if (!$(this).find('.daysSeparator').length) {
                    $(this).prepend($('<span class="separator daysSeparator">').html(':'));
                }

                if(daysRemaining >= 10) {   
                    if (dayDigitSpanHas < dayDigitSpanNeeded) {
                        for (let i = dayDigitSpanHas; i < dayDigitSpanNeeded; i++) {
                            $(this).prepend($('<span class="digit dayDigit">').html('0'));
                        }
                    }
                    else if (dayDigitSpanHas > dayDigitSpanNeeded) {
                        for (let i = dayDigitSpanHas; i > dayDigitSpanNeeded; i--) {
                            $(this).find('.dayDigit')[0].remove();
                        }
                    }

                    for (let i = 0; i < dayDigitSpanHas; i++) {
                        $($(this).find('.dayDigit')[i]).html(daysRemaining.toString()[i]);
                    }
                }
                else if (daysRemaining < 10) {
                    if (dayDigitSpanHas < 2) {
                        for (let i = dayDigitSpanHas; i < 2; i++) {
                            $(this).prepend($('<span class="digit dayDigit">').html('0'));
                        }
                    }
                    else if (dayDigitSpanHas > 2) {
                        for (let i = dayDigitSpanHas; i > 2; i--) {
                            $(this).find('.dayDigit')[0].remove();
                        }
                    }

                    $($(this).find('.dayDigit')[0]).html('0');
                    $($(this).find('.dayDigit')[1]).html(daysRemaining.toString());
                }
            }
            else {
                $(this).find('.daysSeparator').remove();
                $(this).find('.dayDigit').remove();
            }

            //Update the hours, minutes and seconds elements
            const updateDigits = (digitsElements, value) => {
                digitsElements[0].html(Math.floor(value / 10).toString());
                digitsElements[1].html((value % 10).toString());
            };
            updateDigits(digits.hours, hoursRemaining);
            updateDigits(digits.minutes, minutesRemaining);
            updateDigits(digits.seconds, secondsRemaining);

        }, 1000);
        
        return this;
    }
})(jQuery);