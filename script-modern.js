// ==========================================
// Modern Green Care - Enhanced Interactions v2.0
// ==========================================

// Utility: Debounce function
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ==========================================
// 1. Enhanced Header Scroll Effects
// ==========================================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', debounce(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
    } else {
        header.classList.add('scrolled');
    }
    
    // Hide/Show header on scroll
    if (currentScroll > lastScroll && currentScroll > 500) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
}, 10));

// ==========================================
// 2. Advanced Parallax Effects
// ==========================================
const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', debounce(() => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    // Hero background parallax
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.6}px)`;
        heroBackground.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
}, 10));

// ==========================================
// 3. Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Stagger animations for children
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.problem-card, .feature-item, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    animateOnScroll.observe(el);
});

// ==========================================
// 4. Counter Animation for Stats
// ==========================================
const animateCounter = (element, target, duration = 2000, suffix = '') => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 16);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                let number = parseInt(text.replace(/[^0-9]/g, ''));
                const suffix = text.replace(/[0-9,]/g, '');
                
                if (!isNaN(number)) {
                    stat.textContent = '0';
                    setTimeout(() => {
                        animateCounter(stat, number, 2000, suffix);
                    }, 300);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==========================================
// 5. 3D Tilt Effect for Cards
// ==========================================
const tiltCards = document.querySelectorAll('.problem-card, .pricing-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==========================================
// 6. Magnetic Button Effect
// ==========================================
const magneticButtons = document.querySelectorAll('.btn');

magneticButtons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 50;
        
        if (distance < maxDistance) {
            const pullStrength = (maxDistance - distance) / maxDistance;
            const pullX = x * pullStrength * 0.3;
            const pullY = y * pullStrength * 0.3;
            
            button.style.transform = `translate(${pullX}px, ${pullY}px)`;
        }
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// ==========================================
// 7. Smooth Scroll with Animation
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// 8. Cursor Trail Effect
// ==========================================
const createCursorTrail = () => {
    const trail = [];
    const trailLength = 20;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: ${8 - i * 0.3}px;
            height: ${8 - i * 0.3}px;
            background: rgba(46, 204, 113, ${1 - i / trailLength});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease-out;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animateTrail = () => {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        
        trail.forEach((dot, index) => {
            const nextDot = trail[index - 1] || { offsetLeft: currentX, offsetTop: currentY };
            
            dot.style.left = nextDot.offsetLeft + 'px';
            dot.style.top = nextDot.offsetTop + 'px';
            
            if (index === 0) {
                dot.style.left = currentX + 'px';
                dot.style.top = currentY + 'px';
            }
        });
        
        requestAnimationFrame(animateTrail);
    };
    
    animateTrail();
};

// Only enable cursor trail on desktop
if (window.innerWidth > 1024) {
    createCursorTrail();
}

// ==========================================
// 9. Phone Mockup Interactive Rotation
// ==========================================
const phoneMockup = document.querySelector('.phone-mockup');

if (phoneMockup) {
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        const phoneSection = phoneMockup.closest('section');
        
        if (phoneSection) {
            const sectionTop = phoneSection.offsetTop;
            const sectionHeight = phoneSection.offsetHeight;
            const scrollProgress = (scrolled - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight);
            
            if (scrollProgress > 0 && scrollProgress < 1) {
                const rotation = (scrollProgress - 0.5) * 20;
                phoneMockup.style.transform = `translateY(${Math.sin(scrollProgress * Math.PI) * -30}px) rotateY(${rotation}deg)`;
            }
        }
    }, 10));
}

// ==========================================
// 10. Advanced Ripple Effect
// ==========================================
const createAdvancedRipple = (event, button) => {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
};

// Add ripple to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    
    button.addEventListener('click', function(e) {
        createAdvancedRipple(e, this);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(1);
            opacity: 0;
        }
    }
    
    .animated {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ==========================================
// 11. Scroll Progress Indicator
// ==========================================
const createScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #2D5F3F 0%, #2ECC71 100%);
        z-index: 10000;
        transition: width 0.1s ease-out;
        box-shadow: 0 0 10px rgba(46, 204, 113, 0.5);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', debounce(() => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }, 10));
};

createScrollProgress();

// ==========================================
// 12. Chat Messages Animation
// ==========================================
const chatMessages = document.querySelectorAll('.message');
let messageDelay = 0;

chatMessages.forEach((message, index) => {
    message.style.opacity = '0';
    message.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        message.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        message.style.opacity = '1';
        message.style.transform = 'translateY(0)';
    }, 500 + (index * 300));
});

// ==========================================
// 13. Feature Icons Hover Animation
// ==========================================
document.querySelectorAll('.feature-icon-large, .problem-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'iconBounce 0.6s ease-in-out';
    });
    
    icon.addEventListener('animationend', () => {
        icon.style.animation = '';
    });
});

const iconBounceStyle = document.createElement('style');
iconBounceStyle.textContent = `
    @keyframes iconBounce {
        0%, 100% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.1) rotate(-5deg); }
        50% { transform: scale(1.15) rotate(5deg); }
        75% { transform: scale(1.1) rotate(-5deg); }
    }
`;
document.head.appendChild(iconBounceStyle);

// ==========================================
// 14. Mobile Menu Enhancement
// ==========================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Animate menu items
        if (navMenu.classList.contains('active')) {
            const menuItems = navMenu.querySelectorAll('li');
            menuItems.forEach((item, index) => {
                item.style.animation = `slideInFromRight 0.5s ease-out ${index * 0.1}s forwards`;
            });
        }
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

const slideInStyle = document.createElement('style');
slideInStyle.textContent = `
    @keyframes slideInFromRight {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        padding: 2rem;
        gap: 1.5rem;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        animation: fadeIn 0.3s ease-out;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
    
    body.menu-open {
        overflow: hidden;
    }
`;
document.head.appendChild(slideInStyle);

// ==========================================
// 15. Lazy Load Images Enhancement
// ==========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// 16. Performance Optimization
// ==========================================
// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}

// ==========================================
// Console Welcome Message
// ==========================================
console.log('%c🌱 Green Care - Modern Edition', 'color: #2ECC71; font-size: 20px; font-weight: bold;');
console.log('%cWebsite loaded successfully with enhanced interactions!', 'color: #2D5F3F; font-size: 12px;');
console.log('%cDesigned with ❤️ for plant lovers', 'color: #4A7C59; font-size: 10px;');

// ==========================================
// Ready State
// ==========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelector('.hero-content')?.classList.add('animated');
    }, 100);
});
