// ===== SIDEBAR NAVIGATION WITH COLOR CODING (UPDATED) =====
function updateSidebarCourses() {
    const sidebarNav = document.getElementById('sidebar-nav');
    if (!sidebarNav) return;
    
    const courses = Object.values(coursesData);
    
    sidebarNav.innerHTML = courses.map(course => {
        const isActive = currentCourseId === course.id ? 'active' : '';
        let navItemHTML = `<div class="nav-item ${isActive}" onclick="handleCourseNavClick('${course.id}')"`;
        
        // Apply inline styles for language courses - COLOR THE TEXT
        let textColor = '#fff';
        let borderColor = 'transparent';
        
        if (course.id === 'html-course') {
            textColor = '#E34C26';
            borderColor = '#E34C26';
        } else if (course.id === 'javascript-course') {
            textColor = '#F7DF1E';
            borderColor = '#F7DF1E';
        } else if (course.id === 'css-course') {
            textColor = '#1572B6';
            borderColor = '#1572B6';
        }
        
        navItemHTML += ` style="border-left-color: ${borderColor};">
            <div class="nav-category" style="color: ${textColor};">${course.category}</div>
            <div class="nav-name" style="color: ${textColor};">${escapeHtml(course.name)}</div>
        </div>`;
        
        return navItemHTML;
    }).join('');
}

// ===== CONFIRM EXIT COURSE (UPDATED) =====
function confirmExitCourse() {
    if (!quizInProgress && !currentPlayerName) {
        // No name entered - go to name entry
        showNameEntryScreen();
        return;
    }
    
    if (!quizInProgress) {
        // Name entered, not in quiz - show main page confirmation
        document.getElementById('main-page-exit-modal').style.display = 'flex';
        return;
    }
    
    // Logo click when in quiz - show exit confirmation
    const courseName = coursesData[currentCourseId].name;
    document.querySelector('#exit-course-modal .modal-body p:first-child').textContent = `You are exiting "${courseName}" course - Continue?`;
    document.getElementById('exit-course-modal').style.display = 'flex';
    window.pendingCourseId = '';
}

function closeCourseExitModal() {
    document.getElementById('exit-course-modal').style.display = 'none';
    window.pendingCourseId = '';
}

function closeMainPageExitModal() {
    document.getElementById('main-page-exit-modal').style.display = 'none';
}

function exitCourse() {
    quizInProgress = false;
    answered = false;
    currentQuestionIndex = 0;
    currentSessionScore = 0;
    
    const pendingCourseId = window.pendingCourseId;
    closeCourseExitModal();
    
    if (pendingCourseId === '') {
        // Refresh page to exit course
        location.reload();
    } else {
        // Switching to another course
        currentCourseId = pendingCourseId;
        updateUserInfo();
        updateSidebarCourses();
        showCourseSelection();
    }
}

function confirmMainPageExit() {
    currentPlayerName = '';
    currentCourseId = '';
    closeMainPageExitModal();
    showNameEntryScreen();
}

// ===== SHOW COURSE SELECTION (UPDATED WITH EXIT BUTTON) =====
function showCourseSelection() {
    const contentArea = document.getElementById('content-area');
    
    if (!currentCourseId) {
        // Show all courses
        const courses = Object.values(coursesData);
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 Select Your Course</h2>
                <div class="courses-grid">
                    ${courses.map(course => `
                        <div class="course-card" onclick="startCourse('${course.id}')">
                            <span class="course-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                            <h3 class="course-title">${escapeHtml(course.name)}</h3>
                            <p class="course-description">${escapeHtml(course.description)}</p>
                            <div class="course-info">
                                <div class="info-item">📝 ${course.questions.length} questions</div>
                            </div>
                            <button class="btn-start-course">Start Course</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        // Show selected course WITH EXIT BUTTON
        const course = coursesData[currentCourseId];
        contentArea.innerHTML = `
            <div class="course-selection-screen">
                <h2>📚 ${escapeHtml(course.name)}</h2>
                <div class="courses-grid">
                    <div class="course-card">
                        <span class="course-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                        <h3 class="course-title">${escapeHtml(course.name)}</h3>
                        <p class="course-description">${escapeHtml(course.description)}</p>
                        <div class="course-info">
                            <div class="info-item">📝 ${course.questions.length} questions</div>
                        </div>
                        <button class="btn-start-course" onclick="startCourse('${course.id}')">Start Quiz</button>
                        <button class="btn-start-course" style="margin-top: 10px; background: #0369a1;" onclick="backToCourseSelection()">← Back to Courses</button>
                        <button class="btn-start-course" style="margin-top: 10px; background: #dc2626;" onclick="exitCourseSelection()">❌ Exit Course</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    document.getElementById('breadcrumb-course').textContent = currentCourseId ? coursesData[currentCourseId].name : 'Courses';
    document.getElementById('lesson-title').textContent = 'Select';
}

function backToCourseSelection() {
    currentCourseId = '';
    updateUserInfo();
    updateSidebarCourses();
    showCourseSelection();
}

function exitCourseSelection() {
    currentCourseId = '';
    currentPlayerName = '';
    updateUserInfo();
    updateSidebarCourses();
    showNameEntryScreen();
}
