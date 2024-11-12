import CMS from 'decap-cms-app'
import uploadcare from 'decap-cms-media-library-uploadcare'
import cloudinary from 'decap-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import CreditsPagePreview from './preview-templates/CreditsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('credits', CreditsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
