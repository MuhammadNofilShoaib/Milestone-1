var _a;
(_a = document.getElementById('toggleSkills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsContent = document.getElementById('skillsContent');
    if (skillsContent) {
        // program for show/hide button for skills.
        if (skillsContent.classList.contains('show')) {
            skillsContent.classList.remove('show');
            skillsContent.classList.add('hide');
        }
        else {
            skillsContent.classList.remove('hide');
            skillsContent.classList.add('show');
        }
    }
});
