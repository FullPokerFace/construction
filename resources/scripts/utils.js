let isLoading = false;

const setLoading = (delay = 200) => {
    isLoading = true;
    setTimeout(()=>{
        isLoading = false;
    }, delay)
}

export const swipeLeft = (width, btn) => {
    if(!isLoading){
        setLoading();
        const showcaseImage = btn.closest('.showcase').querySelector('.showcase-image-container');
        const transformMatrix = window.getComputedStyle(showcaseImage).transform;
        if (transformMatrix === 'none') return;
        const xTransform = parseInt(transformMatrix.split(',')[4]);
        if (xTransform >= 0) return;
        showcaseImage.style.transform = `translateX(${xTransform + width}px)`;
    }
}

export const swipeRight = (width, btn) => {
    if(!isLoading){
        setLoading();
        const showcaseImage = btn.closest('.showcase').querySelector('.showcase-image-container');
        const transformMatrix = window.getComputedStyle(showcaseImage).transform;
        const imageCount = showcaseImage.querySelectorAll('img').length;
        const showcaseWidth = parseInt(window.getComputedStyle(showcaseImage).width) * imageCount;
        if (transformMatrix === 'none') { showcaseImage.style.transform = `translateX(${-width}px)`; };
        const xTransform = parseInt(transformMatrix.split(',')[4]);
        if (xTransform <= width - showcaseWidth) { return };
        showcaseImage.style.transform = `translateX(${xTransform - width}px)`;
    }
}