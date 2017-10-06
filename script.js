function sleep_in(weekday, holiday) {

    console.log(typeof weekday);


    if ((weekday == true) && (holiday == false)) {
        return false;
    }
    if ((weekday == false) && (holiday == true)) {
        return true;
    }
    if ((weekday == true) && (holiday == true)) {
        return true;
    }
    if ((weekday == false) && (holiday == false)) {
        return true;
    }
}
function monkey_trouble(a_smile, b_smile) {
    if (a_smile == b_smile) {
        return true;
    } else {
        return false;
    }
}
function string_times(word, times){
        if(times == 0){
        return "";
        }else {
            var repeatIt = word;
            for (var i = 0; i < times - 1; i++) {
                var repeatIt2 = word + repeatIt;
                repeatIt = repeatIt2
            }
            return repeatIt2;
        }
    }
function front_times(word, times){
    var x = word.substring(0,3);
    if(times == 0){
        return "";
    }else {
        var repeatIt = x;
        for (var i = 0; i < times - 1; i++) {
            var repeatIt2 = x + repeatIt;
            repeatIt = repeatIt2
        }
        return repeatIt2;
    }

}
function string_bits(word){
    var secondLetter = "";
    for(var i=0; i<word.length; i+=2){
        secondLetter += word[i];
    }
    return secondLetter;
}
function caughtSpeeding(speed, birthday) {
    var ticketSize = 0;

    if (birthday == false) {
        if (speed <= 60) {
            ticketSize = 0;
        } else if (61 <= speed && speed <= 80) {
            ticketSize = 1;
        } else if (speed >= 81){
            ticketSize = 2;
        }
    }
        if (birthday == true) {
            if (speed <= 65) {
                ticketSize = 0;
            } else if (66 <= speed && speed <= 85) {
                ticketSize = 1;
            } else if (speed >= 86){
                ticketSize = 2;
            }
        }
    return ticketSize;
}
function fizz_buzz(x){
    if (x % 3 == 0){
        if (x % 5 == 0){
            return 'FizzBuzz';
        }else {
            return 'Fizz';
        }
    } else if (x % 5 == 0){
        return 'Buzz';
    } else {
        return x + '!';
    }
}
function teaParty(x,y){
    while(x>=5 && y>=5) {
        if (x / 2 >= y || y / 2 >= x) {
            return 2;
        } else {
            return 1;
        }
    }
    return 0;
}
function blackjack(x,y){
    if (x>21 && y>21){
    return 0;
    }
    if (x>21 && y<=21){
    return y;
    }
    if (y>21 && x<=21){
    return x;
    }
    if(x <= 21 && y <= 21){
        if(x/21 >= y/21){
            return x;
        }else if (y/21 >= x/21){
            return y;
        }
    }
}
function loneSum(a,b,c) {
    if (a == c && b != c && a != b) {
        return b;
    }
    if (a == b && c != b && a !=c) {
        return c;
    }
    if (b == c && a != c && a!=b) {
        return a;
    }
    if (a != b && b != c &&  a != c) {
        return a + b + c;
    }

    if (a == b && b == c && a == c) {
        return 0;
    }
}

