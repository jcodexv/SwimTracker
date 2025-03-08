const poolDistances = {
    '25m': {
        'freestyle': [50, 100, 200, 400, 800],
        'butterfly': [50, 100, 200],
        'backstroke': [50, 100, 200],
        'breaststroke': [50, 100, 200],
        'medley': [200, 400]
    },
    // '30m': {
    //     'freestyle': [50, 100, 200, 400, 800],
    //     'butterfly': [50, 100, 200],
    //     'backstroke': [50, 100, 200],
    //     'breaststroke': [50, 100, 200],
    //     'medley': [200, 400]
    // },
    '50m': {
        'freestyle': [100, 200, 400, 800, 1500],
        'butterfly': [100, 200],
        'backstroke': [100, 200],
        'breaststroke': [100, 200],
        'medley': [200, 400]
    }
};

const swimmerRecords = {
    'freestyle': {
        '50 meters': [
            { "name": "César Cielo", "gender": "male", "nationality": "Brazilian", "time": "20.91s" },
            { "name": "Sarah Sjöström", "gender": "female", "nationality": "Swedish", "time": "23.67s" }
        ],
        '100 meters': [
            { "name": "David Popovici", "gender": "male", "nationality": "Romanian", "time": "46.86s" },
            { "name": "Sarah Sjöström", "gender": "female", "nationality": "Swedish", "time": "51.71s" }
        ],
        '200 meters': [
            { "name": "Paul Biedermann", "gender": "male", "nationality": "German", "time": "1:42.00" },
            { "name": "Federica Pellegrini", "gender": "female", "nationality": "Italian", "time": "1:52.98" }
        ],
        '400 meters': [
            { "name": "Paul Biedermann", "gender": "male", "nationality": "German", "time": "3:40.07" },
            { "name": "Katie Ledecky", "gender": "female", "nationality": "American", "time": "3:56.46" }
        ],
        '800 meters': [
            { "name": "Zhang Lin", "gender": "male", "nationality": "Chinese", "time": "7:32.12" },
            { "name": "Katie Ledecky", "gender": "female", "nationality": "American", "time": "8:04.79" }
        ],
        '1500 meters': [
            { "name": "Sun Yang", "gender": "male", "nationality": "Chinese", "time": "14:31.02" },
            { "name": "Katie Ledecky", "gender": "female", "nationality": "American", "time": "15:20.48" }
        ]
    },
    'breaststroke': {
        '50 meters': [
            { "name": "Adam Peaty", "gender": "male", "nationality": "British", "time": "25.95s" },
            { "name": "Lilly King", "gender": "female", "nationality": "American", "time": "29.40s" }
        ],
        '100 meters': [
            { "name": "Adam Peaty", "gender": "male", "nationality": "British", "time": "56.88s" },
            { "name": "Lilly King", "gender": "female", "nationality": "American", "time": "1:04.13" }
        ],
        '200 meters': [
            { "name": "Anton Chupkov", "gender": "male", "nationality": "Russian", "time": "2:06.12" },
            { "name": "Tatjana Schoenmaker", "gender": "female", "nationality": "South African", "time": "2:18.95" }
        ]
    },
    'butterfly': {
        '50 meters': [
            { "name": "Andriy Govorov", "gender": "male", "nationality": "Ukrainian", "time": "22.27s" },
            { "name": "Sarah Sjöström", "gender": "female", "nationality": "Swedish", "time": "24.43s" }
        ],
        '100 meters': [
            { "name": "Caeleb Dressel", "gender": "male", "nationality": "American", "time": "49.45s" },
            { "name": "Sarah Sjöström", "gender": "female", "nationality": "Swedish", "time": "55.48s" }
        ],
        '200 meters': [
            { "name": "Kristóf Milák", "gender": "male", "nationality": "Hungarian", "time": "1:50.73" },
            { "name": "Liu Zige", "gender": "female", "nationality": "Chinese", "time": "2:01.81" }
        ]
    },
    'backstroke': {
        '50 meters': [
            { "name": "Hunter Armstrong", "gender": "male", "nationality": "American", "time": "23.71s" },
            { "name": "Zhu Minjie", "gender": "female", "nationality": "Chinese", "time": "26.98s" }
        ],
        '100 meters': [
            { "name": "Ryan Murphy", "gender": "male", "nationality": "American", "time": "51.85s" },
            { "name": "Kaylee McKeown", "gender": "female", "nationality": "Australian", "time": "57.45s" }
        ],
        '200 meters': [
            { "name": "Aaron Peirsol", "gender": "male", "nationality": "American", "time": "1:51.92" },
            { "name": "Kaylee McKeown", "gender": "female", "nationality": "Australian", "time": "2:03.14" }
        ]
    },
    'medley': {
        '200 meters': [
            { "name": "Ryan Lochte", "gender": "male", "nationality": "American", "time": "1:54.00" },
            { "name": "Katinka Hosszú", "gender": "female", "nationality": "Hungarian", "time": "2:06.12" }
        ],
        '400 meters': [
            { "name": "Léon Marchand", "gender": "male", "nationality": "French", "time": "4:02.50" },
            { "name": "Katinka Hosszú", "gender": "female", "nationality": "Hungarian", "time": "4:26.36" }
        ]
    }
};

const styleSelect = document.getElementById('style');
const poolDistanceSelect = document.getElementById('pool-distance');
const distanceSelect = document.getElementById('your-distance');
const genderRadios = document.getElementsByName('gender');

function updateDistanceOptions() {
    const poolDistance = poolDistanceSelect.value;
    const style = styleSelect.value;
    distanceSelect.innerHTML = ''; 

    if (poolDistances[poolDistance] && poolDistances[poolDistance][style]) {
        const distances = poolDistances[poolDistance][style];
        distances.forEach(distance => {
            const option = document.createElement('option');
            option.value = `${distance} meters`;
            option.textContent = `${distance} meters`;
            distanceSelect.appendChild(option);
        });
    }
}

styleSelect.addEventListener('change', updateDistanceOptions);
poolDistanceSelect.addEventListener('change', updateDistanceOptions);

updateDistanceOptions();

function convertTimeToSeconds(time) {
    const parts = time.split(':');
    if (parts.length === 2) {
        return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
    } else {
        return parseFloat(time.replace('s', ''));
    }
}
document.getElementById('calculate-btn').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('your-minutes').value) || 0;
    const seconds = parseInt(document.getElementById('your-seconds').value) || 0;

    // Validate inputs
    if (isNaN(minutes) || isNaN(seconds)) {
        alert("Please enter valid numbers for minutes and seconds.");
        return;
    }

    const selectedDistance = document.getElementById('your-distance').value;
    const selectedGender = document.querySelector('input[name="gender"]:checked') 
        ? document.querySelector('input[name="gender"]:checked').value 
        : 'random';

    const result = document.getElementById('result');
    result.classList.remove('hide');
    result.classList.add('show');
    result.textContent = `Distance: ${selectedDistance}, Time: ${minutes} minutes and ${seconds} seconds, Gender: ${selectedGender}`;

    const stroke = styleSelect.value;
    const distance = selectedDistance.split(' ')[0] + ' meters';

    const userTimeInSeconds = (minutes * 60) + seconds;

    let swimmerData;
    if (selectedGender === 'random') {
        const randomGender = Math.random() < 0.5 ? 'male' : 'female';
        result.textContent += ` (Randomly selected gender: ${randomGender})`;

        swimmerData = swimmerRecords[stroke]?.[distance]?.find(record => record.gender === randomGender);
    } else {
        swimmerData = swimmerRecords[stroke]?.[distance]?.find(record => record.gender === selectedGender);
    }

    if (swimmerData) {
        const swimmerTimeInSeconds = convertTimeToSeconds(swimmerData.time);
        const timeDifference = Math.abs(userTimeInSeconds - swimmerTimeInSeconds);

        result.innerHTML += `<br><strong>Record Holder:</strong> ${swimmerData.name}`;
        result.innerHTML += `<br><strong>International Record:</strong> ${swimmerData.time}`;
        result.innerHTML += `<br><strong>Your Time:</strong> ${minutes} minutes and ${seconds} seconds`;
        result.innerHTML += `<br><strong>Difference:</strong> ${timeDifference.toFixed(2)} seconds`;
    } else {
        result.textContent += '| No record found for selected gender.';
    }
});


function parseTime(time) {
    const [minutePart, secondPart] = time.split(':');
    const [seconds, milliseconds] = secondPart.split('.');

    return {
        minutes: parseInt(minutePart) || 0,
        seconds: parseInt(seconds) || 0,
        milliseconds: Math.round(parseFloat('0.' + (milliseconds || '0')) * 1000)
    };
}

function formatTime(time) {
    const minutes = time.minutes;
    const seconds = time.seconds;
    let milliseconds = time.milliseconds;

    milliseconds = milliseconds === 0 ? '.0' : '.' + milliseconds;

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}${milliseconds}`;
}

function calculateTimeDifference(userTime, swimmerTime) {
    const userTotalSeconds = userTime.minutes * 60 + userTime.seconds + userTime.milliseconds / 1000;
    const swimmerTotalSeconds = swimmerTime.minutes * 60 + swimmerTime.seconds + swimmerTime.milliseconds / 1000;

    const differenceInSeconds = Math.abs(userTotalSeconds - swimmerTotalSeconds);

    const minutesDifference = Math.floor(differenceInSeconds / 60);
    const secondsDifference = Math.floor(differenceInSeconds % 60);
    const millisecondsDifference = Math.round((differenceInSeconds % 1) * 1000);

    return { minutes: minutesDifference, seconds: secondsDifference, milliseconds: millisecondsDifference };
}

function formatTimeDifference(timeDifference) {
    const minutes = timeDifference.minutes;
    const seconds = timeDifference.seconds;
    let milliseconds = timeDifference.milliseconds;

    milliseconds = milliseconds === 0 ? '.0' : '.' + milliseconds;

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}${milliseconds}`;
}

document.querySelectorAll('.gender-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const gender = this.getAttribute('data-gender');
        genderRadios.forEach(radio => {
            if (radio.value === gender) {
                radio.checked = true;
            }
        });
    });
});

document.getElementById('reset-btn').addEventListener('click', function() {
    document.getElementById('your-minutes').value = '';
    document.getElementById('your-seconds').value = '';
    
    genderRadios.forEach(radio => {
        radio.checked = false;
    });

    const result = document.getElementById('result');
    result.classList.remove('show');
    result.classList.add('hide');
    result.innerHTML = '<br><br> RESULTS WILL BE SHOWN HERE';
});

const elements = document.querySelectorAll('.tracker');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('view');
            observer.unobserve(entry.target); 
        }
    });
});


elements.forEach((element) => observer.observe(element));