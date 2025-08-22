// Video data structure - you can easily add your videos here
const videos = [
    {
        id: 1,
        type: "youtube",
        title: "We need to talk",
        thumbnail: "https://img.youtube.com/vi/lb-B2zi9DtY/maxresdefault.jpg",
        description: "A masterfully deceptive cinematic piece that feels like a genuine documentary before revealing itself as an advertisement.",
        reason: "What I love about this is how it manipulates viewer emotions through pure cinematography - it draws you in with documentary-style authenticity, then hits you with the reveal. The visual storytelling is so compelling that you forget you're watching an ad. Perfect example of how to use cinematic techniques to create emotional investment.",
        url: "https://www.youtube.com/watch?v=lb-B2zi9DtY"
    },
    {
        id: 2,
        type: "youtube",
        title: "Mastering Postgres hype video",
        thumbnail: "https://img.youtube.com/vi/moofRHEvCN0/maxresdefault.jpg",
        description: "Aaron Francis's behind-the-scenes look at creating his Postgres course, combining promotion with authentic process documentation.",
        reason: "I love how this feels like DVD bonus features - showing the real process behind creating something rather than just the polished end result. Aaron's authenticity shines through as he documents his journey, making the promotional aspect feel genuine and engaging. It's a masterclass in how to build anticipation by showing your work, not just selling it.",
        url: "https://www.youtube.com/watch?v=moofRHEvCN0"
    },
    {
        id: 3,
        type: "youtube",
        title: "2020 Founder's Fund Opening Video (Narration Version)",
        thumbnail: "https://img.youtube.com/vi/464eT8G3dRc/maxresdefault.jpg",
        description: "A supercut of inspirational clips spanning decades, blending historical and contemporary footage into a cohesive motivational narrative.",
        reason: "This is my go-to video when I need inspiration - the format is brilliant because it's nearly impossible to track down all the original source clips. The curation of old and new footage creates this timeless feeling that innovation and ambition transcend eras. It's the kind of video that rewards repeat viewing, which is why I find myself coming back to it constantly.",
        url: "https://www.youtube.com/watch?v=464eT8G3dRc"
    },
    {
        id: 4,
        type: "youtube",
        title: "The Website is Down",
        thumbnail: "https://img.youtube.com/vi/uRGljemfwUE/hqdefault.jpg",
        description: "A classic IT comedy sketch about a disastrous tech support call that cascades into multiple system failures, featuring incompetent sales staff and frustrated IT workers.",
        reason: "The over-the-shoulder perspective makes this feel incredibly authentic - like you're actually looking at someone's screen during a real disaster. It has that meme-like quality while staying grounded in realistic workplace chaos. The absurd humor works because the IT worker remains sympathetic even as everything spirals out of control around him, capturing the perfect storm of miscommunication and technical incompetence.",
        url: "https://www.youtube.com/watch?v=uRGljemfwUE"
    },
    {
        id: 5,
        type: "youtube",
        title: "Adam Neely - Reharmonizing Adele's \"Hello\"",
        thumbnail: "https://img.youtube.com/vi/fuqsEl_0nSg/maxresdefault.jpg",
        description: "Adam Neely breaks down his jazz reharmonization of Adele's \"Hello,\" explaining how different chord progressions can enhance a song's emotional storytelling through detailed music theory and live recording footage.",
        reason: "The perfect blend of technical depth and accessibility - Neely explains complex harmony concepts in plain English, then immediately lets you hear what he's talking about. Watching the actual recording process while understanding the 'why' behind each musical choice makes abstract theory concepts crystal clear. It's music education that speaks to both musicians and curious listeners.",
        url: "https://www.youtube.com/watch?v=fuqsEl_0nSg"
    },
    {
        id: 6,
        type: "youtube",
        title: "Jacob Collier Explains Music in 5 Levels of Difficulty ft. Herbie Hancock | WIRED",
        thumbnail: "https://img.youtube.com/vi/eRkgK4jfi6M/maxresdefault.jpg",
        description: "Jacob Collier explains the concept of harmony to 5 different people at increasing levels of complexity - from a child to jazz legend Herbie Hancock - demonstrating true mastery through adaptive teaching.",
        reason: "This perfectly demonstrates what real understanding looks like - the ability to break down complex concepts at multiple levels shows he truly gets it. By letting viewers check in at whatever level of complexity they're comfortable with, it makes sophisticated music theory accessible while still reaching expert depth. It's educational content that serves everyone simultaneously.",
        url: "https://www.youtube.com/watch?v=eRkgK4jfi6M"
    },
    {
        id: 7,
        type: "link",
        title: "Wat",
        thumbnail: "https://i.imgur.com/KDnr4c9.png",
        description: "Gary Bernhardt's legendary lightning talk exploring JavaScript's bizarre type coercion behaviors and other programming language quirks through rapid-fire examples.",
        reason: "A masterclass in technical comedy that manages to be both hilarious and educational. The rapid-fire delivery keeps you engaged while systematically exposing the absurdities in JavaScript's type system. It's the perfect blend of programming insight and entertainment that makes complex concepts memorable through humor.",
        url: "https://www.destroyallsoftware.com/talks/wat",
        videoUrl: "https://destroyallsoftware-talks.s3.amazonaws.com/wat.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIKRVCECXBC4ZGHIQ%2F20250822%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250822T094652Z&X-Amz-Expires=14400&X-Amz-SignedHeaders=host&X-Amz-Signature=1248eb254953a50fa34d1b259672677996ec5be83a129025eb9aa3375e54b9a6"
    },
    {
        id: 8,
        type: "youtube",
        title: "Creating Saturday Night Live: Control Room",
        thumbnail: "https://img.youtube.com/vi/KpAyaJuyN8s/maxresdefault.jpg",
        description: "Director Don Roy King and crew share how an episode goes from script to stage. Produced by Lorne Michaels, Oz Rodriguez, Matt Yonks, Chris Voss, Erin Doyle. Edited by Sean McIlraith.",
        reason: "A fascinating behind-the-scenes look at the organized chaos of live television production. Watching the control room orchestrate the complex dance of cameras, timing, and real-time decision-making reveals the incredible precision required to make live TV look effortless. It's a masterclass in high-pressure teamwork and technical execution.",
        url: "https://www.youtube.com/watch?v=KpAyaJuyN8s"
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
    // Set default type to youtube if not specified
    const video = {
        id: videos.length + 1,
        type: 'youtube',
        ...videoData
    };
    videos.push(video);
    renderVideos();
}

// Function to convert URLs to embed URLs based on type
function getEmbedUrl(video) {
    if (video.type === 'youtube') {
        const videoId = video.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
        return videoId ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1` : video.url;
    } else if (video.type === 'twitter') {
        // For Twitter, we'll handle this with a special case
        return 'twitter-embed';
    } else if (video.type === 'video') {
        // For direct video files, return the URL as-is
        return video.url;
    }
    return video.url;
}

// Function to open video modal
function openVideoModal(video) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalReason = document.getElementById('modal-reason');
    const modalVideoContainer = document.querySelector('.modal-video-container');
    
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
    
    if (video.type === 'twitter') {
        // For Twitter, create the embed HTML directly
        const tweetId = video.url.match(/(?:twitter\.com|x\.com)\/\w+\/status\/(\d+)/);
        if (tweetId) {
            modalVideoContainer.innerHTML = `
                <blockquote class="twitter-tweet" data-theme="light" data-width="100%">
                    <a href="${video.url}">Loading tweet...</a>
                </blockquote>
            `;
            
            // Load Twitter widgets script
            if (!document.querySelector('script[src*="platform.twitter.com"]')) {
                const script = document.createElement('script');
                script.src = 'https://platform.twitter.com/widgets.js';
                script.async = true;
                script.charset = 'utf-8';
                script.onload = () => {
                    if (window.twttr && window.twttr.widgets) {
                        window.twttr.widgets.load(modalVideoContainer);
                    }
                };
                document.head.appendChild(script);
            } else if (window.twttr && window.twttr.widgets) {
                window.twttr.widgets.load(modalVideoContainer);
            }
        }
    } else if (video.type === 'video') {
        // For direct video files, use HTML5 video element
        modalVideoContainer.innerHTML = `
            <video id="modal-video" controls autoplay style="width: 100%; height: 100%;">
                <source src="${video.url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (video.type === 'link') {
        // For link type, show a message with link to external page and embedded video if available
        modalVideoContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                ${video.videoUrl ? `
                    <video controls autoplay style="width: 100%; max-width: 800px; margin-bottom: 20px;">
                        <source src="${video.videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                ` : ''}
                <p style="margin-bottom: 20px;">This video is hosted externally.</p>
                <a href="${video.url}" target="_blank" rel="noopener noreferrer" 
                   style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Watch on Destroy All Software →
                </a>
            </div>
        `;
    } else {
        // For other video types (YouTube), use iframe
        modalVideo.src = getEmbedUrl(video);
    }
    
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
    const modalVideoContainer = document.querySelector('.modal-video-container');
    
    // Hide modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Stop video by clearing src and resetting container
    modalVideo.src = '';
    
    // Reset the video container to original iframe structure
    modalVideoContainer.innerHTML = '<iframe id="modal-video" src="" frameborder="0" allowfullscreen></iframe>';
    
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