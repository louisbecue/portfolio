document.addEventListener("DOMContentLoaded", function() {
    function applyGarlandEffect() {
        const skills = document.querySelectorAll('.skills-list .skill');
        let index = 0;

        function highlightSkill() {
            skills.forEach(skill => {
                skill.style.opacity = '1';
                skill.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
                skill.style.transform = 'none';
                skill.style.boxShadow = 'none';
            });

            if (index < skills.length) {
                skills[index].style.boxShadow = '0 0 20px rgba(255, 255, 255, 1)';
                skills[index].style.transform = 'scale(1.1)';
                if (index > 0) {
                    skills[index - 1].style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
                }
                if (index < skills.length - 1) {
                    skills[index + 1].style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
                }
                setTimeout(() => {
                    skills[index].style.boxShadow = 'none';
                    skills[index].style.transform = 'none';
                    if (index > 0) {
                        skills[index - 1].style.boxShadow = 'none';
                    }
                    if (index < skills.length - 1) {
                        skills[index + 1].style.boxShadow = 'none';
                    }
                }, 500);
                index++;
            } else {
                index = 0;
            }
        }

        setInterval(highlightSkill, 300);
        highlightSkill();
    }

    applyGarlandEffect();
});