import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      Authorization: 
        `Client-ID GRk8R9tNHfAX_s-7faYs6mCl--aJ97yn4mxf5Fn7WT4`
    }
});