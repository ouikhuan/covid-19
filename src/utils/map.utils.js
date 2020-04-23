export const getScaleAndColorByNumber = (number) => {

    let scale, color;
    switch (true) {
        case (number >= 1 && number <= 5000):
            scale = 5;
            color = '#ffc34d';
            break;
        case (number > 5000 && number <= 10000):
            scale = 10;
            color = '#f7ce90';
            break;
        case (number > 10000 && number <= 100000):
            scale = 20;
            color = '#f58c41';
            break;
        case (number > 100000 && number <= 200000):
            scale = 30;
            color = '#f5812f';
            break;
        case (number > 200000 && number <= 300000):
            scale = 40;
            color = '#f58434';
            break;
        case (number > 300000 && number <= 400000):
            scale = 50;
            color = '#f59029';
            break;
        case (number > 400000 && number <= 500000):
            scale = 60;
            color = '#fb821b';
            break;
        case (number > 500000 && number <= 600000):
            scale = 70;
            color = '#fb6e1b';
            break;
        case (number >= 600000):
            scale = 90;
            color = '#ff6328';
            break;
        default:
            scale=0;
            color='';
            break;
    }

    return {
        scale,
        color
    }
}