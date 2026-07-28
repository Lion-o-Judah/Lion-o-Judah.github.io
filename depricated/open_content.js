function toggleContent(label) {
    const expandable = label.parentElement;
    const content = expandable.querySelector('.section-content');
    const arrow = label.querySelector('.arrow');

    expandable.classList.toggle('active');
    if (expandable.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrow.style.transform = 'rotate(-90deg)';
    } else {
        content.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
    }
}