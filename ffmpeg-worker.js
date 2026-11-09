/*
 * Same-origin worker shim for GitHub Pages.
 * The browser starts this worker from the website's own origin, then this
 * module imports the official FFmpeg worker module from jsDelivr.
 * This avoids constructing a Worker directly from a cross-origin CDN URL.
 */
import "https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.12.10/dist/esm/worker.js";
