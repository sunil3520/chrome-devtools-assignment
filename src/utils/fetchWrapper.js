

import axios from 'axios';



const fetchResourceDetails = async (url, type) => {
  const startTime = new Date();
  try {
    const response = await axios.get(url, { proxy: false });
    const endTime = new Date();
    const duration = endTime - startTime;
    const size = response.headers['content-length'] || 'N/A';

    return {
      resourceName: url.split('/').pop() || url,
      url,
      method: 'GET',
      status: response.status,
      type,
      initiator: 'Other',
      size: `${size} B`,
      timing: duration,
      headers: response.headers,
      payload: null,
      response: response.data,
    };
  } catch (error) {
    const endTime = new Date();
    const duration = endTime - startTime;

    return {
      resourceName: url.split('/').pop() || url,
      url,
      method: 'GET',
      status: 'Network Error',
      type,
      initiator: 'Other',
      size: 'N/A',
      timing: duration,
      headers: {},
      payload: null,
      response: error.message,
    };
  }
};

const fetchWrapper = async (url) => {
  const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';

  try {
    const response = await axios.get(`${proxyUrl}${url}`);
    const htmlContent = response.data;

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    const fetchedRequests = [];

    const addRequest = (type, src) => {
      if (src) {
        fetchedRequests.push(fetchResourceDetails(src, type));
      }
    };

    doc.querySelectorAll('img').forEach((img) => addRequest('IMG', img.src));
    doc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => addRequest('CSS', link.href));
    doc.querySelectorAll('script').forEach((script) => addRequest('JS', script.src));
    doc.querySelectorAll('video, audio').forEach((media) => addRequest('MEDIA', media.src));
    doc.querySelectorAll('iframe').forEach((iframe) => addRequest('DOC', iframe.src));
    doc.querySelectorAll('link[rel="manifest"]').forEach((manifest) => addRequest('Manifest', manifest.href));
    doc.querySelectorAll('link[rel="font"]').forEach((font) => addRequest('Font', font.href));
    doc.querySelectorAll('link[rel="preload"]').forEach((preload) => addRequest('Other', preload.href));
    doc.querySelectorAll('link[as="fetch"]').forEach((fetch) => addRequest('Fetch/XHR', fetch.href));
    doc.querySelectorAll('link[as="websocket"]').forEach((ws) => addRequest('WS', ws.href));

    const results = await Promise.all(fetchedRequests);
    return results;
  } catch (error) {
    console.error('Error fetching the URL:', error);
    console.error('Error details:', error.response ? error.response.data : error.message);
  }
};

export default fetchWrapper;

