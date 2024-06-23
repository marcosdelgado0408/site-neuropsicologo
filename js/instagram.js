const token = ''; // Substitua pelo seu token

async function fetchInstagramFeed() {
    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=${token}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching Instagram feed:', error);
    }
}

async function displayInstagramFeed() {
    const feedContainer = document.getElementById('instagram-feed');
    const feedData = await fetchInstagramFeed();

    if (feedData) {
        feedData.forEach((post, index) => {
            if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM' || post.media_type === 'VIDEO') {
                const postElement = document.createElement('div');
                postElement.classList.add('instagram-post');
                postElement.setAttribute('data-key', index);

                const postLink = document.createElement('a');
                postLink.href = post.permalink;
                postLink.target = '_blank';

                const postImage = document.createElement('img');
                postImage.src = post.media_url;
                postImage.alt = post.caption || 'Instagram Post';

                postLink.appendChild(postImage);
                postElement.appendChild(postLink);
                feedContainer.appendChild(postElement);
            }
        });

        initializeCarousel();
    } else {
        feedContainer.textContent = 'Erro ao carregar o feed do Instagram.';
    }
}

function initializeCarousel() {
    const items = document.querySelectorAll(".instagram-post");
    const offset = 30;

    gsap.set(items, {
        x: (index) => offset * index,
        y: (index) => -offset * index,
        zIndex: (index) => items.length - index
    });

    const totalItems = items.length;
    let currentItem = 0;

    function updatePositions() {
        for (let i = 0; i < totalItems; i++) {
            let itemIndex = (currentItem + i) % totalItems;
            let item = items[itemIndex];
            gsap.to(item, {
                duration: 0.5,
                x: offset * i,
                y: -offset * i,
                zIndex: totalItems - i,
                scale: 1,
                opacity: 1,
                ease: "power2.out"
            });
        }
    }

    function moveToNext() {
        currentItem = (currentItem + 1) % totalItems;
        updatePositions();
    }

    setInterval(moveToNext, 2000);

    updatePositions();
}

document.addEventListener('DOMContentLoaded', displayInstagramFeed);
