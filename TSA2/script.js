function showShape(day) {
    const box = document.getElementById('shape');
    const colors = {
        'Monday': '#FF5733',
        'Tuesday': '#33FF57',
        'Wednesday': '#3357FF',
        'Thursday': '#F39C12',
        'Friday': '#8E44AD',
        'Saturday': '#16A085',
        'Sunday': '#E74C3C'
    };
    box.style.display = 'block';
    box.style.top = '-200px';
    box.style.backgroundColor = colors[day];
    box.style.transform = 'scale(0.5)';
    animateBox(box);
}

function animateBox(box) {
    setTimeout(() => {
        box.style.top = '250px';
        box.style.transform = 'scale(1.2)';
    }, 100);
}
