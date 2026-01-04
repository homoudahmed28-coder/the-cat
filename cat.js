document.addEventListener('DOMContentLoaded', (event) => {
    const toggleHeaders = document.querySelectorAll('.toggle-header');

    toggleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('hidden');
            header.classList.toggle('h3-collapsed');
        });
    });
})
