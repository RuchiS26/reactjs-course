import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID NZGW8gkKKU5FTiZYP4r6K0VkBditiwaCyajpARhVfLM' 
    }
});