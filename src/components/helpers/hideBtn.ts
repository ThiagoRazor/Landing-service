
export const hideButton = () => {
    let button = document.getElementById('topButton') as HTMLButtonElement;
    if (window.pageYOffset <= 300) {
        button.style.display = 'none';

    } else {
        button.style.display = 'block';
    }
}