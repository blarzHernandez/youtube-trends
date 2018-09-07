import express from 'express';
import * as config from '../config.json';
import { YoutubeService } from '../services/youtube';
import { Country } from "../services/country";

const router = express.Router();
const service = new YoutubeService();
const country = new Country();
const contries = country.getCountries();

/* GET home page. */
router.get('/', async (req, res) => {
  const promis = await service.getTrendingVideos();
  //We need to loop trouth all promises
  const trends = await Promise.all(promis);
  res.render('youtube/index', {
    title: config.title,
    videos: trends,
    countries : contries
  });
});

router.get('/:videoId', async (req, res) => {
  res.render('youtube/player', {
    title: config.title,
    countries : contries
  });
});


router.get('/:countryId', async (req, res) =>{
 res.render('youtube/player', {
    title: config.title
  });
});

module.exports = router;
