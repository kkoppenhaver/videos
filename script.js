// Video data structure - you can easily add your videos here
const videos = [
    {
        id: 1,
        title: "We need to talk",
        thumbnail: "https://img.youtube.com/vi/lb-B2zi9DtY/maxresdefault.jpg",
        description: "A cinematic commercial that showcases masterful storytelling and visual composition in just 7 minutes.",
        reason: "This video demonstrates how to create compelling narrative tension and emotional impact in a short format. The cinematography and pacing are exceptional examples for video creation.",
        url: "https://www.youtube.com/watch?v=lb-B2zi9DtY"
    },
    {
        id: 2,
        title: "Mastering Postgres hype video",
        thumbnail: "https://img.youtube.com/vi/moofRHEvCN0/maxresdefault.jpg",
        description: "An energetic course launch announcement that builds excitement and clearly communicates value proposition.",
        reason: "Perfect example of how to create hype and anticipation for educational content. The energy and clear messaging make technical topics feel exciting and accessible.",
        url: "https://www.youtube.com/watch?v=moofRHEvCN0"
    },
    {
        id: 3,
        title: "2020 Founder's Fund Opening Video",
        thumbnail: "https://img.youtube.com/vi/Gvf547kGOXs/maxresdefault.jpg",
        description: "A motivational and inspiring video that captures the entrepreneurial spirit and vision for the future.",
        reason: "The way this video builds inspiration and motivation is incredible. It perfectly balances ambition with authenticity, creating a compelling vision that feels both grand and achievable.",
        url: "https://www.youtube.com/watch?v=Gvf547kGOXs"
    },
    {
        id: 4,
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
    
    // Set modal content
    modalTitle.textContent = video.title;
    modalDescription.textContent = video.description;
    modalReason.textContent = video.reason;
    modalVideo.src = getYouTubeEmbedUrl(video.url);
    
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