document.getElementById('toggleSkills')?.addEventListener('click', () => {
    const skillsContent = document.getElementById('skillsContent');
    if (skillsContent) {
        // program for show/hide button for skills.
        if (skillsContent.classList.contains('show')) {
            skillsContent.classList.remove('show');
            skillsContent.classList.add('hide');
        } else {
            skillsContent.classList.remove('hide');
            skillsContent.classList.add('show');
        }
    }
});
