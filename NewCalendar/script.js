const date = new Date();


const reander = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(date.getFullYear(),
    date.getMonth() +1, 0).getDate();

    const firstDayIndex = date.getDay();

    const prevLastDay = new Date(date.getFullYear(),
    date.getMonth(), 0).getDate();

    const lastDayIndex = new Date(date.getFullYear(),
    date.getMonth() +1,0).getDay();

    const nextDays = 7-lastDayIndex - 1;

    const g = new Date(date.getFullYear(),
    date.getMonth(),0).getDay()



    const months = [
        "January", 
        "February", 
        "March", 
        "April", 
        "May", 
        "June", 
        "July", 
        "August", 
        "September", 
        "October", 
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = date.toDateString();

    let days = "";

    // for(let j = firstDayIndex; j > 0; j--){
    //     days += `<div class="prev-date">${prevLastDay - j}</div>`;
    // }
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
      }

    for(let i=1; i<=lastDay; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        }else{
            days += `<div>${i}</div>`;
        }

    }

    for(let k=1; k <= nextDays; k++){
        days += `<div class="next-date">${k}</div>`;
    }
        monthDays.innerHTML = days

}







document.querySelector(".prev").addEventListener('click', () => {
    date.setMonth(date.getMonth()-1);
    reander();
})

document.querySelector(".next").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    reander();
})

reander();