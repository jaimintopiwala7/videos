import axios from 'axios';
const KEY='AIzaSyBSsfIRpZIv042QY2TmRmehHaK2kHmjVaM';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type: 'video',
        key:KEY
    }
})
