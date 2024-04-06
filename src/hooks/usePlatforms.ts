import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  return { data: platforms, error: null, isLoading: false };
}

export default usePlatforms;