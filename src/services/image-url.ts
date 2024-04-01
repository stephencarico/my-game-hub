import NoImagePlaceholder from '../assets/no-image-placeholder.webp'

const getCroppedImageUrl = (url: string) => {
  if (!url) return NoImagePlaceholder;

  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;