import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import all from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} class="d-block w-100" alt={data.title}/>
    </div>
    <div class="carousel-item">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} class="d-block w-100" alt={data.title}/>
    </div>
    <div class="carousel-item">
      <img src={`${process.env.PUBLIC_URL}${data.image}`} class="d-block w-100" alt={data.title}/>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</div>


