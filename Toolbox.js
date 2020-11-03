/**
 * Class containing useful math functions.
 */
class Mathf {
    /**
     * Returns true if num is divisible with div.
     * @param {number} num The number to check.
     * @param {number} div The dividor.
     */
    static IsDivisibleWith(num, div) {
            if (num % div == 0) {
                return true
            } else {
                return false
            }
        }
        /**
         * Returns true if the number is between two distinct numbers.
         * @param {number} num The number to check.
         * @param {number} min The minimum limit.
         * @param {number} max The maximum limit.
         */
    static Between(num, min, max) {
            if (num > min && num < max) {
                return true
            } else {
                return false
            }
        }
        /**
         * Returns true if the number is between two distinct numbers or equal to one of them.
         * @param {number} num The number to check.
         * @param {number} min The minimum limit.
         * @param {number} max The maximum limit.
         */
    static Interval(num, min, max) {
        if (num >= min && num <= max) {
            return true
        } else {
            return false
        }
    }
    static FindPrimes(min, max) {
        var primes = []
        for (let i = min; i < max; i++) {
            var div = Mathf.FindDividors(i)
            if (div.length == 2) {
                primes.push(i)
            }
        }
        return primes
    }
    static FindFibs(count) {
            var fibs = [0, 1]
            var i = 1;
            while (fibs.length < count) {
                var f = fibs[i] + fibs[i - 1]
                fibs.push(f);
                i++;
            }
            return fibs;
        }
        /**
         * Returns an array of all the dividors of a specific number.
         * @param {number} num The number to find the dividors.
         */
    static FindDividors(num) {
        var dividors = []
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                dividors.push(i)
            }
        }
        return dividors
    }
    /**Used for conversion from degrees to radians(1 deg = 0.0174532925 rad)
     * @returns {Number}
     */
    static get deg2Rad() 
    {
        return 0.0174532925;
    }
    /**Used for conversion from radians to degrees(1 rad = 57.2957795)
     * @returns {Number}
     */
    static get rad2Deg() {
        return 57.2957795;
    }

}
/**
 * Class used for manipulating web elements.
 */
class HTML {
    /**
     * Returns a reference for an HTML element by its ID.
     * @param {string} ID The ID of the desired element.
     */
    static GetTagByID(ID) {
            var element = document.getElementById(ID)
            return element
        }
        /**
         * Returns references for all HTML elements with the specified class.
         * @param {string} class_name The name of the class the desired elements have
         */
    static GetTagsByClass(class_name) {
        var elements = document.getElementsByClassName(class_name)
        return elements
    }
}

/**
 * Class used for random generation
 */
class Random {
    /**
     * Returns a random whole number between two numbers.
     * @param {number} min The minimum limit.
     * @param {number} max The maximum limit.
     */
    static Int(min, max) {
            var num = Math.floor(Math.random() * max) + min
            return num
        }
        /**
         * Returns a random number between two numbers.
         * @param {number} min The minimum limit.
         * @param {number} max The maximum limit.
         */
    static Float(min, max) {
            var num = Math.random() * (max - min) + min;
            return num;
        }
        /**
         * Returns a random hex color.
         */
    static HexColor() {
            var chars = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += chars[Random.Int(0, chars.length)];
            }
            return color;
        }
        /**
         *  Returns a random RGBA color.
         */
    static RGBA_Color() {
        var red = Random.Int(0, 255);
        var blue = Random.Int(0, 255);
        var green = Random.Int(0, 255);
        var alpha = Random.Int(0, 255);
        var rgba = 'rgba(' + red + ',' + blue + ',' + green + ',' + alpha + ')';
        return rgba;
    }
}