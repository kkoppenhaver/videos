// Video data structure - you can easily add your videos here
const videos = [
    {
        id: 1,
        title: "We need to talk",
        thumbnail: "https://img.youtube.com/vi/lb-B2zi9DtY/maxresdefault.jpg",
        description: "A masterfully deceptive cinematic piece that feels like a genuine documentary before revealing itself as an advertisement.",
        reason: "What I love about this is how it manipulates viewer emotions through pure cinematography - it draws you in with documentary-style authenticity, then hits you with the reveal. The visual storytelling is so compelling that you forget you're watching an ad. Perfect example of how to use cinematic techniques to create emotional investment.",
        url: "https://www.youtube.com/watch?v=lb-B2zi9DtY"
    },
    {
        id: 2,
        title: "Mastering Postgres hype video",
        thumbnail: "https://img.youtube.com/vi/moofRHEvCN0/maxresdefault.jpg",
        description: "Aaron Francis's behind-the-scenes look at creating his Postgres course, combining promotion with authentic process documentation.",
        reason: "I love how this feels like DVD bonus features - showing the real process behind creating something rather than just the polished end result. Aaron's authenticity shines through as he documents his journey, making the promotional aspect feel genuine and engaging. It's a masterclass in how to build anticipation by showing your work, not just selling it.",
        url: "https://www.youtube.com/watch?v=moofRHEvCN0"
    },
    {
        id: 3,
        title: "2020 Founder's Fund Opening Video (Narration Version)",
        thumbnail: "https://img.youtube.com/vi/464eT8G3dRc/maxresdefault.jpg",
        description: "The same inspiring content with a specific narrative approach that adds another layer of engagement.",
        reason: "The narration style here creates an even more specific vibe and emotional connection. It shows how voice and delivery can completely transform the feel of content while maintaining the core message.",
        url: "https://www.youtube.com/watch?v=464eT8G3dRc"
    }
];

// Function to create a video card element
function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
            <div class="play-button">▶</div>
        </div>
        <div class="video-content">
            <h3 class="video-title">${video.title}</h3>
            <p class="video-description">${video.description}</p>
            <div class="video-reason">${video.reason}</div>
        </div>
    `;
    
    // Add click event to open video in modal
    card.addEventListener('click', () => {
        openVideoModal(video);
    });
    
    return card;
}

// Function to render all videos
function renderVideos() {
    const videoGrid = document.getElementById('video-grid');
    
    if (!videoGrid) {
        console.error('Video grid container not found');
        return;
    }
    
    // Clear existing content
    videoGrid.innerHTML = '';
    
    // Create and append video cards
    videos.forEach(video => {
        const card = createVideoCard(video);
        videoGrid.appendChild(card);
    });
}

// Function to add a new video (for future use)
function addVideo(videoData) {
    videos.push({
        id: videos.length + 1,
        ...videoData
    });
    renderVideos();
}

// Function to convert YouTube URL to embed URL
function getYouTubeEmbedUrl(url) {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1` : url;
}

// Function to open video modal
function openVideoModal(video) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalReason = document.getElementById('modal-reason');
    
    console.log('Opening modal for video:', video);
    console.log('Modal elements found:', {
        modal: !!modal,
        modalVideo: !!modalVideo,
        modalTitle: !!modalTitle,
        modalDescription: !!modalDescription,
        modalReason: !!modalReason
    });
    
    // Set modal content
    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;
    modalReason.textContent = video.reason;
    modalVideo.src = getYouTubeEmbedUrl(video.url);
    
    console.log('Modal content set:', {
        title: video.title,
        description: video.description,
        reason: video.reason
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus on modal to ensure it can capture keyboard events
    modal.focus();
    
    // Add direct keydown listener to modal for escape key
    const handleModalKeydown = (e) => {
        if (e.key === 'Escape') {
            closeVideoModal();
        }
    };
    modal.addEventListener('keydown', handleModalKeydown);
    
    // Periodically refocus on modal to handle iframe focus stealing
    const focusInterval = setInterval(() => {
        if (modal.style.display === 'block') {
            modal.focus();
        } else {
            clearInterval(focusInterval);
        }
    }, 1000); // Check every second
    
    // Store the handler and interval so we can clean them up later
    modal._escapeHandler = handleModalKeydown;
    modal._focusInterval = focusInterval;
}

// Function to close video modal
function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    
    // Hide modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Stop video by clearing src
    modalVideo.src = '';
    
    // Clean up the modal keydown listener and focus interval
    if (modal._escapeHandler) {
        modal.removeEventListener('keydown', modal._escapeHandler);
        modal._escapeHandler = null;
    }
    if (modal._focusInterval) {
        clearInterval(modal._focusInterval);
        modal._focusInterval = null;
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
    
    // Add modal event listeners
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close');
    
    // Close modal when clicking X button
    closeBtn.addEventListener('click', closeVideoModal);
    
    // Close modal when clicking outside of modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVideoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modal = document.getElementById('video-modal');
            const computedStyle = window.getComputedStyle(modal);
            if (computedStyle.display !== 'none') {
                closeVideoModal();
            }
        }
    });
});

// Export functions for potential future use
window.videoApp = {
    addVideo,
    renderVideos,
    videos,
    openVideoModal,
    closeVideoModal
};