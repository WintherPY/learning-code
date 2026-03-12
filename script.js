// ===== SIDEBAR NAVIGATION WITH COLOR CODING =====
function updateSidebarCourses() {
    const sidebarNav = document.getElementById('sidebar-nav');
    if (!sidebarNav) return;
    
    const courses = Object.values(coursesData);
    
    sidebarNav.innerHTML = courses.map(course => {
        const isActive = currentCourseId === course.id ? 'active' : '';
        
        // Determine color and styling based on course
        let bgColor = '#333';
        let borderColor = '#555';
        let hoverBgColor = 'rgba(255, 255, 255, 0.1)';
        
        if (course.id === 'html-course') {
            bgColor = 'rgba(227, 76, 38, 0.15)';
            borderColor = '#E34C26';
            hoverBgColor = 'rgba(227, 76, 38, 0.25)';
        } else if (course.id === 'javascript-course') {
            bgColor = 'rgba(247, 223, 30, 0.15)';
            borderColor = '#F7DF1E';
            hoverBgColor = 'rgba(247, 223, 30, 0.25)';
        } else if (course.id === 'css-course') {
            bgColor = 'rgba(21, 114, 182, 0.15)';
            borderColor = '#1572B6';
            hoverBgColor = 'rgba(21, 114, 182, 0.25)';
        }
        
        const activeStyle = isActive ? `background: ${bgColor} !important; border-left: 3px solid ${borderColor};` : '';
        
        return `
            <div class="nav-item ${isActive}" 
                 onclick="handleCourseNavClick('${course.id}')"
                 style="
                     border-left: 3px solid transparent;
                     ${activeStyle}
                 "
                 onmouseover="this.style.borderLeftColor='${borderColor}'; this.style.background='${hoverBgColor}';"
                 onmouseout="this.style.borderLeftColor='${isActive ? borderColor : 'transparent'}'; this.style.background='${isActive ? bgColor : 'transparent'}';">
                <div class="nav-category" style="color: ${isActive ? borderColor : '#999'};">${course.category}</div>
                <div class="nav-name" style="color: ${isActive ? borderColor : '#fff'};">${escapeHtml(course.name)}</div>
            </div>
        `;
    }).join('');
}
