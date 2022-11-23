function getSleepHours(day) {
    
    day = day.toLowerCase();

    switch(day) {
        case 'monday': return 8;
        break;
        case 'tuesday': return 6.5;
        break;
        case 'wednesday' : return 7;
        break;
        case 'thursday': return 8;
        break;
        case 'friday': return 6.5;
        break;
        case 'saturday' : return 7;
        break;
        case 'sunday' : return 10;
        break;
        default : console.log('Sorry, something\'s wrong');
        break;
    };
};

// Practice calling the function:
console.log(getSleepHours('friday'));

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
};

