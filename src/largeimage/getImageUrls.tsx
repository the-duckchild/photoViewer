import './largeimage.css';

const brokenImages = [
    1, 24, 32, 36, 44, 47
];

export function getImageUrls() {
    const urls = [];
    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/700/500.jpg`)
        }
    }
    return urls;
}

export const imageUrls = getImageUrls();
