// ===== SHOW COURSE SELECTION (UPDATED) =====
function showCourseSelection() {
    const contentArea = document.getElementById('content-area');
    
    if (!currentCourseId) {
        // Show all courses
        const courses = Object.values(coursesData);
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 Select Your Course</h2>
                <div class="courses-grid">
                    ${courses.map(course => {
                        let badgeClass = course.difficulty.toLowerCase();
                        let cardClass = '';
                        let titleClass = '';
                        let badgeHTML = '';
                        
                        // Add language-specific styling
                        if (course.id === 'html-course') {
                            badgeClass = 'html';
                            cardClass = ' html-course';
                            titleClass = ' html-title';
                            badgeHTML = `<span style="color: #E34C26; font-size: 1.3em;">📄</span>`;
                        } else if (course.id === 'javascript-course') {
                            badgeClass = 'javascript';
                            cardClass = ' javascript-course';
                            titleClass = ' javascript-title';
                            badgeHTML = `<span style="color: #F7DF1E; font-size: 1.3em;">⚡</span>`;
                        } else if (course.id === 'css-course') {
                            badgeClass = 'css';
                            cardClass = ' css-course';
                            titleClass = ' css-title';
                            badgeHTML = `<span style="color: #1572B6; font-size: 1.3em;">🎨</span>`;
                        }
                        
                        return `
                            <div class="course-card${cardClass}" onclick="startCourse('${course.id}')">
                                ${badgeHTML}
                                <span class="course-badge ${badgeClass}">${course.difficulty}</span>
                                <h3 class="course-title${titleClass}">${escapeHtml(course.name)}</h3>
                                <p class="course-description">${escapeHtml(course.description)}</p>
                                <div class="course-info">
                                    <div class="info-item">📝 ${course.questions.length} questions</div>
                                </div>
                                <button class="btn-start-course">Start Course</button>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else {
        // Show selected course
        const course = coursesData[currentCourseId];
        let badgeClass = course.difficulty.toLowerCase();
        let cardClass = '';
        let titleClass = '';
        let badgeHTML = '';
        
        if (currentCourseId === 'html-course') {
            badgeClass = 'html';
            cardClass = ' html-course';
            titleClass = ' html-title';
            badgeHTML = `<span style="color: #E34C26; font-size: 1.3em;">📄</span>`;
        } else if (currentCourseId === 'javascript-course') {
            badgeClass = 'javascript';
            cardClass = ' javascript-course';
            titleClass = ' javascript-title';
            badgeHTML = `<span style="color: #F7DF1E; font-size: 1.3em;">⚡</span>`;
        } else if (currentCourseId === 'css-course') {
            badgeClass = 'css';
            cardClass = ' css-course';
            titleClass = ' css-title';
            badgeHTML = `<span style="color: #1572B6; font-size: 1.3em;">🎨</span>`;
        }
        
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 ${escapeHtml(course.name)}</h2>
                <div class="courses-grid">
                    <div class="course-card${cardClass}">
                        ${badgeHTML}
                        <span class="course-badge ${badgeClass}">${course.difficulty}</span>
                        <h3 class="course-title${titleClass}">${escapeHtml(course.name)}</h3>
                        <p class="course-description">${escapeHtml(course.description)}</p>
                        <div class="course-info">
                            <div class="info-item">📝 ${course.questions.length} questions</div>
                        </div>
                        <button class="btn-start-course" onclick="startCourse('${course.id}')">Start Quiz</button>
                        <button class="btn-start-course" style="margin-top: 10px; background: #999;" onclick="backToCourseSelection()">← Back</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('breadcrumb-course').textContent = currentCourseId ? coursesData[currentCourseId].name : 'Courses';
    document.getElementById('lesson-title').textContent = 'Select';
}
