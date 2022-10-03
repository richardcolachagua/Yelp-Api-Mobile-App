import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer NODpQutYVyP0qZuE_ga_WbTIiktDOtXXcOBNRj7m1YZTdAuJE-RY646i5lmUWSBv1M5U7AWtXJHeVPPAg-mmlXGzsckG1zwJyRn5H7WUEIsUf2gpVx48-v5EqPH9YnYx'
    }
});
