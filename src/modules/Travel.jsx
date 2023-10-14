import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';

function PhotoGallery() {
    // required parameter to fetch images
const urlEndpoint = '<YOUR_IMAGEKIT_URL_ENDPOINT>';

// optional parameters (needed for client-side upload)
const publicKey = '<YOUR_IMAGEKIT_PUBLIC_KEY>'; 
const authenticationEndpoint = 'https://www.your-server.com/auth';
}
    