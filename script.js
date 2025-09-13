// Video data structure - you can easily add your videos here
const videos = [
    {
        id: 1,
        type: "youtube",
        title: "Mastering Postgres hype video",
        thumbnail: "https://img.youtube.com/vi/moofRHEvCN0/maxresdefault.jpg",
        description: "Another ad, this time for a database course, but done in a way where you can't help root for the protaganist.",
        reason: "Again, an ad where you get invested, this time in Aaron creating the course. It's not an ad that shouts at you about what's in the course, but that's revealed in a way that's authentic through the course of the ad. It has his individual personality in it, which is a big reason his courses do as well as they do. Here he shows his work and it pays off.",
        url: "https://www.youtube.com/watch?v=moofRHEvCN0"
    },
    {
        id: 2,
        type: "youtube",
        title: "2020 Founder's Fund Opening Video (Narration Version)",
        thumbnail: "https://img.youtube.com/vi/464eT8G3dRc/maxresdefault.jpg",
        description: "A supercut of inspirational clips spanning decades, blending historical and contemporary footage into a cohesive motivational narrative.",
        reason: "I really love this format. It's equal parts nostalgia and inspiration. The age of the clips remind people of everything that's come before, with the voiceover inspiring people to dream bigger for the future. I like this one not as much for the content (or the narrator), but more for the general vibe.",
        url: "https://www.youtube.com/watch?v=464eT8G3dRc"
    },
    {
        id: 3,
        type: "youtube",
        title: "Adam Neely - Reharmonizing Adele's \"Hello\"",
        thumbnail: "https://img.youtube.com/vi/fuqsEl_0nSg/maxresdefault.jpg",
        description: "Adam Neely completely reharmonizes Adele's \"Hello,\", explaining how different chord progressions can enhance a song's emotional storytelling through detailed music theory and live recording footage.",
        reason: "To me, this is the perfect blend of technical depth and accessibility. The combination of theory in the studio and hearing that theory in practice is paced just right to keep you both learning and applying that knowledge almost instantly and lets you appreciate the end product even more.",
        url: "https://www.youtube.com/watch?v=fuqsEl_0nSg"
    },
    {
        id: 4,
        type: "youtube",
        title: "Jacob Collier Explains Music in 5 Levels of Difficulty ft. Herbie Hancock | WIRED",
        thumbnail: "https://img.youtube.com/vi/eRkgK4jfi6M/maxresdefault.jpg",
        description: "Jacob Collier explains the concept of harmony to 5 different people at increasing levels of complexity - from a child to jazz legend Herbie Hancock - demonstrating true mastery through adaptive teaching.",
        reason: "This perfectly demonstrates what real understanding looks like. I don't see a ton of this in videos where you can choose your own adventure like this, but it's a good way to make sure that knowledge sticks.",
        url: "https://www.youtube.com/watch?v=eRkgK4jfi6M"
    },
    {
        id: 5,
        type: "link",
        title: "Wat",
        thumbnail: "https://i.imgur.com/KDnr4c9.png",
        description: "Gary Bernhardt's legendary lightning talk exploring JavaScript's bizarre type coercion behaviors and other programming language quirks through rapid-fire examples.",
        reason: "I love talks that combine humor and learning and this definitely does. The pace is perfect, even though it's so short and you can feel how the timings land. It's probably one of my most shared videos and definitely an inspiration as I'm putting together my talks.",
        url: "https://www.destroyallsoftware.com/talks/wat",
        videoUrl: "https://destroyallsoftware-talks.s3.amazonaws.com/wat.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIKRVCECXBC4ZGHIQ%2F20250822%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250822T094652Z&X-Amz-Expires=14400&X-Amz-SignedHeaders=host&X-Amz-Signature=1248eb254953a50fa34d1b259672677996ec5be83a129025eb9aa3375e54b9a6"
    },
    {
        id: 6,
        type: "youtube",
        title: "Creating Saturday Night Live: Control Room",
        thumbnail: "https://img.youtube.com/vi/KpAyaJuyN8s/maxresdefault.jpg",
        description: "Director Don Roy King and crew share how an episode goes from script to stage, in just one week.",
        reason: "I've always really enjoyed the format of SNL and the idea that an entire show comes together in a week, every week. This is an amazing behind the scenes look at everything that it takes to make that happen. Imagine a launch announcement video that showed all the behind the scenes magic it took to make it happen.",
        url: "https://www.youtube.com/watch?v=KpAyaJuyN8s"
    },
    {
        id: 7,
        type: "youtube",
        title: "Jon Bellion - Behind the Scenes of 'Guillotine'",
        thumbnail: "https://img.youtube.com/vi/TGO-CAImUeY/maxresdefault.jpg",
        description: "Jon Bellion takes viewers behind the scenes of creating his song 'Guillotine,' showing the creative process from conception to completion.",
        reason: "As this list shows, I'm a big fan of behind the scenes content. I think a look into the mind of someone who creates something, especially in this sort of informal format, tells you a lot as someone who wants to create something similar. And the authenticity and vulnerability helps you connect with the creator as a person.",
        url: "https://www.youtube.com/watch?v=TGO-CAImUeY"
    },
    {
        id: 8,
        type: "youtube",
        title: "The Perfect PokéRap | Unraveled LIVE at PAX East 2019",
        thumbnail: "https://img.youtube.com/vi/2cT6ULpScZA/maxresdefault.jpg",
        description: "At PAX East 2019, Brian David Gilbert revealed his magnum opus: the perfect PokéRap. It has every Pokémon, is emotionally vulnerable, and includes interpretive dance. What more could you want?",
        reason: "A masterclass in conference presentation that goes far beyond the title topic. BDG combines meticulous research, emotional storytelling, and physical performance to create something that I've never been able to forget. I try to remember it when putting together a talk and deciding what type of hook or overarching story it can tell while it educates.",
        url: "https://www.youtube.com/watch?v=2cT6ULpScZA"
    },
    {
        id: 9,
        type: "youtube",
        title: "6 Days To Air: The Making Of South Park",
        thumbnail: "https://img.youtube.com/vi/hU83PE68oNY/hqdefault.jpg",
        description: "Let's go down to South Park Studios and find out how Trey Parker and Matt Stone make half hour episodes in just a week before airing.",
        reason: "Similar to the SNL clip, it's insane to me that some folks can have this kind of creativity on a deadline. I really enjoy that it also reveals some of the things that needed to be compromised on to hit that deadline.",
        url: "https://www.youtube.com/watch?v=hU83PE68oNY"
    },
    {
        id: 10,
        type: "youtube",
        title: "Experienced Keyboardist Hears Popular Song for the First Time",
        thumbnail: "https://img.youtube.com/vi/5WJ1PUHfozI/hqdefault.jpg",
        description: "An experienced keyboard player hearing a popular song for the first time has to make up a keyboard part given his expertise, creating a completely different arrangement from the original.",
        reason: "I love seeing true professionals show off a skill that doesn't seem all the difficult on the surface, but the more you know about it, the more you appreciate about it. Again, this is a look into the creator's process and how they think about what they're creating, in a very unique way. I also really like the pacing of these videos, where they show you enough detail for you to understand, but it doesn't drag.",
        url: "https://www.youtube.com/watch?v=5WJ1PUHfozI"
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