export default function initTooltip() {

}

const tooltip = document.querySelectorAll('[data-tooltip]');

tooltip.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(item) {
    const tooltipbox = criarTooltip(this);
    tooltipbox.style.top = event.pageY + 'px';
    tooltipbox.style.left = event.pageX + 'px';

    onMouseleave.tooltipbox = tooltipbox;
    this.addEventListener('mouseleave', onMouseleave);
}

const onMouseleave = {
    tooltipbox: '',
    handleEvent(){
        this.tooltipbox.remove();
    }
}

function criarTooltip(event) {
    const tooltip = document.createElement('div');
    const text = event.target.getAttribute('arial-label');
    tooltip.classList.add('tooltip');
    tooltip.innerHTML = text;
    document.body.appendChild(tooltipbox);
    return tooltipbox;
}