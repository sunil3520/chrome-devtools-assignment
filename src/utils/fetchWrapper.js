// import axios from 'axios';

// import axios from "axios";

// const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

// const axiosInstance = axios.create({
//   baseURL: CORS_PROXY_URL,
// });

// const detectType = (url) => {
//   const extension = url.split('.').pop().split('?')[0];
//   switch (extension) {
//     case 'js':
//       return 'JS';
//     case 'css':
//       return 'CSS';
//     case 'json':
//       return 'Manifest';
//     case 'ico':
//       return 'Image';
//     case 'png':
//     case 'jpg':
//     case 'jpeg':
//     case 'gif':
//     case 'svg':
//       return 'Image';
//     case 'xml':
//       return 'Fetch';
//     case 'html':
//       return 'Document';
//     default:
//       if (url.includes('/ws')) {
//         return 'WebSocket';
//       }
//       if (url.includes('/xhr')) {
//         return 'Fetch/XHR';
//       }
//       return 'Document';
//   }
// };

// axiosInstance.interceptors.request.use((request) => {
//   request.metadata = { startTime: new Date() };
//   return request;
// });

// axiosInstance.interceptors.response.use((response) => {
//   const { config } = response;
//   const { metadata } = config;
//   metadata.endTime = new Date();
//   response.duration = metadata.endTime - metadata.startTime;

//   const resourceName = config.url.split('/').pop() || config.url;
//   const type = detectType(config.url);
//   const size = response.headers['content-length'] || 'N/A';

//   const requestDetails = {
//     resourceName,
//     url: config.url,
//     method: config.method.toUpperCase(),
//     status: response.status,
//     type,
//     initiator: 'Other',
//     size: `${size} B`,
//     timing: response.duration,
//     headers: response.headers,
//     payload: config.data || null,
//     response: response.data,
//   };

//   if (!window.requestLogs) window.requestLogs = [];
//   window.requestLogs.push(requestDetails);

//   return response;
// }, (error) => {
//   const { config } = error;
//   const { metadata } = config;
//   metadata.endTime = new Date();
//   error.duration = metadata.endTime - metadata.startTime;

//   const resourceName = config.url.split('/').pop() || config.url;
//   const type = detectType(config.url);
//   const size = error.response ? (error.response.headers['content-length'] || 'N/A') : 'N/A';

//   const requestDetails = {
//     resourceName,
//     url: config.url,
//     method: config.method.toUpperCase(),
//     status: error.response ? error.response.status : 'Network Error',
//     type,
//     initiator: 'Other',
//     size: `${size} B`,
//     timing: error.duration,
//     headers: error.response ? error.response.headers : {},
//     payload: config.data || null,
//     response: error.response ? error.response.data : error.message,
//   };

//   if (!window.requestLogs) window.requestLogs = [];
//   window.requestLogs.push(requestDetails);

//   return Promise.reject(error);
// });

// export default axiosInstance;


// const fetchWrapper = async (url) => {
//   const proxyUrl = "https://cors-anywhere.herokuapp.com/";
//   try {
//     const response = await axios.get(`${proxyUrl}${url}`);
//     const htmlContent = response.data;

//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, "text/html");

//     const fetchedRequests = [];

//     doc
//       .querySelectorAll("img")
//       .forEach((img) => fetchedRequests.push({ type: "IMG", url: img.src }));
//     doc
//       .querySelectorAll('link[rel="stylesheet"]')
//       .forEach((link) =>
//         fetchedRequests.push({ type: "CSS", url: link.href })
//       );
//     doc
//       .querySelectorAll("script")
//       .forEach((script) =>
//         fetchedRequests.push({ type: "JS", url: script.src })
//       );
//     doc
//       .querySelectorAll("video, audio")
//       .forEach((media) =>
//         fetchedRequests.push({ type: "MEDIA", url: media.src })
//       );
//     doc
//       .querySelectorAll("iframe")
//       .forEach((iframe) =>
//         fetchedRequests.push({ type: "DOC", url: iframe.src })
//       );
//     doc
//       .querySelectorAll('link[rel="manifest"]')
//       .forEach((manifest) =>
//         fetchedRequests.push({ type: "Manifest", url: manifest.href })
//       );
//     doc
//       .querySelectorAll('link[rel="font"]')
//       .forEach((font) =>
//         fetchedRequests.push({ type: "Font", url: font.href })
//       );
//     doc
//       .querySelectorAll('link[rel="preload"]')
//       .forEach((preload) =>
//         fetchedRequests.push({ type: "Other", url: preload.href })
//       );
//     doc
//       .querySelectorAll('link[rel="stylesheet"][as="fetch"]')
//       .forEach((fetch) =>
//         fetchedRequests.push({ type: "Fetch/XHR", url: fetch.href })
//       );
//     doc
//       .querySelectorAll('link[rel="stylesheet"][as="websocket"]')
//       .forEach((ws) => fetchedRequests.push({ type: "WS", url: ws.href }));
      
//       return fetchedRequests;

//     // setAllRequests(fetchedRequests);
//     // dispatch({ type: "ADD_REQUESTS", payload: fetchedRequests });
//   } catch (error) {
//     console.error("Error fetching the URL:", error);
//     console.error(
//       "Error details:",
//       error.response ? error.response.data : error.message
//     );
//     // setError(error.message);
//   }
// };


// export default fetchWrapper;
// import axios from 'axios';

// const detectType = (url) => {
//   const extension = url.split('.').pop().split('?')[0];
//   switch (extension) {
//     case 'js':
//       return 'JS';
//     case 'css':
//       return 'CSS';
//     case 'json':
//       return 'Manifest';
//     case 'ico':
//       return 'X-ICON';
//     case 'png':
//     case 'jpg':
//     case 'jpeg':
//     case 'gif':
//     case 'svg':
//       return 'Image';
//     case 'xml':
//       return 'Fetch/XHR';
//     case 'html':
//       return 'Document';
//     default:
//       if (url.includes('/ws')) {
//         return 'WS';
//       }
//       if (url.includes('/xhr')) {
//         return 'XHR';
//       }
//       return 'Other';
//   }
// };

// const fetchWrapper = async (url) => {
//   const proxyUrl = 'https://thingproxy.freeboard.io/fetch/';

//   try {
//     // Fetch the main HTML content
//     const response = await axios.get(`${proxyUrl}${url}`);
//     const htmlContent = response.data;

//     // Parse the HTML content
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(htmlContent, 'text/html');

//     // Initialize an array to store fetched requests
//     const fetchedRequests = [];

//     // Function to add requests to the array
//     const addRequest = (type, src) => {
//       if (src) {
//         fetchedRequests.push({ type, url: src });
//       }
//     };

//     // Collect different types of resources
//     doc.querySelectorAll('img').forEach((img) => addRequest('IMG', img.src));
//     doc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => addRequest('CSS', link.href));
//     doc.querySelectorAll('script').forEach((script) => addRequest('JS', script.src));
//     doc.querySelectorAll('video, audio').forEach((media) => addRequest('MEDIA', media.src));
//     doc.querySelectorAll('iframe').forEach((iframe) => addRequest('DOC', iframe.src));
//     doc.querySelectorAll('link[rel="manifest"]').forEach((manifest) => addRequest('Manifest', manifest.href));
//     doc.querySelectorAll('link[rel="font"]').forEach((font) => addRequest('Font', font.href));
//     doc.querySelectorAll('link[rel="preload"]').forEach((preload) => addRequest('Other', preload.href));
//     doc.querySelectorAll('link[as="fetch"]').forEach((fetch) => addRequest('Fetch/XHR', fetch.href));
//     doc.querySelectorAll('link[as="websocket"]').forEach((ws) => addRequest('WS', ws.href));

//     return fetchedRequests;
//   } catch (error) {
//     console.error('Error fetching the URL:', error);
//     console.error('Error details:', error.response ? error.response.data : error.message);
//   }
// };

// export default fetchWrapper;

import axios from 'axios';

const detectType = (url) => {
  const extension = url.split('.').pop().split('?')[0];
  switch (extension) {
    case 'js':
      return 'JS';
    case 'css':
      return 'CSS';
    case 'json':
      return 'Manifest';
    case 'ico':
      return 'X-ICON';
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'svg':
      return 'Image';
    case 'xml':
      return 'Fetch/XHR';
    case 'html':
      return 'Document';
    default:
      if (url.includes('/ws')) {
        return 'WS';
      }
      if (url.includes('/xhr')) {
        return 'XHR';
      }
      return 'Other';
  }
};

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

